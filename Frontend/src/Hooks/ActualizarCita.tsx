import { InterfazCita } from "../Models/Interfaces";


export async function actualizarCita(cita: InterfazCita) {
    try {
        const token = localStorage.getItem("token");
        const API_BASE = import.meta.env.VITE_API_BASE_URL;

        const response = await fetch(`${API_BASE}/cita`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,

            },
            body: JSON.stringify(cita),
        });

        return response;
    } catch (error) {
        console.error("Error al actualizar la cita:", error);
        throw error;
    }
}
