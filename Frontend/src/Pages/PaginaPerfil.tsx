import { useEffect, useState } from "react";
import DatosPersonales from "../Components/DatosPersonales";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { obtenerPaciente } from "../Hooks/ObtenerPaciente";
import { obtenerTerapeuta } from "../Hooks/ObtenerTerapeuta";
import Cita from "../Components/Cita";
import { InterfazCita } from "../Models/Interfaces";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

export default function PaginaPerfil() {
    const [usuario, setUsuario] = useState<any>(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const fetchUsuario = async () => {
            const idString = localStorage.getItem("id") ?? "0";
            const id = parseInt(idString);
            const rol = localStorage.getItem("rol");

            try {
                if (rol === "PACIENTE") {
                    const data = await obtenerPaciente(id);
                    setUsuario(data);
                } else {
                    const data = await obtenerTerapeuta(id);
                    setUsuario(data);
                }
            } catch (error) {
                console.error("Error al obtener usuario:", error);
            } finally {
                setCargando(false);
            }
        };

        fetchUsuario();
    }, []);

    if (cargando || !usuario) {
        return <p>Cargando perfil...</p>;
    }

    return (
        <>
            <Header />
            <DatosPersonales
                fotoPerfil={usuario.foto}
                nombre={usuario.nombre}
                correo={usuario.correo}
                apellido={usuario.apellido}
            />

            <Grid size={12}>
                <Divider>
                    <Typography variant="h4" textAlign="center">
                        Citas
                    </Typography>
                </Divider>
            </Grid>

            {usuario.citas?.map((unaCita: InterfazCita) => (
                <Cita key={unaCita.id} cita={unaCita} />
            ))}


            <Footer />
        </>
    );
}
