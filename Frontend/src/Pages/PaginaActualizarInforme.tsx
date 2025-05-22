import Footer from "../Components/Footer";
import FormularioInforme from "../Components/FormularioInforme";
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
            <FormularioInforme />
            <Footer />
        </>
    )
}