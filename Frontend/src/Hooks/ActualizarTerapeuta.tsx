type props = {
    nombre: string;
    apellido: string;
    foto: string;
    correo: string;
    colegiacion: boolean;
}

export async function actualizarTerapeuta({ nombre, apellido, foto, correo, colegiacion }: props) {
    try {
        const token = localStorage.getItem("token");
        const API_BASE = import.meta.env.VITE_API_BASE_URL;

        const response = await fetch(`${API_BASE}/terapeuta`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,

            },
            body: JSON.stringify({ nombre, apellido, foto, correo, colegiacion }),
        });

        return response;
    } catch (error) {
        console.error("Error al obtener las citas del terapeuta:", error);
        throw error;
    }
}
