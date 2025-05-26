import { Box, Divider, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Boton from "./Boton";


import crecimiento from "../Assets/crecimiento.png";
import rumia from "../Assets/rumia.png";
import construir from "../Assets/construir.png";
import contemplar from "../Assets/contemplar.png";
import avanzar from "../Assets/avanzar.png";
import BrochazoVerde from "../Assets/BrochazoVerde.png";
import BrochazoAzul from "../Assets/BrochazoAzul.png";
import BrochazoBlanco from "../Assets/BrochazoBlanco.png";
import CardBasico from "./Card";

import Animaciones from "../Assets/Animations/Animaciones";
import useVisible from "../Hooks/Visible";
import { useState } from "react";
import PrecioCircular from "./PrecioCircular";

export default function Inicio() {
    const [imgRef, imgVisible] = useVisible<HTMLImageElement>();
    const [gridRef, gridVisible] = useVisible<HTMLDivElement>();
    const [groupRef, groupVisible] = useVisible<HTMLDivElement>();
    const [typographyRef, typographyVisible] = useVisible<HTMLDivElement>();
    const [fadeIn, setFadeIn] = useState(false);

    const handleAnimationEnd = () => {
        setFadeIn(true);
    };

    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <Animaciones />
            {/* Sección de bienvenida */}
            <Grid container spacing={4} justifyContent="center" alignItems="center">
                <Grid size={{ xs: 12, sm: 12, md: 6, lg: 5 }} display="flex" justifyContent="center">
                    <Box
                        component="img"
                        src={crecimiento}
                        alt="Imagen sobre el crecimiento extraida de Freepik.es"
                        sx={{
                            width: { xs: "80vw", md: "30vw" },
                        }}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 6, lg: 7 }}>
                    <Typography
                        variant="h3"
                        ref={typographyRef}
                        component="div"
                        sx={{
                            backgroundImage: `url(${BrochazoVerde})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            color: "#ffffff",
                            p: 4,
                            textAlign: "center",
                            animation: typographyVisible ? "slideRight 1s ease-out" : "none",
                        }}
                    >
                        El arte
                    </Typography>
                    <Typography
                        variant="h3"
                        ref={typographyRef}
                        component="div"
                        sx={{
                            backgroundImage: `url(${BrochazoAzul})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            color: "#ffffff",
                            p: 4,
                            textAlign: "center",
                            animation: typographyVisible ? "slideLeft 1s ease-out" : "none",
                        }}
                    >
                        de aprender a
                    </Typography>
                    <Typography
                        variant="h3"
                        ref={typographyRef}
                        component="div"
                        sx={{
                            backgroundImage: `url(${BrochazoVerde})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            color: "#ffffff",
                            p: 4,
                            textAlign: "center",
                            animation: typographyVisible ? "slideRight 1s ease-out" : "none",
                        }}
                    >
                        CUIDARNOS
                    </Typography>
                </Grid>

                {/* Sección de presentación */}
                <Grid container justifyContent="center" sx={{ mt: 4 }}>
                    <Grid
                        container
                        justifyContent="center"
                        sx={{
                            flexBasis: "100%",
                            maxWidth: "100%",
                            px: 2,
                        }}
                    >
                        <Divider >
                            <Typography variant="h4" textAlign="center">
                                Hola, soy Rocío Delgado
                            </Typography>
                        </Divider>
                    </Grid>

                    <Grid
                        container
                        direction="column"
                        alignItems="center"
                        sx={{
                            mt: 4,
                            flexBasis: {
                                xs: "100%",
                                md: "66.6666%",
                            },
                            maxWidth: {
                                xs: "100%",
                                md: "66.6666%",
                            },
                            px: 2,
                            textAlign: "center",
                            gap: 3,
                        }}
                    >
                        <Typography variant="h5">
                            Estoy aquí para acompañarte sin juicios en momentos difíciles y no tan difíciles.
                            Creamos juntas/os un espacio seguro para entender lo que sientes, ponerle nombre y avanzar a tu ritmo, con herramientas que de verdad ayudan.
                        </Typography>

                        <Box>
                            <Boton direccion="/pedirCita" valor="Pide tu cita" />
                        </Box>
                    </Grid>
                </Grid>


                {/* Sección de dudas */}
                <Grid
                    container
                    direction={{ xs: "column", md: "row" }}
                    justifyContent="center"
                    alignItems="center"
                    sx={{ px: 2 }}
                >
                    <Grid
                        container
                        justifyContent="center"
                        sx={{
                            flexBasis: { xs: "100%", md: "50%" },
                            maxWidth: { xs: "100%", md: "50%" },
                            p: 4,
                        }}
                    >
                        <Box
                            display="flex"
                            flexDirection="column"
                            sx={{
                                animation: isMdUp && fadeIn ? "fadeIn 1s ease-out" : "none",
                                opacity: isMdUp ? (fadeIn ? 1 : 0) : 1,
                            }}
                        >
                            <Typography
                                variant="h1"
                                textAlign="center"
                                p={3}
                                sx={{
                                    borderBottom: "4px solid #198754",
                                    borderLeft: "4px solid #198754",
                                    borderRadius: 2,
                                    boxShadow: 3,
                                }}
                            >
                                ¿Tienes dudas?
                            </Typography>

                            <Typography variant="h3" p={2}>
                                La terapia ofrece un espacio seguro para comprenderte mejor y atender lo que sientes.
                            </Typography>
                            <Typography variant="h3" p={2}>
                                Iniciar un proceso terapéutico es un acto de autocuidado y compromiso contigo mismo/a.
                            </Typography>
                            <Typography variant="h3" p={2}>
                                La terapia ayuda a romper patrones que limitan tu bienestar y a construir nuevas formas de vivir.
                            </Typography>
                            <Typography variant="h3" p={2}>
                                Cuidar tu salud mental impacta positivamente en todas las áreas de tu vida.
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid
                        container
                        justifyContent="center"
                        sx={{
                            flexBasis: { xs: "100%", md: "40%" },
                            maxWidth: { xs: "100%", md: "40%" },
                            p: 3,
                        }}
                    >
                        <Box
                            component="img"
                            ref={imgRef}
                            src={rumia}
                            alt="Imagen sobre la rumia extraída de Freepik.es"
                            sx={{
                                width: { xs: "80vw", md: "30vw" },
                                animation: isMdUp && imgVisible ? "slideUpAndRight 1s ease-out" : "none",
                                opacity: isMdUp ? (imgVisible ? 1 : 0) : 1,
                            }}
                            onAnimationEnd={handleAnimationEnd}
                        />
                    </Grid>
                </Grid>

                {/* Sección de proceso terapéutico */}
                <Grid size={12}>
                    <Typography
                        variant="h3"
                        textAlign="center"
                        sx={{
                            backgroundImage: `url(${BrochazoBlanco})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                            p: { xs: 4, md: 12 },
                        }}
                    >
                        Comienza tu cambio
                    </Typography>
                </Grid>

                <Grid
                    container
                    spacing={4}
                    ref={gridRef}
                    justifyContent="center"
                    alignItems="stretch"
                    sx={{
                        animation: gridVisible ? "slideLeft 1s ease-out" : "none",
                        opacity: gridVisible ? 1 : 0,
                    }}
                >
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <CardBasico
                            imagen={avanzar}
                            altImagen={"Imagen sobre avanzar en tu bienestar emocional"}
                            encabezado={"Avanza hacia tu bienestar"}
                            texto={"Dar el primer paso es avanzar hacia una vida más plena. La terapia te acompaña en ese camino con apoyo y herramientas para mejorar tu bienestar emocional."}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <CardBasico
                            imagen={construir}
                            altImagen={"Imagen sobre construir un proceso terapéutico"}
                            encabezado={"Construye tu proceso"}
                            texto={"Juntos/as construimos un espacio seguro y personalizado para ti. En cada sesión fortalecemos tu confianza y damos forma a tu propio proceso de cambio."}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <CardBasico
                            imagen={contemplar}
                            altImagen={"Imagen sobre contemplar tu crecimiento personal"}
                            encabezado={"Contempla tu crecimiento"}
                            texto={"La terapia es un momento para contemplar tus logros y aprendizajes. Te ayudará a conocerte mejor y valorar cada paso de tu crecimiento personal."}
                        />
                    </Grid>
                </Grid>

                {/* Sección de precios */}

                <Grid size={12}>
                    <Typography
                        variant="h3"
                        textAlign="center"
                        sx={{
                            backgroundImage: `url(${BrochazoBlanco})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                            p: { xs: 4, md: 12 },
                        }}
                    >
                        ¿Cómo comienza tu terapia?
                    </Typography>
                </Grid>

                <Grid
                    container
                    size={12}
                    ref={groupRef}
                    sx={{
                        animation: groupVisible ? "slideUp 1s ease-out" : "none",
                        opacity: groupVisible ? 1 : 0,
                        flexDirection: { xs: "column", md: "row" },
                    }}
                >
                    <Grid
                        size={{ xs: 12, md: 7 }}
                        container
                        display="flex"
                        flexDirection="column"
                        borderRight={{ xs: "none", md: 3 }}
                        borderColor="#198754"
                        p={2}
                    >
                        <Typography
                            variant="h3"
                            p={2}
                            borderRight={{ xs: "none", md: 3 }}
                            borderBottom={3}
                            borderColor="#198754"
                            borderRadius={10}
                            boxShadow={2}
                            sx={{
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    backgroundColor: "#e0f9ee",
                                    transform: "translateY(-10px)",
                                    boxShadow: 4,
                                },
                            }}
                        >
                            1. Completa el formulario de contacto.
                        </Typography>
                        <Typography
                            variant="h3"
                            p={2}
                            borderRight={{ xs: "none", md: 3 }}
                            borderBottom={3}
                            borderColor="#198754"
                            borderRadius={10}
                            boxShadow={2}
                            sx={{
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    backgroundColor: "#e0f9ee",
                                    transform: "translateY(-10px)",
                                    boxShadow: 4,
                                },
                            }}
                        >
                            2. Agendamos tu primera cita.
                        </Typography>
                        <Typography
                            variant="h3"
                            p={2}
                            borderRight={{ xs: "none", md: 3 }}
                            borderBottom={3}
                            borderColor="#198754"
                            borderRadius={10}
                            boxShadow={2}
                            sx={{
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    backgroundColor: "#e0f9ee",
                                    transform: "translateY(-10px)",
                                    boxShadow: 4,
                                },
                            }}
                        >
                            3. Realiza el pago y prepárate para la sesión.
                        </Typography>
                        <Box display="flex" justifyContent={{ xs: "center", md: "right" }} p={3}>
                            <Boton direccion="/pedirCita" valor="Pide tu cita" />
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, md: 5 }}>
                        <Grid
                            size={12}
                            display="flex"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                        >
                            <Box sx={{ paddingLeft: { xs: 0, md: 15 } }}>
                                <PrecioCircular precio={"35€"} texto={"Sesión individual"} />
                            </Box>
                        </Grid>
                        <Grid
                            size={12}
                            display="flex"
                            justifyContent="flex-end"
                            alignItems="flex-start"
                        >
                            <Box sx={{ paddingRight: { xs: 0, md: 15 } }}>
                                <PrecioCircular precio={"45€"} texto={"Sesión de pareja"} />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Box >
    );
}
