package psico.security;

import java.util.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import jakarta.servlet.http.HttpServletRequest;
import psico.entity.Paciente;
import psico.entity.Terapeuta;
import psico.entity.Usuario;
import psico.service.PacienteService;
import psico.service.TerapeutaService;
import psico.service.UsuarioService;

@Component
public class JWTUtils {
	private static final String JWT_FIRMA = "JaviSBC";
	private static final long EXTENCION_TOKEN = 86400000;
	
	@Autowired
	@Lazy
	private UsuarioService usuarioService;

	@Autowired
	@Lazy
	private PacienteService pacienteService;
	
	@Autowired
	@Lazy
	private TerapeutaService terapeutaService;

	public static String getToken(HttpServletRequest request) {
		String tokenBearer = request.getHeader("Authorization");
		if (StringUtils.hasText(tokenBearer) && tokenBearer.startsWith("Bearer ")) {
			return tokenBearer.substring(7);
		}
		return null;
	}

	public static boolean validateToken(String token) {
		try {
			Jwts.parser().setSigningKey(JWT_FIRMA).parseClaimsJws(token);
			return true;
		} catch (Exception e) {
			throw new AuthenticationCredentialsNotFoundException("JWT ha experido o no es valido");
		}
	}

	public static String getUsernameOfToken(String token) {
		return Jwts.parser().setSigningKey(JWT_FIRMA).parseClaimsJws(token).getBody().getSubject();
	}

	public static String generateToken(Authentication authentication) {
		String username = authentication.getName();
		Date fechaActual = new Date();
		Date fechaExpiracion = new Date(fechaActual.getTime() + EXTENCION_TOKEN);
		String rol = authentication.getAuthorities().iterator().next().getAuthority();

		String token = Jwts.builder()
				.setSubject(username)
				.claim("rol", rol)
				.setIssuedAt(fechaActual)
				.setExpiration(fechaExpiracion)
				.signWith(SignatureAlgorithm.HS512, JWT_FIRMA)
				.compact();
		return token;
	}

	@SuppressWarnings("unchecked")
	public <T> T userLogin() {
		String username = SecurityContextHolder.getContext().getAuthentication().getName();
		T res = null;

		if (StringUtils.hasText(username)) {
			Optional<Usuario> usuario0 = usuarioService.findByUsername(username);
			if (usuario0.isPresent()) {
				Usuario usuario = usuario0.get();
				switch (usuario.getRol()) {
				case PACIENTE:
					Optional<Paciente> pacienteOptional = pacienteService.findByUsername(username);
					if (pacienteOptional.isPresent()) {
						res = (T) pacienteOptional.get();
					}
					break;
				case TERAPEUTA:
					Optional<Terapeuta> terapeutaOptional = terapeutaService.findByUsername(username);
					if (terapeutaOptional.isPresent()) {
						res = (T) terapeutaOptional.get();
					}
					break;
				}
			}
		}
		return res;
	}
}
