import { Terapeuta } from "../Models/Interfaces";

export async function obtenerTerapeuta(id: number): Promise<Terapeuta> {

    const token = localStorage.getItem("token");
    const API_BASE = import.meta.env.VITE_API_BASE_URL;

    try {
        const response = await fetch(`${API_BASE}/terapeuta/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,

            }
        });

        if (!response.ok) {
            throw new Error(`Error en la petición: ${response.statusText}`);
        }

        const data = await response.json();
        return data as Terapeuta;

    } catch (error) {
        console.error("Error al obtener terapeuta:", error);
        throw error;
    }
}
