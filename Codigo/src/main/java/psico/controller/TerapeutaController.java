package psico.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import psico.entity.Terapeuta;
import psico.service.TerapeutaService;

@RestController
@RequestMapping("/terapeuta")
@Tag(name = "Terapeuta", description = "Operaciones relacionadas con la gestión de los terapeutas")
public class TerapeutaController {

	@Autowired
	private TerapeutaService terapeutaService;

	@GetMapping
	@Operation(summary = "Obtener todos los terapeutas")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Lista de terapeutas obtenida exitosamente"),
			@ApiResponse(responseCode = "500", description = "Error interno del servidor") })
	public ResponseEntity<List<Terapeuta>> getAllTerapeutas() {
		List<Terapeuta> terapeutas = terapeutaService.getAllTerapeutas();
		return ResponseEntity.ok(terapeutas);
	}

	@GetMapping("/{id}")
	@Operation(summary = "Buscar un terapeuta por ID")
	@ApiResponses(value = { @ApiResponse(responseCode = "200", description = "Terapeuta encontrado"),
			@ApiResponse(responseCode = "404", description = "Terapeuta no encontrado") })
	public ResponseEntity<Terapeuta> findOneTerapeuta(@PathVariable int id) {
		Optional<Terapeuta> terapeuta = terapeutaService.getTerapeutaById(id);
		if (terapeuta.isPresent()) {
			return ResponseEntity.ok(terapeuta.get());
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
		}
	}

	@PostMapping
	@ApiResponses(value = { @ApiResponse(responseCode = "201", description = "Terapeuta creado exitosamente"),
			@ApiResponse(responseCode = "400", description = "Solicitud inválida"),
			@ApiResponse(responseCode = "409", description = "El username ya está en uso") })
	public ResponseEntity<String> saveTerapeuta(@RequestBody Terapeuta terapeuta) {
		if (terapeutaService.findByUsername(terapeuta.getUsername()).isPresent()) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("El username ya está en uso");
		} else {
			Terapeuta t = terapeutaService.saveTerapeuta(terapeuta);
			if (t != null) {
				return ResponseEntity.status(HttpStatus.CREATED).body("Terapeuta creado exitosamente");
			} else {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("No se pudo crear el terapeuta");
			}
		}
	}

	@PutMapping()
	@Operation(summary = "Actualizar un terapeuta existente")
	@ApiResponses(value = { 
	    @ApiResponse(responseCode = "200", description = "Terapeuta actualizado exitosamente"),
	    @ApiResponse(responseCode = "404", description = "Terapeuta no encontrado"),
	    @ApiResponse(responseCode = "400", description = "Solicitud inválida") 
	})
	public ResponseEntity<String> updateTerapeuta(@RequestBody Terapeuta updatedTerapeuta) {
	    Terapeuta response = terapeutaService.updateTerapeuta(updatedTerapeuta);
	    if (response != null) {
	        return ResponseEntity.status(HttpStatus.OK).body("Terapeuta actualizado exitosamente");
	    } else {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Terapeuta no encontrado");
	    }
	}


	@DeleteMapping("/{id}")
	@Operation(summary = "Eliminar un terapeuta logueado")
	@ApiResponses(value = { 
	    @ApiResponse(responseCode = "200", description = "Terapeuta eliminado exitosamente"),
	    @ApiResponse(responseCode = "404", description = "Terapeuta no encontrado o no eliminado") 
	})
	public ResponseEntity<String> deleteTerapeuta() {
	    boolean result = terapeutaService.deleteTerapeuta();
	    if (result) {
	        return ResponseEntity.status(HttpStatus.OK).body("Terapeuta eliminado exitosamente");
	    } else {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Terapeuta no encontrado o no eliminado");
	    }
	}

}