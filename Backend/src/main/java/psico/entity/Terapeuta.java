package psico.entity;

import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.NotNull;

@Entity
public class Terapeuta extends Usuario {

	@NotNull
	private String colegiacion;

	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	private Set<Cita> citas;

	public Terapeuta() {
		super();
	}

	public String getColegiacion() {
		return colegiacion;
	}

	public void setColegiacion(String colegiacion) {
		this.colegiacion = colegiacion;
	}

	public Set<Cita> getCitas() {
		return citas;
	}

	public void setCitas(Set<Cita> citas) {
		this.citas = citas;
	}

}
