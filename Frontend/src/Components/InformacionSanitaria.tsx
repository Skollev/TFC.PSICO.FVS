import { Grid, Typography, Paper } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

export default function PaginaInformacionSanitaria() {
    return (
        <Grid container justifyContent="center" alignItems="center" minHeight="100vh" sx={{ backgroundColor: '#ffffff', padding: 2 }}>
            <Paper elevation={3} sx={{ padding: 4, maxWidth: 800 }}>
                <Typography variant="h4" gutterBottom display="flex" alignItems="center" gap={1}>
                    <InfoIcon color="secondary" />
                    Información Sanitaria
                </Typography>
                <Typography variant="body2">
                    La práctica de la terapia psicológica implica la recogida, gestión y almacenamiento de datos relacionados con tu salud mental. Esta información es esencial para ofrecerte una atención profesional, personalizada y adecuada a tus necesidades.
                </Typography>

                <Typography variant="body2">
                    Los datos sanitarios recogidos incluyen, entre otros, tu historial clínico, evaluaciones psicológicas, diagnósticos, evolución durante el tratamiento y cualquier otra información relevante para tu proceso terapéutico.
                </Typography>

                <Typography variant="body2">
                    Toda esta información será tratada con estricta confidencialidad y conforme a lo establecido en la Ley de Protección de Datos Personales y garantía de los derechos digitales, así como en la normativa sanitaria vigente.
                </Typography>

                <Typography variant="body2">
                    El acceso a tu información sanitaria estará limitado exclusivamente a los profesionales directamente implicados en tu atención psicológica. En ningún caso se compartirá con terceros sin tu consentimiento explícito, salvo en supuestos contemplados por la ley.
                </Typography>

                <Typography variant="body2">
                    Tienes derecho a acceder a tu información sanitaria, solicitar su rectificación, oposición o eliminación, y recibir copia de tu historial clínico si así lo deseas. Estos derechos pueden ejercerse contactando directamente con el profesional responsable de tu tratamiento.
                </Typography>
            </Paper>
        </Grid>
    );
}
