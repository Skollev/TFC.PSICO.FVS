import { Typography, Link, Grid } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LanguageIcon from '@mui/icons-material/Language';
import GavelIcon from '@mui/icons-material/Gavel';
import LockIcon from '@mui/icons-material/Lock';
import CookieIcon from '@mui/icons-material/Cookie';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import InfoIcon from '@mui/icons-material/Info';

export default function footer() {
    return (
        <>
            <Grid container spacing={12}
                sx={{
                    backgroundColor: "#198754",
                    color: "white",
                    padding: 3,
                    justifyContent: "space-around",
                }}
            >
                <Grid size={4} container direction="column" alignItems="center" sx={{ gap: 2 }}>
                    <Typography variant="h5">Contacto</Typography>

                    <Grid container direction="row" alignItems="center" justifyContent="center" sx={{ gap: 1 }}>
                        <InstagramIcon color="secondary" />
                        <Link href="https://www.instagram.com/rociopd_psico/">
                            <Typography variant="body2">rociopd_psico</Typography>
                        </Link>
                    </Grid>

                    <Grid container direction="row" alignItems="center" justifyContent="center" sx={{ gap: 1 }}>
                        <FacebookIcon color="secondary" />
                        <Link href="https://www.facebook.com/profile.php?id=61552976534860">
                            <Typography variant="body2">Rocío Pérez Delgado</Typography>
                        </Link>
                    </Grid>

                    <Grid container direction="row" alignItems="center" justifyContent="center" sx={{ gap: 1 }}>
                        <LanguageIcon color="secondary" />
                        <Link href="https://www.doctoralia.es/rocio-perez-delgado/psicologo/ecija#address-id=247617&is-online-only=false&filters%5Bspecializations%5D%5B%5D=60">
                            <Typography variant="body2">Página de Doctoralia</Typography>
                        </Link>
                    </Grid>

                    <Grid container direction="row" alignItems="center" justifyContent="center" sx={{ gap: 1 }}>
                        <LanguageIcon color="secondary" />
                        <Link href="https://www.mundopsicologos.com/centros/rocio-perez-delgado">
                            <Typography variant="body2">Página de Mundo Psicólogos</Typography>
                        </Link>
                    </Grid>
                </Grid>


                <Grid size={4} sx={{ textAlign: "center" }}>
                    <Typography variant="h5" sx={{ paddingBottom: 2 }}>
                        Información Legal
                    </Typography>
                    <Grid container direction="column" spacing={1}>

                        <Grid container direction="row" alignItems="center" justifyContent="center" sx={{ gap: 1 }}>
                            <GavelIcon color="secondary" />
                            <Link href="/aviso-legal" >
                                <Typography variant="body2">Aviso Legal</Typography>
                            </Link>
                        </Grid>

                        <Grid container direction="row" alignItems="center" justifyContent="center" sx={{ gap: 1 }}>
                            <LockIcon color="secondary" />
                            <Link href="/politica-privacidad" >
                                <Typography variant="body2">Política de Privacidad</Typography>
                            </Link>
                        </Grid>

                        <Grid container direction="row" alignItems="center" justifyContent="center" sx={{ gap: 1 }}>
                            <CookieIcon color="secondary" />
                            <Link href="/politica-cookies" >
                                <Typography variant="body2">Política de Cookies</Typography>
                            </Link>
                        </Grid>

                        <Grid container direction="row" alignItems="center" justifyContent="center" sx={{ gap: 1 }}>
                            <AssignmentIndIcon color="secondary" />
                            <Link href="/consentimiento-informado" >
                                <Typography variant="body2">Consentimiento Informado</Typography>
                            </Link>
                        </Grid>

                        <Grid container direction="row" alignItems="center" justifyContent="center" sx={{ gap: 1 }}>
                            <InfoIcon color="secondary" />
                            <Link href="/informacion-sanitaria" >
                                <Typography variant="body2">Información Sanitaria</Typography>
                            </Link>
                        </Grid>

                    </Grid>

                </Grid>

                <Grid size={4} sx={{ textAlign: "center" }}>
                    <Typography variant="h6">
                        Enlaces Rápidos
                    </Typography>
                    <Link href="/" color="textPrimary" sx={{ display: "block", textDecoration: "none" }}>
                        Inicio
                    </Link>
                    <Link href="/pedir-cita" color="textPrimary" sx={{ display: "block", textDecoration: "none" }}>
                        Pedir Cita
                    </Link>
                    <Link href="/precios" color="textPrimary" sx={{ display: "block", textDecoration: "none" }}>
                        Consultar Precios
                    </Link>
                    <Link href="/informacion-legal" color="textPrimary" sx={{ display: "block", textDecoration: "none" }}>
                        Información Legal
                    </Link>
                </Grid>
            </Grid >



            <Grid container spacing={12} sx={{
                backgroundColor: "#198754", paddingBottom: 2, justifyContent: "center", alignItems: "center",
            }}>
                < Typography variant="body2">
                    &copy; {new Date().getFullYear()} Rocío Delgado Psicología. Todos los derechos reservados.
                </Typography>
            </Grid >
        </>
    );
};

