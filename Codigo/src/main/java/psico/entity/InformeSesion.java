package psico.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.NotBlank;

@Entity
public class InformeSesion extends DomainEntity {

    @NotBlank
    private String demanda;

    @NotBlank
    private String tarea;

    @JsonBackReference
    @OneToOne(mappedBy = "informeSesion")
    private Cita cita;

    public InformeSesion() {
        super();
    }

    public String getDemanda() {
        return this.demanda;
    }

    public void setDemanda(String demanda) {
        this.demanda = demanda;
    }

    public String getTarea() {
        return this.tarea;
    }

    public void setTarea(String tarea) {
        this.tarea = tarea;
    }

    public Cita getCita() {
        return cita;
    }

    public void setCita(Cita cita) {
        this.cita = cita;
    }

}