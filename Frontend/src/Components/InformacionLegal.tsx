import {
    Grid,
    Typography,
    Link,
    Paper,
    Box,
} from '@mui/material';
import GavelIcon from '@mui/icons-material/Gavel';
import LockIcon from '@mui/icons-material/Lock';
import CookieIcon from '@mui/icons-material/Cookie';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import InfoIcon from '@mui/icons-material/Info';

export default function InformacionLegal() {
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            sx={{ backgroundColor: '#fffffff', padding: 2 }}
        >
            <Paper elevation={3} sx={{ padding: 4, width: 320 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Información Legal
                </Typography>

                <Box component="nav" sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Link
                        href="/aviso-legal"
                        underline="hover"
                        color="inherit"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            padding: 1,
                            borderRadius: 1,
                            transition: 'background-color 0.2s',
                            '&:hover': {
                                backgroundColor: '#f0f0f0',
                            },
                        }}
                    >
                        <GavelIcon color="secondary" />
                        <Typography variant="body2">Aviso Legal</Typography>
                    </Link>

                    <Link
                        href="/politica-privacidad"
                        underline="hover"
                        color="inherit"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            padding: 1,
                            borderRadius: 1,
                            transition: 'background-color 0.2s',
                            '&:hover': {
                                backgroundColor: '#f0f0f0',
                            },
                        }}
                    >
                        <LockIcon color="secondary" />
                        <Typography variant="body2">Política de Privacidad</Typography>
                    </Link>

                    <Link
                        href="/politica-cookies"
                        underline="hover"
                        color="inherit"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            padding: 1,
                            borderRadius: 1,
                            transition: 'background-color 0.2s',
                            '&:hover': {
                                backgroundColor: '#f0f0f0',
                            },
                        }}
                    >
                        <CookieIcon color="secondary" />
                        <Typography variant="body2">Política de Cookies</Typography>
                    </Link>

                    <Link
                        href="/consentimiento-informado"
                        underline="hover"
                        color="inherit"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            padding: 1,
                            borderRadius: 1,
                            transition: 'background-color 0.2s',
                            '&:hover': {
                                backgroundColor: '#f0f0f0',
                            },
                        }}
                    >
                        <AssignmentIndIcon color="secondary" />
                        <Typography variant="body2">Consentimiento Informado</Typography>
                    </Link>

                    <Link
                        href="/informacion-sanitaria"
                        underline="hover"
                        color="inherit"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            padding: 1,
                            borderRadius: 1,
                            transition: 'background-color 0.2s',
                            '&:hover': {
                                backgroundColor: '#f0f0f0',
                            },
                        }}
                    >
                        <InfoIcon color="secondary" />
                        <Typography variant="body2">Información Sanitaria</Typography>
                    </Link>
                </Box>
            </Paper>
        </Grid>
    );
}
