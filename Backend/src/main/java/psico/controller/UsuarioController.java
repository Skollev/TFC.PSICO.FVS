package psico.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import psico.entity.Roles;
import psico.entity.Usuario;
import psico.entity.UsuarioLogin;
import psico.repository.UsuarioRepository;
import psico.security.JWTUtils;

@RestController
public class UsuarioController {
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private UsuarioRepository usuarioRepository;

	@PostMapping("/login")
	public ResponseEntity<Map<String, String>> login(@RequestBody UsuarioLogin usuarioLogin) {
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(usuarioLogin.getUsername(), usuarioLogin.getPassword()));
		SecurityContextHolder.getContext().setAuthentication(authentication);

		Optional<Usuario> optionalUsuario = usuarioRepository.findByUsername(usuarioLogin.getUsername());

		String token = JWTUtils.generateToken(authentication);

		Map<String, String> response = new HashMap<>();
		response.put("token", token);

		if (optionalUsuario.isPresent()) {
			Usuario usuario = optionalUsuario.get();
			int id = usuario.getId();
			Roles rol = usuario.getRol();
			response.put("id", id + "");
			response.put("rol", rol.toString());
		}

		return ResponseEntity.ok(response);
	}
}
