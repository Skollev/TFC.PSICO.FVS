package psico.service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import psico.entity.Usuario;
import psico.repository.UsuarioRepository;

@Service
public class UsuarioService implements UserDetailsService {
	@Autowired
	private UsuarioRepository usuarioRepository;

	public Optional<Usuario> findByUsername(String username) {
		return usuarioRepository.findByUsername(username);
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<Usuario> usuario0 = this.findByUsername(username);
		if (usuario0.isPresent()) {
			Set<GrantedAuthority> authorities = new HashSet<GrantedAuthority>();
			authorities.add(new SimpleGrantedAuthority(usuario0.get().getRol().toString()));
			User user = new User(usuario0.get().getUsername(), usuario0.get().getPassword(), authorities);
			return user;
		} else {
			throw new UsernameNotFoundException("Username no encontrado");
		}
	}
}
