import { Grid, Typography, Paper } from '@mui/material';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

export default function PaginaConsentimientoInformado() {
    return (
        <Grid container justifyContent="center" alignItems="center" minHeight="100vh" sx={{ backgroundColor: '#ffffff', padding: 2 }}>
            <Paper elevation={3} sx={{ padding: 4, maxWidth: 800 }}>
                <Typography variant="h4" gutterBottom display="flex" alignItems="center" gap={1}>
                    <AssignmentIndIcon color="secondary" />
                    Consentimiento Informado
                </Typography>
                <Typography variant="body2">
                    Explicación sobre la aceptación consciente por parte del paciente o usuario respecto a los servicios ofrecidos.
                </Typography>
            </Paper>
        </Grid>
    );
}
