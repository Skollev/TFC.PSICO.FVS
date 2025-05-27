package psico.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {
	@Autowired
	private JWTAuthenticationFilter JWTAuthenticationFilter;

	@Bean
	AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration)
			throws Exception {
		return authenticationConfiguration.getAuthenticationManager();
	}

	@Bean
	PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http.cors().and()
				.csrf().disable()
				.authorizeHttpRequests()

				// LOGIN
				.requestMatchers("/login").permitAll()

				// CITA
				.requestMatchers(HttpMethod.GET, "/cita/{id}").hasAnyAuthority("PACIENTE", "TERAPEUTA")
				.requestMatchers(HttpMethod.GET, "/cita/dePaciente").hasAuthority("PACIENTE")
				.requestMatchers(HttpMethod.GET, "/cita/deTerapeuta").hasAuthority("TERAPEUTA")
				.requestMatchers(HttpMethod.PUT, "/cita").hasAnyAuthority("PACIENTE", "TERAPEUTA")
				.requestMatchers(HttpMethod.POST, "/cita/pagar/{id}").hasAuthority("TERAPEUTA")
				.requestMatchers(HttpMethod.POST, "/cita/confirmar/{id}").hasAuthority("PACIENTE")
				.requestMatchers(HttpMethod.POST, "/cita/{id}").hasAuthority("PACIENTE")
				.requestMatchers(HttpMethod.DELETE, "/cita/{id}").hasAnyAuthority("TERAPEUTA", "PACIENTE")

				// INFORME SESION
				.requestMatchers(HttpMethod.GET, "/informe/{id}").hasAnyAuthority("PACIENTE", "TERAPEUTA")
				.requestMatchers(HttpMethod.GET, "/informe/cita/{id}").hasAnyAuthority("PACIENTE", "TERAPEUTA")
				.requestMatchers(HttpMethod.POST, "/informe/{idCita}").hasAnyAuthority("TERAPEUTA", "PACIENTE")
				.requestMatchers(HttpMethod.DELETE, "/informe/{idCitaActual}").hasAnyAuthority("TERAPEUTA", "PACIENTE")

				// PACIENTE
				.requestMatchers(HttpMethod.GET, "/paciente").hasAuthority("TERAPEUTA")
				.requestMatchers(HttpMethod.GET, "/paciente/{id}").hasAnyAuthority("TERAPEUTA", "PACIENTE")
				.requestMatchers(HttpMethod.POST, "/paciente").permitAll()
				.requestMatchers(HttpMethod.PUT, "/paciente").hasAnyAuthority("TERAPEUTA", "PACIENTE")
				.requestMatchers(HttpMethod.DELETE, "/paciente").hasAnyAuthority("TERAPEUTA", "PACIENTE")

				// TERAPEUTA
				.requestMatchers(HttpMethod.GET, "/terapeuta").permitAll()
				.requestMatchers(HttpMethod.GET, "/terapeuta/{id}").permitAll()
				.requestMatchers(HttpMethod.POST, "/terapeuta").hasAnyAuthority("TERAPEUTA")
				.requestMatchers(HttpMethod.PUT, "/terapeuta").hasAnyAuthority("TERAPEUTA")
				.requestMatchers(HttpMethod.DELETE, "/terapeuta").hasAuthority("TERAPEUTA")

				// SWAGGER
				.requestMatchers("/swagger-ui/**").permitAll()
				.requestMatchers("/v3/api-docs/**").permitAll()

				// OTRAS RUTAS
				.anyRequest().authenticated();

		http.addFilterBefore(JWTAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
		return http.build();
	}

}