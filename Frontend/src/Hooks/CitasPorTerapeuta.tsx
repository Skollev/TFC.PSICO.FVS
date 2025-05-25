import { InterfazCita } from "../Models/Interfaces";

export async function citasPorTerapeuta() {
    try {
        const token = localStorage.getItem("token");
        const API_BASE = import.meta.env.VITE_API_BASE_URL;

        const response = await fetch(`${API_BASE}/cita/deTerapeuta`, {
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
