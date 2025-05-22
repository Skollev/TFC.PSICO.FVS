package psico.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import psico.security.JWTUtils;
import psico.entity.Cita;
import psico.entity.InformeSesion;
import psico.entity.Paciente;
import psico.entity.Terapeuta;
import psico.repository.InformeSesionRepository;
import psico.repository.CitaRepository;

@Service
public class InformeSesionService {

    @Autowired
    private InformeSesionRepository informeSesionRepository;

    @Autowired
    private CitaRepository citaRepository;

    @Autowired
    private JWTUtils JWTUtils;

    public InformeSesion getInformeById(int id) {
        Optional<InformeSesion> informeO = informeSesionRepository.findById(id);

        if (informeO.isPresent()) {
            Object userLogin = JWTUtils.userLogin();

            InformeSesion informe = informeO.get();

            if (userLogin instanceof Terapeuta) {

                Terapeuta terapeuta = (Terapeuta) userLogin;

                if (terapeuta.getCitas().contains(informe.getCita())) {
                    return informe;
                }

            } else if (userLogin instanceof Paciente) {

                Paciente paciente = (Paciente) userLogin;

                if (paciente.getCitas().contains(informe.getCita())) {
                    return informe;
                }
            }
        }
        return null;
    }

    public InformeSesion getInformeByCita(int id) {

        Optional<Cita> citaO = citaRepository.findById(id);
        if (citaO.isPresent()) {
            Object userLogin = JWTUtils.userLogin();
            if (userLogin instanceof Terapeuta) {
                Terapeuta terapeuta = (Terapeuta) userLogin;
                terapeuta.getCitas().contains(citaO.get());
                return citaO.get().getInformeSesion();
            } else if (userLogin instanceof Paciente) {
                Paciente paciente = (Paciente) userLogin;
                paciente.getCitas().contains(citaO.get());
                return citaO.get().getInformeSesion();
            }
        }
        return null;
    }

    @Transactional
    public InformeSesion save(InformeSesion i, int idCita) {

        InformeSesion res = null;
        Optional<Cita> citaO = citaRepository.findById(idCita);
        if (!citaO.isEmpty()) {

            res = informeSesionRepository.save(i);
            Cita cita = citaO.get();
            cita.setInformeSesion(res);

            citaRepository.save(cita);
        }
        return res;
    }

    @Transactional
    public InformeSesion updateInformeSesion(InformeSesion InformeU) {
        Optional<InformeSesion> informeO = informeSesionRepository.findById(InformeU.getId());
        InformeSesion informe = informeO.get();
        if (informe != null) {
            informe.setDemanda(InformeU.getDemanda());
            informe.setTarea(InformeU.getTarea());
            return informeSesionRepository.save(informe);
        }
        return null;
    }

    public boolean deleteInformeSesion(int id) {
        boolean res = false;
        Optional<InformeSesion> informe0 = informeSesionRepository.findById(id);
        if (informe0.isPresent()) {
            Terapeuta terapeuta = JWTUtils.userLogin();

            InformeSesion informe = informe0.get();
            Cita cita = informe.getCita();

            if (terapeuta.getCitas().contains(cita)) {

                cita.setInformeSesion(null);
                citaRepository.save(cita);

                informeSesionRepository.deleteById(id);

                res = true;
            }
        }
        return res;
    }

}