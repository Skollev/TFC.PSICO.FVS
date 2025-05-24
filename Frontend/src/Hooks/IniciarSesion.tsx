export async function iniciarSesion(username: string, password: string) {
    try {
        const response = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username, password
            }),
        });

        if (!response.ok) {
            throw new Error("Error en el backend");
        }

        const data = await response.json();
        localStorage.setItem('id', data.id);
        localStorage.setItem('rol', data.rol);
        localStorage.setItem('token', data.token);


        window.location.href = '/';
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
        throw error;
    }
}