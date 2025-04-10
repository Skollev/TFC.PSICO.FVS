package psico.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import psico.entity.Terapeuta;

@Repository
public interface TerapeutaRepository extends JpaRepository<Terapeuta, Integer> {
	public Optional<Terapeuta> findByUsername(String username);
}
