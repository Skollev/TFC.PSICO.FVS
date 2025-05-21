import { useEffect, useState } from "react";
import DatosPersonales from "../Components/DatosPersonales";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { obtenerPaciente } from "../Hooks/ObtenerPaciente";
import { obtenerTerapeuta } from "../Hooks/ObtenerTerapeuta";
import CitaPaciente from "../Components/CitaPaciente";
import { InterfazCita } from "../Models/Interfaces";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import CitaTerapeuta from "../Components/CitaTerapeuta";

export default function PaginaPerfil() {
    const [usuario, setUsuario] = useState<any>(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const fetchUsuario = async () => {
            const idString = localStorage.getItem("id") ?? "0";
            const id = parseInt(idString);
            const rol = localStorage.getItem("rol");
            console.log("Citas:", usuario?.citas); // Asegúrate que es un array

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
            {usuario.rol == "PACIENTE" ?
                usuario?.citas && usuario.citas.length > 0 ? usuario.citas?.map((unaCita: InterfazCita) => (
                    <CitaPaciente key={unaCita.id} cita={unaCita} />
                )) : (<Typography variant="h1" p={4} height={"30vh"}>Aún no hay citas...</Typography >)
                :
                usuario?.citas && usuario.citas.length > 0 ? usuario.citas?.map((unaCita: InterfazCita) => (
                    <CitaTerapeuta key={unaCita.id} cita={unaCita} />
                )) : (<Typography variant="h1" p={4} height={"30vh"}>Aún no hay citas...</Typography >)
            }
            <Footer />
        </>
    );
}
