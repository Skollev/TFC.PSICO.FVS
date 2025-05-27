import { Grid, Typography, Paper, Link } from '@mui/material';
import CookieIcon from '@mui/icons-material/Cookie';

export default function PaginaPoliticaCookies() {
    return (
        <Grid container justifyContent="center" alignItems="center" minHeight="100vh" sx={{ padding: 2 }}>
            <Paper elevation={3} sx={{ padding: 4, maxWidth: 800 }}>
                <Typography variant="h4" gutterBottom display="flex" alignItems="center" gap={1}>
                    <CookieIcon color="secondary" />
                    Política de Cookies
                </Typography>
                <Typography variant="body2" >
                    Nuestra página web utiliza cookies para mejorar tu experiencia de navegación, analizar el tráfico y personalizar el contenido. Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro sitio.
                </Typography>

                <Typography variant="body2" >
                    Utilizamos cookies propias y de terceros para:
                </Typography>

                <Typography variant="body2" component="ul" sx={{ pl: 4, mb: 2 }}>
                    <li>Recordar tus preferencias y configuraciones.</li>
                    <li>Analizar el uso de la página para mejorar su funcionamiento.</li>
                    <li>Mostrarte publicidad relevante según tus intereses.</li>
                </Typography>

                <Typography variant="body2" >
                    Puedes configurar o rechazar el uso de cookies en cualquier momento a través de las opciones de tu navegador o en el apartado de configuración de cookies de nuestro sitio.
                </Typography>

                <Typography variant="body2" >
                    Al continuar navegando por esta web, aceptas el uso de cookies conforme a esta política.
                </Typography>

                <Typography variant="body2">
                    Si deseas más información sobre qué son las cookies y cómo funcionan, visita{' '}
                    <Link href="https://www.allaboutcookies.org" target="_blank" rel="noopener" underline="hover">
                        www.allaboutcookies.org
                    </Link>.
                </Typography>
            </Paper>
        </Grid>
    );
}
