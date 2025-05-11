import { Grid, Typography, Paper } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';

export default function PaginaPoliticaPrivacidad() {
    return (
        <Grid container justifyContent="center" alignItems="center" minHeight="100vh" sx={{ backgroundColor: '#ffffff', padding: 2 }}>
            <Paper elevation={3} sx={{ padding: 4, maxWidth: 800 }}>
                <Typography variant="h4" gutterBottom display="flex" alignItems="center" gap={1}>
                    <LockIcon color="secondary" />
                    Política de Privacidad
                </Typography>
                <Typography variant="body2">
                    Aquí se describe cómo se recopilan, usan, almacenan y protegen los datos personales de los usuarios.
                </Typography>
            </Paper>
        </Grid>
    );
}
