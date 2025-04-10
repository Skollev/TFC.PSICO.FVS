package psico.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import psico.entity.Paciente;

@Repository
public interface PacienteRepository extends JpaRepository<Paciente, Integer>{
	public Optional<Paciente> findByUsername(String username);

}
