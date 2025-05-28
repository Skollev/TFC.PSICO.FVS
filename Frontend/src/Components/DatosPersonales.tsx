import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { darConsentimiento } from "../Hooks/DarConsentimiento";
import { Paciente, Terapeuta } from "../Models/Interfaces";
import { actualizarPaciente } from "../Hooks/ActualizarPaciente";
import { actualizarTerapeuta } from "../Hooks/ActualizarTerapeuta";

interface Props {
    usuario: Paciente | Terapeuta;
}

function manejarConsentimiento(usuario: Paciente) {
    usuario.consentimiento = true;
    darConsentimiento(usuario);
    window.location.reload();
}

export default function DatosPersonales({ usuario }: Props) {
    const esPaciente = usuario.rol === "PACIENTE";
    const [editando, setEditando] = useState(false);
    const [datos, setDatos] = useState({
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        correo: usuario.correo,
        foto: usuario.foto
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setDatos({ ...datos, [name]: value });
    };

    const actualizarPerfil = async () => {
        try {
            usuario.nombre = datos.nombre;
            usuario.apellido = datos.apellido
            usuario.correo = datos.correo;
            usuario.foto = datos.foto;
            if (esPaciente) {
                await actualizarPaciente(usuario as Paciente);
            } else {
                await actualizarTerapeuta(usuario as Terapeuta);
            }

            window.location.reload();
        } catch (error) {
            console.error("Error al actualizar perfil:", error);
        }
    };

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
                        alt={`${datos.nombre} ${datos.apellido}`}
                        src={datos.foto}
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

                    {editando ? (
                        <>
                            <TextField fullWidth name="nombre" label="Nombre" value={datos.nombre} onChange={handleChange} sx={{ mb: 2 }} />
                            <TextField fullWidth name="apellido" label="Apellido" value={datos.apellido} onChange={handleChange} sx={{ mb: 2 }} />
                            <TextField fullWidth name="correo" label="Correo" value={datos.correo} onChange={handleChange} sx={{ mb: 2 }} />
                            <TextField fullWidth name="foto" label="URL de Foto" value={datos.foto} onChange={handleChange} sx={{ mb: 2 }} />
                        </>
                    ) : (
                        <>
                            <Typography variant="h5" mb={1}>
                                <strong>Nombre:</strong> {datos.nombre} {datos.apellido}
                            </Typography>
                            <Typography variant="h5" mb={1}>
                                <strong>Correo:</strong> {datos.correo}
                            </Typography>
                        </>
                    )}

                    {esPaciente ? (
                        <>
                            {(usuario as Paciente).consentimiento ? (
                                <Typography variant="h5" mb={1}>
                                    <strong>Da su consentimiento:</strong> Sí
                                </Typography>
                            ) : (
                                <Typography variant="h5" mb={1}>
                                    <strong>Da su consentimiento:</strong> Acepta el{" "}
                                    <Link to="/consentimiento-informado">consentimiento informado  </Link>
                                    <Button
                                        onClick={() => manejarConsentimiento(usuario as Paciente)}
                                        variant="outlined"
                                        sx={{ mt: 2 }}
                                    >
                                        Aceptar
                                    </Button>
                                </Typography>
                            )}
                        </>
                    ) : (
                        <Typography variant="h5" mb={1}>
                            <strong>Colegiación:</strong> {(usuario as Terapeuta).colegiacion}
                        </Typography>
                    )}

                    <Box mt={3}>
                        <Button
                            variant={editando ? "contained" : "outlined"}
                            color="primary"
                            onClick={() => {
                                if (editando) actualizarPerfil();
                                setEditando(!editando);
                            }}
                        >
                            {editando ? "Guardar cambios" : "Editar perfil"}
                        </Button>
                    </Box>
                </Box>

                {esPaciente && (
                    <Box alignSelf="flex-end">
                        <Button variant="contained" color="primary" href="/pedirCita">
                            Pedir cita
                        </Button>
                    </Box>
                )}
            </Paper>
        </Grid>
    );
}
