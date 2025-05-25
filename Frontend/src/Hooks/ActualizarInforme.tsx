import { InformeSesion } from "../Models/Interfaces";


export async function actualizarInforme(informeSesion: InformeSesion) {
    try {
        const token = localStorage.getItem("token");
        const API_BASE = import.meta.env.VITE_API_BASE_URL;

        console.log(informeSesion);

        const response = await fetch(`${API_BASE}/informe`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,

            },
            body: JSON.stringify({ informeSesion }),
        });

        return response;
    } catch (error) {
        console.error("Error al actualizar el informe:", error);
        throw error;
    }
}
