package psico.entity;

import java.time.LocalDateTime;

import org.hibernate.validator.constraints.URL;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.NotNull;

@Entity
public class Cita extends DomainEntity {

	@NotNull
	private LocalDateTime fecha;

	@URL
	private String link;

	@NotNull
	private Boolean confirmada;

	@NotNull
	private Boolean pagado;

	@JsonManagedReference
	@OneToOne
	@JoinColumn(name = "informe_sesion_id")
	private InformeSesion informeSesion;

	public Cita() {
		super();
	}

	public LocalDateTime getFecha() {
		return fecha;
	}

	public void setFecha(LocalDateTime fecha) {
		this.fecha = fecha;
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}

	public Boolean getConfirmada() {
		return this.confirmada;
	}

	public void setConfirmada(Boolean confirmada) {
		this.confirmada = confirmada;
	}

	public Boolean getPagado() {
		return pagado;
	}

	public void setPagado(Boolean pagado) {
		this.pagado = pagado;
	}

	public InformeSesion getInformeSesion() {
		return informeSesion;
	}

	public void setInformeSesion(InformeSesion informeSesion) {
		this.informeSesion = informeSesion;
	}

}
