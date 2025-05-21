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
		Cita res = null;

		if (citaO.isPresent()) {

			Object userLogin = JWTUtils.userLogin();

			if (userLogin instanceof Terapeuta) {

				Terapeuta terapeuta = (Terapeuta) userLogin;

				if (terapeuta.getCitas().contains(citaO.get())) {

					res = citaO.get();

				}

			} else if (userLogin instanceof Paciente) {

				Paciente paciente = (Paciente) userLogin;

				if (paciente.getCitas().contains(citaO.get())) {

					res = citaO.get();

				}
			}
		}

		return res;
	}

	public Paciente getPacienteByCitaId(int id) {

		Optional<Cita> citaO = citaRepository.findById(id);
		Cita res = null;
		Paciente pacienteObtenido = null;

		if (citaO.isPresent()) {

			res = citaO.get();

			pacienteObtenido = res.getPaciente();
		}

		return pacienteObtenido;
	}

	@Transactional
	public Cita save(Cita s, int idTerapeuta) {
		Cita res = null;
		Optional<Terapeuta> terapeutaO = terapeutaRepository.findById(idTerapeuta);
		if (!terapeutaO.isEmpty()) {

			Paciente paciente = JWTUtils.userLogin();
			Terapeuta terapeuta = terapeutaO.get();

			s.setTerapeuta(terapeuta);
			s.setPaciente(paciente);

			if (s.getPagado() != true) {

				s.setPagado(false);
				res = citaRepository.save(s);

			} else {

				res = citaRepository.save(s);

			}

			paciente.getCitas().add(res);

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

	public boolean confirmarCita(int id) {
		boolean res = false;
		Optional<Cita> cita0 = citaRepository.findById(id);
		if (cita0.isPresent()) {

			Cita cita = cita0.get();
			cita.setConfirmada(true);
			citaRepository.save(cita);

			res = true;

		}
		return res;
	}

	public boolean pagarCita(int id) {
		boolean res = false;
		Optional<Cita> cita0 = citaRepository.findById(id);
		if (cita0.isPresent()) {

			Cita cita = cita0.get();
			cita.setPagado(true);
			citaRepository.save(cita);

			res = true;

		}
		return res;
	}
}
