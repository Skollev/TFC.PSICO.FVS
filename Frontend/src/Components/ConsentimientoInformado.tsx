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

                <Typography variant="body1">
                    Al iniciar un proceso terapéutico conmigo, reconoces haber sido informado/a de forma clara y comprensible sobre la naturaleza del servicio psicológico ofrecido, su duración estimada, objetivos y posibles riesgos o efectos emocionales asociados al proceso.
                </Typography>

                <Typography variant="body1">
                    Toda la información compartida en sesión será tratada con estricta confidencialidad, respetando el deber de secreto profesional conforme a la normativa vigente. Solo podrá ser revelada en casos legalmente establecidos, como riesgo grave para ti o para terceros.
                </Typography>

                <Typography variant="body1">
                    Puedes interrumpir el proceso terapéutico en cualquier momento si así lo decides, sin necesidad de justificar tu decisión. Del mismo modo, tienes derecho a conocer el estado de tu evolución, solicitar aclaraciones y expresar cualquier inquietud relacionada con la intervención.
                </Typography>

                <Typography variant="body1">
                    Para prestar este servicio es necesario tratar algunos datos personales. Aceptas que dichos datos sean utilizados exclusivamente con fines terapéuticos, administrativos y de gestión de citas, cumpliendo con la normativa de protección de datos.
                </Typography>

                <Typography variant="body1">
                    Al continuar, declaras haber leído y comprendido este consentimiento informado, y aceptas de forma voluntaria recibir atención psicológica bajo estos términos.
                </Typography>

            </Paper>
        </Grid>
    );
}
