package psico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import psico.repository.PacienteRepository;
import psico.repository.TerapeutaRepository;
import psico.service.CitaService;
import psico.service.InformeSesionService;
import psico.service.PacienteService;
import psico.service.TerapeutaService;

@SpringBootApplication
public class PsicoApplication implements CommandLineRunner {

    @Autowired
    private TerapeutaService terapeutaService;

    @Autowired
    private PacienteService pacienteService;

    @Autowired
    private InformeSesionService informeService;

    @Autowired
    private CitaService citaService;

    @Autowired
    private PacienteRepository pacienteRepository;

    @Autowired
    private TerapeutaRepository terapeutaRepository;

    public static void main(String[] args) {
        SpringApplication.run(PsicoApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

        pacienteRepository.findAll().forEach(p -> {
            p.getCitas().clear();
            pacienteRepository.save(p);
        });

        terapeutaRepository.findAll().forEach(t -> {
            t.getCitas().clear();
            terapeutaRepository.save(t);
        });

        pacienteService.eliminarTodos();
        terapeutaService.eliminarTodos();
        citaService.eliminarTodos();
        informeService.eliminarTodos();

        terapeutaService.terapeutaPorDefecto();
    }
}
