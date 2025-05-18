export async function citasPorTerapeuta() {
    try {
        const token = localStorage.getItem("token");

        const response = await fetch(`/cita/deTerapeuta`, {
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
        console.error("Error al obtener las citas del terapeuta:", error);
        throw error;
    }
}
