export async function confirmarPagoCita(id: number) {

    const token = localStorage.getItem("token");


    try {
        const response = await fetch(`/api/cita/pagar/${id}`, {
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

