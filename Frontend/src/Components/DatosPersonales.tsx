import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { darConsentimiento } from "../Hooks/DarConsentimiento";
import { Paciente, Terapeuta } from "../Models/Interfaces";

interface Props {
    usuario: Paciente | Terapeuta;
}

function manejarConsentimiento(usuario: Paciente) {
    usuario.consentimiento = true;
    darConsentimiento(usuario as Paciente);
    window.location.reload();
}

export default function DatosPersonales({ usuario }: Props) {
    const esPaciente = usuario.rol === "PACIENTE";

    return (
        <Grid container justifyContent="center" px={2} py={4}>
            <Paper
                elevation={4}
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: 4,
                    p: 4,
                    borderRadius: 4,
                    border: "2px solid #198754",
                    width: "70%",
                    bgcolor: "#ffffff",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "0 0 auto",
                    }}
                >
                    <Avatar
                        alt={`${usuario.nombre} ${usuario.apellido}`}
                        src={usuario.foto}
                        sx={{
                            width: { xs: 120, sm: 160, md: 200 },
                            height: { xs: 120, sm: 160, md: 200 },
                            border: "2px solid #ccc",
                        }}
                    />
                </Box>

                <Box sx={{ flex: 1 }}>
                    <Typography variant="h2" fontWeight="bold" mb={2} color="primary">
                        Datos Personales
                    </Typography>

                    <Typography variant="h5" mb={1}>
                        <strong>Nombre:</strong> {usuario.nombre} {usuario.apellido}
                    </Typography>

                    <Typography variant="h5" mb={1}>
                        <strong>Correo:</strong> {usuario.correo}
                    </Typography>

                    {esPaciente ? (
                        <>
                            {!(usuario as Paciente).consentimiento ? (
                                <Typography variant="h5" mb={1}>
                                    <strong>Da su consentimiento:</strong> Acepta el <Link to="/consentimiento-informado">consentimiento informado</Link>
                                    <Button
                                        onClick={() => manejarConsentimiento(usuario as Paciente)}
                                        variant="outlined"
                                        sx={{ mt: 2 }}
                                    >
                                        Aceptar
                                    </Button>
                                </Typography>
                            ) : (
                                <Typography variant="h5" mb={1}>
                                    <strong>Da su consentimiento:</strong> Sí
                                </Typography>
                            )}
                        </>
                    ) : (
                        <Typography variant="h5" mb={1}>
                            <strong>Colegiación:</strong> {(usuario as Terapeuta).colegiacion}
                        </Typography>
                    )}
                </Box>

                {esPaciente && (
                    <Box alignSelf="flex-end">
                        <Button
                            variant="contained"
                            color="primary"
                            href="/pedirCita"
                        >
                            Pedir cita
                        </Button>
                    </Box>
                )}
            </Paper>
        </Grid>
    );
}
