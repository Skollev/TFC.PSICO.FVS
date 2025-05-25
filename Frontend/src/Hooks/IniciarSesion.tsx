export async function iniciarSesion(username: string, password: string) {
    try {
        const response = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            const errorText = await response.text(); // captura error aunque no sea JSON
            console.error("Respuesta con error:", response.status, errorText);
            throw new Error("Error en el backend");
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            const text = await response.text();
            console.error("Respuesta no JSON:", text);
            throw new Error("Respuesta del servidor no es JSON válida");
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
