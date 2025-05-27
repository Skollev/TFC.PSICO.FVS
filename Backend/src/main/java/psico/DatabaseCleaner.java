package psico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import jakarta.transaction.Transactional;
import psico.repository.CitaRepository;
import psico.repository.InformeSesionRepository;
import psico.repository.PacienteRepository;
import psico.repository.TerapeutaRepository;

@Component
public class DatabaseCleaner {

    @Autowired
    private CitaRepository citaRepository;
    @Autowired
    private InformeSesionRepository informeSesionRepository;
    @Autowired
    private PacienteRepository pacienteRepository;
    @Autowired
    private TerapeutaRepository terapeutaRepository;

    @Transactional
    public void limpiarBaseDeDatos() {
        pacienteRepository.findAll().forEach(p -> {
            p.getCitas().clear();
        });

        terapeutaRepository.findAll().forEach(t -> {
            t.getCitas().clear();
        });

        pacienteRepository.flush();
        terapeutaRepository.flush();

        citaRepository.deleteAll();
        informeSesionRepository.deleteAll();
        pacienteRepository.deleteAll();
        terapeutaRepository.deleteAll();
    }
}
