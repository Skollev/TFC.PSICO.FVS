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
import { confirmarPagoCita } from '../Hooks/ConfirmarPagoCita';

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
            setFechaFormateada(cita.preferenciaHoraria);
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
                                {cita.paciente?.nombre} {cita.paciente?.apellido}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {cita.paciente?.correo}
                            </Typography>
                        </Box>
                        <Box display="flex" flexDirection="column" paddingLeft={3}>
                            <Typography variant="subtitle1" fontWeight="bold">
                                Tipo de terapia
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {cita.tipoTerapia}
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
                            onClick={() => confirmarPagoCita(cita.id)}
                        >
                            Confirmar pago
                        </Button>
                    )}
                    {!cita.informeSesion?.tarea && (
                        <Button
                            variant="outlined"
                            color="primary"
                            href={`/crearInforme/${cita.informeSesion?.id}`}
                        >
                            Crear informe
                        </Button>
                    )}
                    <Button
                        variant="outlined"
                        color="primary"
                        href={`/modificarCita/${cita.id}`}
                    >
                        Modificar cita
                    </Button>
                </CardActions>
            </Card>

            {
                cita.informeSesion && (
                    <Dialog open={openInforme} onClose={() => setOpenInforme(false)} maxWidth="sm" fullWidth>
                        <DialogTitle>Informe de sesión</DialogTitle>
                        <DialogContent dividers>
                            <Typography variant="subtitle1" gutterBottom>
                                <strong>Demanda:</strong>
                            </Typography>
                            <Typography variant="body2">
                                {cita.informeSesion.demanda}
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                <strong>Tarea:</strong>
                            </Typography>
                            <Typography variant="body2">
                                {cita.informeSesion.tarea}
                            </Typography>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => setOpenInforme(false)} color="primary">
                                Cerrar
                            </Button>
                        </DialogActions>
                    </Dialog>
                )
            }
            {
                !cita.pagado && (
                    <Dialog open={openPagar} onClose={() => setOpenPagar(false)} maxWidth="sm" fullWidth>
                        <DialogTitle>Información de pago</DialogTitle>
                        <DialogContent dividers>

                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => setOpenPagar(false)} color="primary">
                                Cerrar
                            </Button>
                        </DialogActions>
                    </Dialog>
                )
            }
        </Box >
    );
};

export default CitaPaciente;
