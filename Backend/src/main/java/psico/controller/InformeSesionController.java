package psico.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import psico.entity.InformeSesion;
import psico.service.InformeSesionService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/informe")
@Tag(name = "Informe", description = "Operaciones relacionadas con la gestión de los informes")
public class InformeSesionController {

    @Autowired
    private InformeSesionService informeService;

    @GetMapping("/{id}")
    @Operation(summary = "Buscar un informe por ID filtrado por emisor y receptor propietario")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Informe encontrado"),
            @ApiResponse(responseCode = "404", description = "Informe no encontrado, o emisor/receptor no logueado")
    })
    public ResponseEntity<InformeSesion> findOneInforme(@PathVariable int id) {
        InformeSesion informe = informeService.getInformeById(id);
        if (informe == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        } else {
            return ResponseEntity.ok(informe);
        }
    }

    @GetMapping("/cita/{id}")
    @Operation(summary = "Buscar un informe por una cita filtrado por emisor y receptor propietario")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Informe encontrado"),
            @ApiResponse(responseCode = "404", description = "Informe no encontrado, o emisor/receptor no logueado")
    })
    public ResponseEntity<InformeSesion> findOneInformeByCita(@PathVariable int id) {
        InformeSesion informe = informeService.getInformeByCita(id);
        if (informe == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        } else {
            return ResponseEntity.ok(informe);
        }
    }

    @PostMapping("/{idCita}")
    @Operation(summary = "Crear un nuevo informe para una cita")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "202", description = "Informe creado exitosamente"),
            @ApiResponse(responseCode = "400", description = "Error al crear el informe")
    })
    public ResponseEntity<String> save(@RequestBody InformeSesion i, @PathVariable int idCita) {

        InformeSesion informeSave = informeService.save(i, idCita);
        if (informeSave == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error al crear la cita");
        } else {
            return ResponseEntity.status(HttpStatus.ACCEPTED).body("Informe creado correctamente");
        }
    }

    @PutMapping
    @Operation(summary = "Actualizar un informe existente")
    @ApiResponses(value = { @ApiResponse(responseCode = "200", description = "Informe actualizado exitosamente"),
            @ApiResponse(responseCode = "404", description = "Informe no encontrado"),
            @ApiResponse(responseCode = "400", description = "Solicitud inválida") })
    public ResponseEntity<String> updateInforme(@RequestBody InformeSesion updatedInforme) {
        InformeSesion response = informeService.updateInformeSesion(updatedInforme);
        if (response != null) {
            return ResponseEntity.status(HttpStatus.OK).body("Informe actualizado exitosamente");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Informe no encontrado");
        }
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Eliminar un informe por ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "202", description = "Informe eliminado exitosamente"),
            @ApiResponse(responseCode = "400", description = "Error al borrar el informe")
    })
    public ResponseEntity<String> delete(@PathVariable int id) {
        Boolean verEstadoBorrado = informeService.deleteInformeSesion(id);
        if (verEstadoBorrado == false) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error al borrar el informe");
        } else {
            return ResponseEntity.status(HttpStatus.ACCEPTED).body("Informe borrado correctamente");
        }
    }

}