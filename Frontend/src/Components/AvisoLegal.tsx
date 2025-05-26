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
                    En cumplimiento con el deber de información recogido en la Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE), se informa lo siguiente:
                </Typography>

                <Typography variant="body2">
                    <strong>Responsable del sitio web:</strong> Rocío Pérez Delgado
                    <br />
                    <strong>Actividad profesional:</strong> Servicios de terapia psicológica
                    <br />
                    <strong>Correo electrónico de contacto:</strong> rociopdpsicologa@gmail.com
                </Typography>

                <Typography variant="body2">
                    El presente sitio web tiene como finalidad ofrecer información sobre los servicios de acompañamiento psicológico prestados por la profesional titular. La información ofrecida no sustituye en ningún caso una consulta o tratamiento personalizado.
                </Typography>

                <Typography variant="body2">
                    El uso de esta web implica la aceptación plena de los términos y condiciones aquí expuestos. El usuario se compromete a hacer un uso adecuado y lícito del sitio web y de sus contenidos.
                </Typography>

                <Typography variant="body2">
                    Los contenidos de esta página (textos, imágenes, logotipos, etc.) están protegidos por derechos de propiedad intelectual y no pueden ser reproducidos sin autorización expresa de la titular.
                </Typography>

                <Typography variant="body2">
                    Esta web puede contener enlaces a sitios web de terceros, cuya responsabilidad corresponde exclusivamente a sus respectivos propietarios.
                </Typography>

                <Typography variant="body2">
                    Para cualquier consulta relacionada con este aviso legal, puedes contactar mediante el correo indicado anteriormente.
                </Typography>

            </Paper>
        </Grid>
    );
}
