export async function citasPorPaciente() {
    try {
        const token = localStorage.getItem("token");

        const API_BASE = import.meta.env.VITE_API_BASE_URL;
        const response = await fetch(`${API_BASE}/cita/dePaciente`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,

            },
            body: JSON.stringify({
            }),
        });

        return response;
    } catch (error) {
        console.error("Error al obtener las citas del paciente:", error);
        throw error;
    }
}
