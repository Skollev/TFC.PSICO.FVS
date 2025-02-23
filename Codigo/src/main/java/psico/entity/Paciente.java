package psico.entity;

import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.NotNull;

//Esto era caseta

@Entity
public class Paciente extends Usuario {
	@NotNull
	private Boolean consentimiento;

	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	private Set<Cita> citas;

	public Paciente() {
		super();
	}

	public void setConsentimiento(Boolean consentimiento) {
		this.consentimiento = consentimiento;
	}

	public Boolean getConsentimiento() {
		return consentimiento;
	}

	public Set<Cita> getCitas() {
		return citas;
	}

	public void setCitas(Set<Cita> citas) {
		this.citas = citas;
	}

}
