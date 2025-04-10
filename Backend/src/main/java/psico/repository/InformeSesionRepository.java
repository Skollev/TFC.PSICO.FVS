package psico.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import psico.entity.InformeSesion;

@Repository
public interface InformeSesionRepository extends JpaRepository<InformeSesion, Integer> {
}
