import { InterfazCita } from "../Models/Interfaces";

export async function citasPorId(id: Number) {
    try {
        const token = localStorage.getItem("token");

        const response = await fetch(`/api/cita/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,

            },
        });


        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const data: InterfazCita = await response.json();
        return data;

    } catch (error) {
        console.error("Error al obtener la cita por id:", error);
        throw error;
    }
}
