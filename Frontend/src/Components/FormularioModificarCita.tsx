import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    TextField,
    Stack
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs, { Dayjs } from 'dayjs';
import { InterfazCita } from '../Models/Interfaces';
import { actualizarCita } from '../Hooks/ActualizarCita';
import { useParams } from 'react-router-dom';
import { citasPorId } from '../Hooks/CitasPorId';

export default function FormularioModificarCita() {
    dayjs.extend(utc);
    dayjs.extend(timezone);

    const { id } = useParams<{ id: string }>();
    const [cita, setCita] = useState<InterfazCita | null>(null);
    const [fechaSesion, setFechaSesion] = useState<Dayjs | null>(dayjs('2022-04-17T15:30'));
    const [linkSesion, setLinkSesion] = useState('');

    useEffect(() => {
        if (id) {
            citasPorId(Number(id))
                .then((data) => {
                    setCita(data);
                    setLinkSesion(data.link || '');
                    setFechaSesion(data.fecha ? dayjs(data.fecha) : null);
                })
                .catch((err) => console.error("Error al obtener cita:", err));
        }
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!cita || !fechaSesion) return;

        const fechaUtc = fechaSesion.utc().format();
        cita.fecha = fechaUtc;
        cita.link = linkSesion;

        try {
            await actualizarCita(cita);
            window.location.href = "/perfil";
        } catch (error) {
            console.error("Error al actualizar cita:", error);
        }
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" padding={4}>
            <Card sx={{ width: '60%', height: 'auto%', borderRadius: 4, boxShadow: 6, display: 'flex', flexDirection: 'column' }}>
                <CardHeader
                    title="Modifica la cita"
                    sx={{
                        textAlign: 'center',
                        bgcolor: '#198754',
                        color: 'white'
                    }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <form onSubmit={handleSubmit}>
                            <Stack spacing={3}>

                                <TextField
                                    label="Enlace de sesión (opcional)"
                                    type="url"
                                    value={linkSesion}
                                    onChange={(e) => setLinkSesion(e.target.value)}
                                    fullWidth
                                    placeholder="https://..."
                                />

                                <DateTimePicker
                                    label="Fecha y hora de la sesión"
                                    value={fechaSesion}
                                    onChange={(newValue) => setFechaSesion(newValue)}
                                />

                                <Box alignSelf={"center"}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        sx={{ borderRadius: 2 }}
                                    >
                                        Enviar Cita Actualizada
                                    </Button>
                                </Box>
                            </Stack>
                        </form>
                    </LocalizationProvider>
                </CardContent>
            </Card>
        </Box>
    );
}
