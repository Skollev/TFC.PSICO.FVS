export async function cancelarCita(id: number) {

    const confirmacion = window.confirm("¿Estás seguro de que deseas cancelar esta cita?");
    if (!confirmacion) {
        return;
    }


    const token = localStorage.getItem("token");


    try {

        const API_BASE = import.meta.env.VITE_API_BASE_URL;
        const response = await fetch(`${API_BASE}/cita/${id}`, {
            method: "Delete",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,

            }
        });

        if (!response.ok) {
            throw new Error(`Error en la petición: ${response.statusText}`);
        }


        window.location.reload();
        alert("Cita cancelada correctamente");
        return response;

    } catch (error) {
        console.error("Error al cancelar la cita en el frontend:", error);
        throw error;
    }
}

