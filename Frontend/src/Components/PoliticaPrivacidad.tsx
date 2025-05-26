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

                <Typography variant="body2" >
                    En esta página se respetan y protegen los datos personales de los usuarios. Como usuario, debes saber que tus derechos están garantizados. Esta política de privacidad está redactada conforme al Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).
                </Typography>

                <Typography variant="body2" >
                    <strong>Responsable del tratamiento:</strong> Rocío Pérez Delgado
                </Typography>

                <Typography variant="body2" >
                    <strong>Correo electrónico de contacto:</strong> rociopdpsicologa@gmail.com
                </Typography>

                <Typography variant="body2" >
                    Los datos personales recabados serán tratados con la finalidad de ofrecer el servicio de terapia psicológica, gestionar citas, responder a consultas y realizar gestiones administrativas relacionadas.
                </Typography>

                <Typography variant="body2" >
                    Los datos se conservarán mientras exista una relación profesional o durante los años necesarios para cumplir con las obligaciones legales. No se cederán a terceros salvo obligación legal.
                </Typography>

                <Typography variant="body2" >
                    Puedes ejercer tus derechos de acceso, rectificación, supresión, limitación, portabilidad u oposición enviando una solicitud a través del correo electrónico indicado.
                </Typography>

                <Typography variant="body2" >
                    Se han adoptado medidas técnicas y organizativas para garantizar la seguridad e integridad de tus datos personales, evitando su pérdida, alteración o acceso no autorizado.
                </Typography>

                <Typography variant="body2" >
                    El uso de esta web implica la aceptación de esta política de privacidad. Nos reservamos el derecho a modificarla en función de cambios legislativos o jurisprudenciales.
                </Typography>

            </Paper>
        </Grid>
    );
}
