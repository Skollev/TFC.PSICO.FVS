package psico.service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import psico.entity.Cita;
import psico.entity.Paciente;
import psico.entity.Terapeuta;
import psico.repository.CitaRepository;
import psico.repository.PacienteRepository;
import psico.repository.TerapeutaRepository;
import psico.security.JWTUtils;

@Service
public class CitaService {
	@Autowired
	private CitaRepository citaRepository;

	@Autowired
	private TerapeutaRepository terapeutaRepository;

	@Autowired
	private PacienteRepository pacienteRepository;

	@Autowired
	private JWTUtils JWTUtils;

	public Set<Cita> getAllCitasByPaciente() {
		Paciente paciente = JWTUtils.userLogin();
		return paciente.getCitas();
	}

	public Set<Cita> getAllCitasByTerapeuta() {
		Terapeuta terapeuta = JWTUtils.userLogin();
		return terapeuta.getCitas();
	}

	public Cita getCitasById(int id) {
		Optional<Cita> citaO = citaRepository.findById(id);
		if (citaO.isPresent()) {
			Object userLogin = JWTUtils.userLogin();
			if (userLogin instanceof Terapeuta) {
				Terapeuta terapeuta = (Terapeuta) userLogin;
				terapeuta.getCitas().contains(citaO.get());
				return citaO.get();
			} else if (userLogin instanceof Paciente) {
				Paciente paciente = (Paciente) userLogin;
				paciente.getCitas().contains(citaO.get());
				return citaO.get();
			}
		}
		return null;
	}

	@Transactional
	public Cita save(Cita s, int idTerapeuta) {
		Cita res = null;
		Optional<Terapeuta> terapeutaO = terapeutaRepository.findById(idTerapeuta);
		if (!terapeutaO.isEmpty()) {

			Paciente paciente = JWTUtils.userLogin();

			res = citaRepository.save(s);
			paciente.getCitas().add(res);

			Terapeuta terapeuta = terapeutaO.get();
			terapeuta.getCitas().add(res);
			terapeutaRepository.save(terapeuta);
		}
		return res;
	}

	@Transactional
	public boolean deleteCita(int id) {

		boolean res = false;
		Optional<Cita> cita0 = citaRepository.findById(id);
		if (cita0.isPresent()) {
			Terapeuta terapeuta = JWTUtils.userLogin();
			if (terapeuta != null) {

				Cita cita = cita0.get();

				if (terapeuta.getCitas().contains(cita)) {

					terapeuta.getCitas().remove(cita);

					List<Paciente> pacientes = pacienteRepository.findAll();

					for (Paciente paciente : pacientes) {

						if (paciente.getCitas().contains(cita)) {

							paciente.getCitas().remove(cita);

						}
					}

					citaRepository.deleteById(id);
					res = true;
				}
			}
		}
		return res;
	}

	public boolean pagarCita(int id) {
		boolean res = false;
		Optional<Cita> cita0 = citaRepository.findById(id);
		if (cita0.isPresent()) {

			cita0.get().setPagado(true);
			citaRepository.save(cita0.get());

			res = true;

		}
		return res;
	}
}
