type Props = {
    username: string;
    password: string;
};

export async function iniciarSesion({ username, password }: Props) {
    try {
        const response = await fetch("http://localhost:8080/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username, password
            }),
        });

        return response;
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
        throw error;
    }
}
