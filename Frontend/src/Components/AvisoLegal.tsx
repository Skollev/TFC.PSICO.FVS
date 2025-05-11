import { Grid, Typography, Paper } from '@mui/material';
import GavelIcon from '@mui/icons-material/Gavel';

export default function PaginaAvisoLegal() {
    return (
        <Grid container justifyContent="center" alignItems="center" minHeight="100vh" sx={{ backgroundColor: '#ffffff', padding: 2 }}>
            <Paper elevation={3} sx={{ padding: 4, maxWidth: 800 }}>
                <Typography variant="h4" gutterBottom display="flex" alignItems="center" gap={1}>
                    <GavelIcon color="secondary" />
                    Aviso Legal
                </Typography>
                <Typography variant="body2">
                    Aquí irá el contenido del aviso legal. Puedes incluir cláusulas legales, derechos del usuario, identificación del responsable, etc.
                </Typography>
            </Paper>
        </Grid>
    );
}
