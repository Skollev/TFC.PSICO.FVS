export async function confirmarPagoCita(id: number) {

    const token = localStorage.getItem("token");


    try {

        const API_BASE = import.meta.env.VITE_API_BASE_URL;

        const response = await fetch(`${API_BASE}/cita/pagar/${id}`, {
            method: "Post",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,

            }
        });

        if (!response.ok) {
            throw new Error(`Error en la petición: ${response.statusText}`);
        }


        window.location.reload();
        return response;

    } catch (error) {
        console.error("Error al confirmar la cita en el frontend:", error);
        throw error;
    }
}

