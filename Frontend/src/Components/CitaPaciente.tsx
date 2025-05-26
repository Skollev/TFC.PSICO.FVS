import * as React from 'react';
import { InterfazCita as CitaInterface } from '../Models/Interfaces';
import {
    Card, CardContent, CardActions,
    Typography, Button, Box, Chip, Link as MuiLink,
    Dialog, DialogTitle, DialogContent, DialogActions
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LinkIcon from '@mui/icons-material/Link';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import PaidIcon from '@mui/icons-material/Paid';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import { confirmarCita } from '../Hooks/ConfirmarCita';

interface Props {
    cita: CitaInterface;
}

const CitaPaciente: React.FC<Props> = ({ cita }) => {
    const [openInforme, setOpenInforme] = React.useState(false);
    const [openPagar, setOpenPagar] = React.useState(false);
    const [fechaFormateada, setFechaFormateada] = React.useState<string>("");

    React.useEffect(() => {
        if (cita.fecha != null) {
            setFechaFormateada(
                new Date(cita.fecha).toLocaleString("es-ES", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                })
            );
        } else {
            setFechaFormateada("Por designar");
        }
    }, [cita.fecha]);


    return (
        <Box display="flex" justifyContent="center" width="100%" px={2}>
            <Card
                sx={{
                    width: {
                        xs: '100%',
                        sm: '90%',
                        md: '70%',
                        lg: '60%',
                    },
                    borderRadius: 4,
                    boxShadow: 6,
                    my: 4,
                }}
            >
                <CardContent>
                    <Box
                        display="flex"
                        alignItems="center"
                        mb={2}
                        p={2}
                        borderRadius={2}
                        boxShadow={2}
                        bgcolor="background.paper"
                        flexWrap="wrap"
                        gap={2}
                    >
                        <CalendarTodayIcon color="primary" sx={{ fontSize: 28 }} />

                        <Typography variant="h6" fontWeight="bold">
                            {fechaFormateada}
                        </Typography>

                        <Box display="flex" flexDirection="column" paddingLeft={3}>
                            <Typography variant="subtitle1" fontWeight="bold">
                                {cita.terapeuta?.nombre} {cita.terapeuta?.apellido}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                {cita.terapeuta?.correo}
                            </Typography>
                        </Box>
                    </Box>

                    <Box display="flex" alignItems="center" mb={1} flexWrap="wrap">
                        <LinkIcon color="action" sx={{ mr: 1 }} />
                        <MuiLink href={cita.link} target="_blank" rel="noopener" underline="hover">
                            Ir al enlace de la sesión
                        </MuiLink>
                    </Box>

                    <Box display="flex" gap={2} mt={2} flexWrap="wrap">
                        <Chip
                            icon={cita.confirmada ? <CheckCircleIcon /> : <CancelIcon />}
                            label={cita.confirmada ? 'Confirmada' : 'No confirmada'}
                            color={cita.confirmada ? 'success' : 'warning'}
                            variant="outlined"
                        />
                        <Chip
                            icon={cita.pagado ? <PaidIcon /> : <MoneyOffIcon />}
                            label={cita.pagado ? 'Pagada' : 'Pendiente de pago'}
                            color={cita.pagado ? 'primary' : 'error'}
                            variant="outlined"
                        />
                    </Box>
                </CardContent>

                <CardActions sx={{ justifyContent: 'flex-end', pr: 2, pb: 2 }}>
                    {!cita.pagado && (
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => setOpenPagar(true)}
                        >
                            ¿Cómo pagar?
                        </Button>
                    )}
                    {cita.informeSesion && (
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => setOpenInforme(true)}
                        >
                            Ver informe
                        </Button>
                    )}
                    {!cita.confirmada && (
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => confirmarCita(cita.id)}
                        >
                            Confirmar asistencia
                        </Button>
                    )}
                </CardActions>
            </Card>

            {cita.informeSesion && (
                <Dialog open={openInforme} onClose={() => setOpenInforme(false)} maxWidth="sm" fullWidth>
                    <DialogTitle>Informe de sesión</DialogTitle>
                    <DialogContent dividers>
                        <Typography variant="subtitle1" gutterBottom>
                            <strong>Demanda:</strong>
                        </Typography>
                        <Typography variant="body1" >
                            {cita.informeSesion.demanda}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            <strong>Tarea:</strong>
                        </Typography>
                        <Typography variant="body1">
                            {cita.informeSesion.tarea}
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpenInforme(false)} color="primary">
                            Cerrar
                        </Button>
                    </DialogActions>
                </Dialog>
            )}
            {!cita.pagado && (
                <Dialog open={openPagar} onClose={() => setOpenPagar(false)} maxWidth="sm" fullWidth>
                    <DialogTitle>Información de pago</DialogTitle>
                    <DialogContent dividers>
                        <Typography variant="subtitle1" gutterBottom>
                            <strong>Para proceder el pago realice un bizum al número 666999222</strong>
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            No se preocupe si no se actualiza el pago a confirmado, ya que se modificará cuando nuestra terapeuta lo confime.
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            Muchas gracias
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpenPagar(false)} color="primary">
                            Cerrar
                        </Button>
                    </DialogActions>
                </Dialog>
            )}
        </Box>
    );
};

export default CitaPaciente;
