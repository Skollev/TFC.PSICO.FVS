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
    try {
        const response = await fetch("http://localhost:8080/paciente", {
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
