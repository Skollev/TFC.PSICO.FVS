import { Grid } from "@mui/material";
import Footer from "../Components/Footer";
import FormularioModificarCita from "../Components/FormularioModificarCita";
import Header from "../Components/Header";


export default function PaginaActualizarInforme() {
    if (!localStorage.getItem("rol")) {
        window.location.href = "/";
    } else if (localStorage.getItem("rol") == "PACIENTE") {
        window.location.href = "/";
    }

    return (
        <>
            <Header />
            <Grid height={"100vh"}>
                <FormularioModificarCita />
            </Grid>
            <Footer />
        </>
    )
}