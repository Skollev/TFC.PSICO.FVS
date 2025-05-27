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

	public void eliminarTodos() {
		terapeutaRepository.deleteAll();
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
			defaultAdmin.setUsername("rpd");
			defaultAdmin.setPassword(passwordEncoder.encode("1234"));
			defaultAdmin.setNombre("Rocío");
			defaultAdmin.setApellido("Pérez Delgado");
			defaultAdmin.setCorreo("rpdpsicologa@gmail.com");
			defaultAdmin.setFoto(
					"https://scontent.fsvq4-1.fna.fbcdn.net/v/t39.30808-6/398315129_122106254072099217_6075357783283956060_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=O01nNVHLoAkQ7kNvwG4-syl&_nc_oc=AdnW9ABwO6u2fZJZ_F6z8_aEirVRnUt64kcPR4kkTOeUJhj0XvPNu5__0ke6FmA0lKo&_nc_zt=23&_nc_ht=scontent.fsvq4-1.fna&_nc_gid=TTJYOJ4hc-cUUt1X3KagAQ&oh=00_AfKeD_TfQYiqDON_Wt3h_Svc7VOqktB1Ah4DiVmQZL9G5A&oe=683BD956");
			defaultAdmin.setRol(Roles.TERAPEUTA);
			defaultAdmin.setColegiacion("AN12135");

			System.out.println("Usuario Admin creado por defecto");
			terapeutaRepository.save(defaultAdmin);
		}
	}

}