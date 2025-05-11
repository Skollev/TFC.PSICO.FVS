import { Grid, Typography, Paper } from '@mui/material';
import CookieIcon from '@mui/icons-material/Cookie';

export default function PaginaPoliticaCookies() {
    return (
        <Grid container justifyContent="center" alignItems="center" minHeight="100vh" sx={{ backgroundColor: '#ffffff', padding: 2 }}>
            <Paper elevation={3} sx={{ padding: 4, maxWidth: 800 }}>
                <Typography variant="h4" gutterBottom display="flex" alignItems="center" gap={1}>
                    <CookieIcon color="secondary" />
                    Política de Cookies
                </Typography>
                <Typography variant="body2">
                    Información sobre el uso de cookies en el sitio, tipos de cookies utilizadas y cómo desactivarlas.
                </Typography>
            </Paper>
        </Grid>
    );
}
