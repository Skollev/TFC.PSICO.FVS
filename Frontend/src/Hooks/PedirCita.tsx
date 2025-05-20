export async function pedirCita(
    preferenciaHoraria: string,
    tipoTerapia: string,
    demanda: string
) {
    const confirmada = false;
    const pagado = false;
    const token = localStorage.getItem("token");

    try {
        const response = await fetch("http://localhost:8080/cita/1", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                preferenciaHoraria,
                tipoTerapia,
                confirmada,
                pagado,
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Error en el backend al crear la cita:", errorText);
            throw new Error("Error al crear cita");
        }

        const idText = await response.text();
        const id = Number(idText);
        const tarea = "";

        if (demanda != "") {
            const response2 = await fetch(`http://localhost:8080/informe/${id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ demanda, tarea }),
            });

            if (!response2.ok) {
                const errorText = await response2.text();
                console.error("Error en el backend al crear el informe:", errorText);
                throw new Error("Error al crear informe");
            }

            return true;

        }
    } catch (error) {
        console.error("Error en pedirCita:", error);
        alert("No se pudo completar la solicitud. Intenta de nuevo.");
        throw error;
    }
    window.location.href = "/perfil";
}
