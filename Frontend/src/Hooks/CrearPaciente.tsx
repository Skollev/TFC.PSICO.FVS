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

        return response;
    } catch (error) {
        console.error("Error al crear paciente:", error);
        throw error;
    }
}
