import { Typography, Link, Grid } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LanguageIcon from '@mui/icons-material/Language';
import GavelIcon from '@mui/icons-material/Gavel';
import LockIcon from '@mui/icons-material/Lock';
import CookieIcon from '@mui/icons-material/Cookie';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import InfoIcon from '@mui/icons-material/Info';

export default function Footer() {
    return (
        <>
            <Grid
                container
                sx={{
                    backgroundColor: "#198754",
                    padding: 3,
                    justifyContent: "center",
                    flexWrap: "wrap",
                    textAlign: "center",
                }}
            >
                {/* Contacto */}
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    sx={{
                        gap: 2,
                        flexBasis: {
                            xs: "100%",
                            sm: "50%",
                            md: "33.3333%",
                        },
                        maxWidth: {
                            xs: "100%",
                            sm: "50%",
                            md: "33.3333%",
                        },
                        padding: 2,
                    }}
                >
                    <Typography variant="h6" color="white">Contacto</Typography>

                    <Grid container justifyContent="center" alignItems="center" sx={{ gap: 1 }}>
                        <InstagramIcon color="info" />
                        <Link href="https://www.instagram.com/rociopd_psico/">
                            <Typography variant="body2" color="white">rociopd_psico</Typography>
                        </Link>
                    </Grid>

                    <Grid container justifyContent="center" alignItems="center" sx={{ gap: 1 }}>
                        <FacebookIcon color="info" />
                        <Link href="https://www.facebook.com/profile.php?id=61552976534860">
                            <Typography variant="body2" color="white">Rocío Pérez Delgado</Typography>
                        </Link>
                    </Grid>

                    <Grid container justifyContent="center" alignItems="center" sx={{ gap: 1 }}>
                        <LanguageIcon color="info" />
                        <Link href="https://www.doctoralia.es/rocio-perez-delgado/psicologo/ecija">
                            <Typography variant="body2" color="white">Página de Doctoralia</Typography>
                        </Link>
                    </Grid>

                    <Grid container justifyContent="center" alignItems="center" sx={{ gap: 1 }}>
                        <LanguageIcon color="info" />
                        <Link href="https://www.mundopsicologos.com/centros/rocio-perez-delgado">
                            <Typography variant="body2" color="white">Página de Mundo Psicólogos</Typography>
                        </Link>
                    </Grid>
                </Grid>

                {/* Información Legal */}
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    sx={{
                        gap: 1,
                        flexBasis: {
                            xs: "100%",
                            sm: "50%",
                            md: "33.3333%",
                        },
                        maxWidth: {
                            xs: "100%",
                            sm: "50%",
                            md: "33.3333%",
                        },
                        padding: 2,
                    }}
                >
                    <Typography variant="h6" color="white" sx={{ paddingBottom: 2 }}>Información Legal</Typography>

                    <Grid container justifyContent="center" alignItems="center" sx={{ gap: 1 }}>
                        <GavelIcon color="info" />
                        <Link href="/aviso-legal">
                            <Typography variant="body2" color="white">Aviso Legal</Typography>
                        </Link>
                    </Grid>

                    <Grid container justifyContent="center" alignItems="center" sx={{ gap: 1 }}>
                        <LockIcon color="info" />
                        <Link href="/politica-privacidad">
                            <Typography variant="body2" color="white">Política de Privacidad</Typography>
                        </Link>
                    </Grid>

                    <Grid container justifyContent="center" alignItems="center" sx={{ gap: 1 }}>
                        <CookieIcon color="info" />
                        <Link href="/politica-cookies">
                            <Typography variant="body2" color="white">Política de Cookies</Typography>
                        </Link>
                    </Grid>

                    <Grid container justifyContent="center" alignItems="center" sx={{ gap: 1 }}>
                        <AssignmentIndIcon color="info" />
                        <Link href="/consentimiento-informado">
                            <Typography variant="body2" color="white">Consentimiento Informado</Typography>
                        </Link>
                    </Grid>

                    <Grid container justifyContent="center" alignItems="center" sx={{ gap: 1 }}>
                        <InfoIcon color="info" />
                        <Link href="/informacion-sanitaria">
                            <Typography variant="body2" color="white">Información Sanitaria</Typography>
                        </Link>
                    </Grid>
                </Grid>

                {/* Enlaces Rápidos */}
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    sx={{
                        gap: 1,
                        flexBasis: {
                            xs: "100%",
                            sm: "50%",
                            md: "33.3333%",
                        },
                        maxWidth: {
                            xs: "100%",
                            sm: "50%",
                            md: "33.3333%",
                        },
                        padding: 2,
                    }}
                >
                    <Typography variant="h6" color="white">Enlaces Rápidos</Typography>
                    <Link href="/" sx={{ color: "white", textDecoration: "none", mt: 1 }}>Inicio</Link>
                    <Link href="/pedirCita" sx={{ color: "white", textDecoration: "none", mt: 1 }}>Pedir Cita</Link>
                    <Link href="/informacion-legal" sx={{ color: "white", textDecoration: "none", mt: 1 }}>Información Legal</Link>
                </Grid>
            </Grid>

            {/* Pie de página */}
            <Grid
                container
                sx={{
                    backgroundColor: "#198754",
                    paddingBottom: 2,
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                }}
            >
                <Typography variant="body2" color="white">
                    &copy; {new Date().getFullYear()} Rocío Delgado Psicología. Todos los derechos reservados.
                </Typography>
            </Grid>
        </>
    );
}
