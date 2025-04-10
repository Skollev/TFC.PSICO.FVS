package psico.service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import psico.entity.Roles;
import psico.entity.Terapeuta;
import psico.repository.TerapeutaRepository;
import psico.security.JWTUtils;

@Service
public class TerapeutaService {

	@Autowired
	private TerapeutaRepository terapeutaRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private JWTUtils JWTUtils;

	@Transactional
	public Terapeuta saveTerapeuta(Terapeuta terapeuta) {
		terapeuta.setCitas(new HashSet<>());
		terapeuta.setRol(Roles.TERAPEUTA);
		terapeuta.setPassword(passwordEncoder.encode(terapeuta.getPassword()));
		return terapeutaRepository.save(terapeuta);
	}

	@Transactional
	public Terapeuta updateTerapeuta(Terapeuta terapeutaU) {
		Terapeuta terapeuta = JWTUtils.userLogin();
		if (terapeuta != null) {
			terapeuta.setNombre(terapeutaU.getNombre());
			terapeuta.setApellido(terapeutaU.getApellido());
			terapeuta.setFoto(terapeutaU.getFoto());
			terapeuta.setCorreo(terapeutaU.getCorreo());
			terapeuta.setColegiacion(terapeutaU.getColegiacion());

			return terapeutaRepository.save(terapeuta);
		}
		return null;
	}

	public List<Terapeuta> getAllTerapeutas() {
		return terapeutaRepository.findAll();
	}

	public Optional<Terapeuta> getTerapeutaById(int id) {
		return terapeutaRepository.findById(id);
	}

	public Optional<Terapeuta> findByUsername(String username) {
		return terapeutaRepository.findByUsername(username);
	}

	@Transactional
	public boolean deleteTerapeuta() {
		Terapeuta terapeuta = JWTUtils.userLogin();
		if (terapeuta != null) {
			terapeutaRepository.deleteById(terapeuta.getId());
			return true;
		}
		return false;
	}

	public void terapeutaPorDefecto() {
		if (this.getAllTerapeutas().size() <= 0) {
			Terapeuta defaultAdmin = new Terapeuta();
			defaultAdmin.setUsername("admin");
			defaultAdmin.setPassword(passwordEncoder.encode("1234"));
			defaultAdmin.setNombre("admin");
			defaultAdmin.setApellido("Admin");
			defaultAdmin.setCorreo("admin@default.com");
			defaultAdmin.setFoto("http://default.png");
			defaultAdmin.setRol(Roles.TERAPEUTA);
			defaultAdmin.setColegiacion("XXYYZZZZZ");

			System.out.println("Usuario Admin creado por defecto");
			terapeutaRepository.save(defaultAdmin);
		}
	}

}