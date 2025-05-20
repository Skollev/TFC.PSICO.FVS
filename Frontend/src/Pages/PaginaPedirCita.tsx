import Footer from "../Components/Footer";
import FormularioCita from "../Components/FormularioCita";
import Header from "../Components/Header";


export default function PaginaPedirCita() {
    if (!localStorage.getItem("rol")) {
        window.location.href = "/Login";
    } else if (localStorage.getItem("rol") == "TERAPEUTA") {
        window.location.href = "/";
    }

    return (
        <>
            <Header />
            <FormularioCita />
            <Footer />
        </>
    )
}