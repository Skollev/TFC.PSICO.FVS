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
import psico.DatabaseCleaner;

@SpringBootApplication
public class PsicoApplication implements CommandLineRunner {

    @Autowired
    private TerapeutaService terapeutaService;

    public static void main(String[] args) {
        SpringApplication.run(PsicoApplication.class, args);
    }

    @Autowired
    private DatabaseCleaner databaseCleaner;

    @Override
    public void run(String... args) throws Exception {

        databaseCleaner.limpiarBaseDeDatos();

        terapeutaService.terapeutaPorDefecto();
    }
}
