package psico.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import psico.entity.Cita;
import psico.entity.InformeSesion;
import psico.entity.Paciente;
import psico.entity.Terapeuta;
import psico.service.CitaService;

@RestController
@RequestMapping("/cita")
@Tag(name = "Cita", description = "Operaciones relacionadas con la gestión de las citas")
public class CitaController {

    @Autowired
    private CitaService citaService;

    @GetMapping("/dePaciente")
    @Operation(summary = "Obtener todas las citas de paciente")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Lista de citas de pacientes obtenida exitosamente"),
            @ApiResponse(responseCode = "500", description = "Error interno del servidor")
    })
    public ResponseEntity<Set<Cita>> getAllCitasByPaciente() {
        Set<Cita> listCitas = citaService.getAllCitasByPaciente();
        return ResponseEntity.ok(listCitas);
    }

    @GetMapping("/deTerapeuta")
    @Operation(summary = "Obtener todas las citas de terapeuta")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Lista de citas de terapeutas obtenida exitosamente"),
            @ApiResponse(responseCode = "500", description = "Error interno del servidor")
    })
    public ResponseEntity<Set<Cita>> getAllCitasByTerapeuta() {
        Set<Cita> listCitas = citaService.getAllCitasByTerapeuta();
        return ResponseEntity.ok(listCitas);
    }

    @GetMapping("/{id}")
    @Operation(summary = "Buscar una cita por ID filtrado por emisor y receptor propietario")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Cita encontrada"),
            @ApiResponse(responseCode = "404", description = "Cita no encontrada, o emisor/receptor no logueado")
    })
    public ResponseEntity<Cita> findOneCita(@PathVariable int id) {
        Cita cita = citaService.getCitasById(id);
        if (cita == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        } else {
            return ResponseEntity.ok(cita);
        }
    }

    @GetMapping("/{id}/informe")
    @Operation(summary = "Buscar el informe de una cita siguiendo el ID filtrado por emisor y receptor propietario")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Informe encontrado"),
            @ApiResponse(responseCode = "404", description = "Informe no encontrado, o emisor/receptor no logueado")
    })
    public ResponseEntity<InformeSesion> findOneCitaInforme(@PathVariable int id) {
        Cita cita = citaService.getCitasById(id);
        if (cita == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        } else {
            return ResponseEntity.ok(cita.getInformeSesion());
        }
    }

    @PostMapping("/pagar/{id}")
    @Operation(summary = "Marcar como pagada una cita por ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "202", description = "Cita pagada exitosamente"),
            @ApiResponse(responseCode = "400", description = "Error al pagar la cita")
    })
    public ResponseEntity<String> pagarCita(@PathVariable int id) {
        Boolean verEstado = citaService.pagarCita(id);
        if (verEstado == false) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error al pagar la cita");
        } else {
            return ResponseEntity.status(HttpStatus.ACCEPTED).body("Cita pagada correctamente");
        }
    }

    @PostMapping("/confirmar/{id}")
    @Operation(summary = "Marcar como confirmada una cita por ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "202", description = "Cita pagada exitosamente"),
            @ApiResponse(responseCode = "400", description = "Error al pagar la cita")
    })
    public ResponseEntity<String> confirmarCita(@PathVariable int id) {
        Boolean verEstado = citaService.confirmarCita(id);
        if (verEstado == false) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error al confirmar la cita en el backend");
        } else {
            return ResponseEntity.status(HttpStatus.ACCEPTED).body("Cita confirmada correctamente");
        }
    }

    @PostMapping("/{idTerapeuta}")
    @Operation(summary = "Crear una nueva cita para un terapeuta")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "202", description = "Cita creada exitosamente"),
            @ApiResponse(responseCode = "400", description = "Error al crear la cita")
    })
    public ResponseEntity<String> save(@RequestBody Cita c, @PathVariable int idTerapeuta) {

        Cita citaSave = citaService.save(c, idTerapeuta);

        if (citaSave == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error al crear la cita");
        } else {

            return ResponseEntity.status(HttpStatus.ACCEPTED).body(citaSave.getId() + "");
        }
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Eliminar una cita por ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "202", description = "Cita eliminada exitosamente"),
            @ApiResponse(responseCode = "400", description = "Error al borrar la cita")
    })
    public ResponseEntity<String> delete(@PathVariable int id) {
        Boolean verEstadoBorrado = citaService.deleteCita(id);
        if (verEstadoBorrado == false) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error al borrar la cita");
        } else {
            return ResponseEntity.status(HttpStatus.ACCEPTED).body("Cita borrada correctamente");
        }
    }
}
