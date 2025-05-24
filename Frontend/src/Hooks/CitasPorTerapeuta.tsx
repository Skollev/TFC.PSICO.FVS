import { InterfazCita } from "../Models/Interfaces";

export async function citasPorTerapeuta() {
    try {
        const token = localStorage.getItem("token");

        const response = await fetch(`/api/cita/deTerapeuta`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,

            },
            body: JSON.stringify({
            }),
        });

        const data: InterfazCita = await response.json();
        return data;
    } catch (error) {
        console.error("Error al obtener las citas del terapeuta:", error);
        throw error;
    }
}
