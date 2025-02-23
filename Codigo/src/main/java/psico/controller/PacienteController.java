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
import psico.entity.Paciente;
import psico.service.PacienteService;

@RestController
@RequestMapping("/paciente")
@Tag(name = "Paciente", description = "Operaciones relacionadas con la gestión de los pacientes")
public class PacienteController {

	@Autowired
	private PacienteService pacienteService;

	@GetMapping
	@Operation(summary = "Obtener todos los pacientes")
	@ApiResponses(value = { @ApiResponse(responseCode = "200", description = "Lista de pacientes obtenida exitosamente"),
			@ApiResponse(responseCode = "500", description = "Error interno del servidor") })
	public ResponseEntity<List<Paciente>> getAllPacientes() {
		List<Paciente> paciente = pacienteService.getAllPacientes();
		return ResponseEntity.ok(paciente);
	}

	@GetMapping("/{id}")
	@Operation(summary = "Buscar un paciente por ID")
	@ApiResponses(value = { @ApiResponse(responseCode = "200", description = "Paciente encontrado"),
			@ApiResponse(responseCode = "404", description = "Paciente no encontrado") })
	public ResponseEntity<Paciente> findOnePaciente(@PathVariable int id) {
		Optional<Paciente> paciente = pacienteService.getPacienteById(id);
		if (paciente.isPresent()) {
			return ResponseEntity.ok(paciente.get());
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
		}
	}

	@PostMapping
	@ApiResponses(value = { @ApiResponse(responseCode = "201", description = "Paciente creado exitosamente"),
			@ApiResponse(responseCode = "400", description = "Solicitud inválida"),
			@ApiResponse(responseCode = "409", description = "El username ya está en uso") })
	public ResponseEntity<String> savePaciente(@RequestBody Paciente paciente) {
		if (pacienteService.findByUsername(paciente.getUsername()).isPresent()) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("El username ya está en uso");
		} else {
			Paciente p = pacienteService.savePaciente(paciente);
			if (p != null) {
				return ResponseEntity.status(HttpStatus.CREATED).body("Paciente creado exitosamente");
			} else {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("No se pudo crear el paciente");
			}
		}
	}

	@PutMapping
	@Operation(summary = "Actualizar un paciente existente")
	@ApiResponses(value = { @ApiResponse(responseCode = "200", description = "Paciente actualizado exitosamente"),
			@ApiResponse(responseCode = "404", description = "Paciente no encontrado"),
			@ApiResponse(responseCode = "400", description = "Solicitud inválida") })
	public ResponseEntity<String> updatePaciente(@RequestBody Paciente updatedPaciente) {
		Paciente response = pacienteService.updatePaciente(updatedPaciente);
		if (response != null) {
			return ResponseEntity.status(HttpStatus.OK).body("Paciente actualizado exitosamente");
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Paciente no encontrado");
		}
	}

	@DeleteMapping("/{id}")
	@Operation(summary = "Eliminar un paciente logueado")
	@ApiResponses(value = { @ApiResponse(responseCode = "200", description = "Paciente eliminado exitosamente"),
			@ApiResponse(responseCode = "404", description = "Paciente no eliminado") })
	public ResponseEntity<String> deletePaciente(@PathVariable int id) {
		if (pacienteService.deletePaciente()) {
			return ResponseEntity.status(HttpStatus.OK).body("Paciente eliminado exitosamente");
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Paciente no eliminado");
		}
	}
}