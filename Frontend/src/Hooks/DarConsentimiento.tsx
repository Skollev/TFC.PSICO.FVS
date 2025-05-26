import { Paciente } from "../Models/Interfaces";


export async function darConsentimiento(paciente: Paciente) {
    try {
        const token = localStorage.getItem("token");
        const API_BASE = import.meta.env.VITE_API_BASE_URL;

        const response = await fetch(`${API_BASE}/paciente`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,

            },
            body: JSON.stringify(paciente),
        });

        return response;
    } catch (error) {
        console.error("Error al actualizar el paciente:", error);
        throw error;
    }
}
