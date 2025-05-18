import { Paciente } from "../Models/Interfaces";

export async function obtenerPaciente(id: number): Promise<Paciente> {
    try {

        const token = localStorage.getItem("token");


        const response = await fetch(`http://localhost:8080/paciente/${id}`, {
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
