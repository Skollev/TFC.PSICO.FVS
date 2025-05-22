import { InterfazCita } from "../Models/Interfaces";


export async function actualizarCita(cita: InterfazCita) {
    try {
        const token = localStorage.getItem("token");

        const response = await fetch("http://localhost:8080/cita", {
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
