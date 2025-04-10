package psico.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import psico.entity.Cita;

@Repository
public interface CitaRepository extends JpaRepository<Cita, Integer>{
}
