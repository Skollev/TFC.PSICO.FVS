import { InformeSesion } from "../Models/Interfaces";

export async function obtenerInforme(id: number) {
    try {
        const token = localStorage.getItem("token");
        const API_BASE = import.meta.env.VITE_API_BASE_URL;
        const response = await fetch(`${API_BASE}/informe/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const data: InformeSesion = await response.json();
        return data;
    } catch (error) {
        console.error("Error al obtener el informe:", error);
        throw error;
    }
}
