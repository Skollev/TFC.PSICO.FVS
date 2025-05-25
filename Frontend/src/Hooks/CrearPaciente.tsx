import { iniciarSesion } from "./IniciarSesion";

type Props = {
    nombre: string;
    apellido: string;
    foto: string;
    correo: string;
    username: string;
    password: string;
    consentimiento: boolean;
};

export async function crearPaciente({ nombre, apellido, foto, correo, username, password, consentimiento }: Props) {

    const API_BASE = import.meta.env.VITE_API_BASE_URL;

    try {
        const response = await fetch(`${API_BASE}/paciente`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nombre, apellido, foto, correo, username, password, consentimiento,
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Error en el backend:", errorText);
            throw new Error("Error al crear paciente");
        }

        await iniciarSesion(username, password);
    } catch (error) {
        console.error("Error al crear paciente:", error);
        alert("No se pudo crear el paciente. Intenta de nuevo.");
        throw error;
    }
}
