package psico.service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import psico.entity.Cita;
import psico.entity.Paciente;
import psico.entity.Roles;
import psico.repository.PacienteRepository;
import psico.security.JWTUtils;

@Service
public class PacienteService {
	@Autowired
	private PacienteRepository pacienteRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private JWTUtils JWTUtils;

	@Transactional
	public Paciente savePaciente(Paciente paciente) {
		paciente.setCitas(new HashSet<Cita>());

		paciente.setRol(Roles.PACIENTE);
		paciente.setPassword(passwordEncoder.encode(paciente.getPassword()));
		return pacienteRepository.save(paciente);
	}

	@Transactional
	public Paciente updatePaciente(Paciente pacienteU) {
		Paciente paciente = JWTUtils.userLogin();
		if (paciente != null) {
			paciente.setNombre(pacienteU.getNombre());
			paciente.setApellido(pacienteU.getApellido());
			paciente.setFoto(pacienteU.getFoto());
			paciente.setCorreo(pacienteU.getCorreo());
			paciente.setConsentimiento(pacienteU.getConsentimiento());
			paciente.setMayorDeEdad(pacienteU.getMayorDeEdad());

			return pacienteRepository.save(paciente);
		}
		return null;
	}

	public List<Paciente> getAllPacientes() {
		return pacienteRepository.findAll();
	}

	public Optional<Paciente> getPacienteById(int id) {
		return pacienteRepository.findById(id);
	}

	public Optional<Paciente> findByUsername(String username) {
		return pacienteRepository.findByUsername(username);
	}

	@Transactional
	public boolean deletePaciente() {
		Paciente paciente = JWTUtils.userLogin();
		if (paciente != null) {
			pacienteRepository.deleteById(paciente.getId());
			return true;
		}
		return false;
	}
}
