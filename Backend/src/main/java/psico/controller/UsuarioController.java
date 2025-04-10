package psico.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import psico.entity.UsuarioLogin;
import psico.security.JWTUtils;

@RestController
public class UsuarioController {
	@Autowired
	private AuthenticationManager authenticationManager;

	@PostMapping("/login")
	public ResponseEntity<Map<String, String>> login(@RequestBody UsuarioLogin usuarioLogin) {
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(usuarioLogin.getUsername(), usuarioLogin.getPassword()));
		SecurityContextHolder.getContext().setAuthentication(authentication);

		String token = JWTUtils.generateToken(authentication);

		Map<String, String> response = new HashMap<>();
		response.put("token", token);

		return ResponseEntity.ok(response);
	}
}
