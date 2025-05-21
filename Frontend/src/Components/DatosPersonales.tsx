import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

type Props = {
    nombre: string;
    fotoPerfil: string;
    correo: string;
    apellido: string;
};

export default function DatosPersonales({ nombre, fotoPerfil, correo, apellido }: Props) {
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
                        alt={`${nombre} ${apellido}`}
                        src={fotoPerfil}
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
                        <strong>Nombre:</strong> {nombre} {apellido}
                    </Typography>

                    <Typography variant="h5" mb={1}>
                        <strong>Correo:</strong> {correo}
                    </Typography>

                </Box>
                {localStorage.getItem("rol") == "PACIENTE" ? (
                    <Box alignSelf={"flex-end"}>
                        <Button
                            variant="contained"
                            color="primary"
                            href="/pedirCita"
                        >
                            Pedir cita
                        </Button>
                    </Box>
                ) : null}
            </Paper>
        </Grid >
    );
}
