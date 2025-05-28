import { Paciente, Terapeuta } from "../Models/Interfaces";
import { obtenerPaciente } from "./ObtenerPaciente";
import { obtenerTerapeuta } from "./ObtenerTerapeuta";

export async function pedirCita(
    preferenciaHoraria: string,
    tipoTerapia: string,
    demanda: string
) {
    const confirmada = false;
    const pagado = false;
    const token = localStorage.getItem("token");
    const idPaciente = localStorage.getItem("id");
    let paciente: Paciente;
    let terapeuta: Terapeuta;
    const API_BASE = import.meta.env.VITE_API_BASE_URL;
    try {
        paciente = await obtenerPaciente(Number(idPaciente));
    } catch (error) {
        console.error("Error en obtenerPaciente:", error);
        throw error;

    }
    console.log(paciente);

    try {
        terapeuta = await obtenerTerapeuta(1);
    } catch (error) {
        console.error("Error en obtenerTerapeuta:", error);

        throw error;
    }

    console.log(terapeuta);
    try {
        const response = await fetch(`${API_BASE}/cita/502`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                preferenciaHoraria,
                tipoTerapia,
                confirmada,
                pagado,
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Error en el backend al crear la cita:", errorText);
            throw new Error("Error al crear cita");
        }

        const idText = await response.text();
        const id = Number(idText);
        const tarea = "";

        if (demanda != "") {
            const response2 = await fetch(`${API_BASE}/informe/${id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ demanda, tarea }),
            });

            if (!response2.ok) {
                const errorText = await response2.text();
                console.error("Error en el backend al crear el informe:", errorText);
                throw new Error("Error al crear informe");
            }

            return true;

        }
    } catch (error) {
        console.error("Error en pedirCita:", error);
        alert("No se pudo completar la solicitud. Intenta de nuevo.");
        throw error;
    }

}
