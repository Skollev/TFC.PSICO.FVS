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
                    Detalles sobre prácticas sanitarias, precauciones, protocolos, o advertencias relevantes a la actividad profesional.
                </Typography>
            </Paper>
        </Grid>
    );
}
