import { Paciente } from "../Models/Interfaces";

export async function obtenerPaciente(id: number): Promise<Paciente> {
    try {

        const token = localStorage.getItem("token");
        const API_BASE = import.meta.env.VITE_API_BASE_URL;

        const response = await fetch(`${API_BASE}/paciente/${id}`, {
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
        return data as Paciente;

    } catch (error) {
        console.error("Error al obtener paciente:", error);
        throw error;
    }
}
