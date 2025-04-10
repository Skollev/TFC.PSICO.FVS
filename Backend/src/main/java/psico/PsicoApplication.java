package psico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import psico.service.TerapeutaService;

@SpringBootApplication
public class PsicoApplication implements CommandLineRunner {

    @Autowired
    private TerapeutaService terapeutaService;

    public static void main(String[] args) {
        SpringApplication.run(PsicoApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        // Invocar el método para crear el administrador por defecto si no existe

        terapeutaService.terapeutaPorDefecto();
    }
}
