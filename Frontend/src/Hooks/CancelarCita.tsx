export async function cancelarCita(id: number) {
    const confirmacion = window.confirm("¿Estás seguro de que deseas cancelar esta cita?");
    if (!confirmacion) return;

    const token = localStorage.getItem("token");




    try {
        const API_BASE = import.meta.env.VITE_API_BASE_URL;

        console.log("URL final:", `${API_BASE}/cita/${id}`);

        const response = await fetch(`${API_BASE}/cita/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        const mensaje = await response.text();

        if (!response.ok) {
            alert(`Error al cancelar la cita: ${mensaje}`);
            throw new Error(`Error en la petición: ${mensaje}`);
        }

        alert("Cita cancelada correctamente");
        window.location.reload();

    } catch (error) {
        console.error("Error al cancelar la cita en el frontend:", error);
    }
}
