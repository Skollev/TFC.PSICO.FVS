import { Paciente } from "../Models/Interfaces";

export async function actualizarPaciente(usuario: Paciente) {
    try {
        const token = localStorage.getItem("token");
        const API_BASE = import.meta.env.VITE_API_BASE_URL;

        const response = await fetch(`${API_BASE}/paciente`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(usuario),
        });

        return response;
    } catch (error) {
        console.error("Error al actualizar los datos del paciente:", error);
        throw error;
    }
}
