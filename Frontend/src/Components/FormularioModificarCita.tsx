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

import { InterfazCita } from '../Models/Interfaces';
import { actualizarCita } from '../Hooks/ActualizarCita';
import { useParams } from 'react-router-dom';
import { citasPorId } from '../Hooks/CitasPorId';

export default function FormularioModificarCita() {
    const { id } = useParams<{ id: string }>();
    const [cita, setCita] = useState<InterfazCita | null>(null);
    const [fechaSesion, setFechaSesion] = useState("");
    const [linkSesion, setLinkSesion] = useState('');
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        if (id) {
            citasPorId(Number(id))
                .then((data) => {
                    setCita(data);
                    setLinkSesion(data.link || '');
                    setFechaSesion(data.fecha || "");
                    setCargando(false);
                })
                .catch((err) => {
                    console.error("Error al obtener cita:", err);
                    setCargando(false);
                });
        }
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!cita) return;

        cita.fecha = fechaSesion;
        cita.link = linkSesion;

        try {
            await actualizarCita(cita);
            window.location.href = "/perfil";
        } catch (error) {
            console.error("Error al actualizar cita:", error);
        }
    };

    if (cargando) return null;

    return (
        <Box display="flex" justifyContent="center" alignItems="center" padding={4}>
            <Card sx={{ width: '60%', height: '100vh', borderRadius: 4, boxShadow: 6, display: 'flex', flexDirection: 'column' }}>
                <CardHeader
                    title="Modifica la cita"
                    sx={{
                        textAlign: 'center',
                        bgcolor: '#198754',
                        color: 'white'
                    }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
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

                            <TextField
                                label="Fecha y hora de la sesión"
                                type="datetime-local"
                                value={fechaSesion}
                                onChange={(e) => setFechaSesion(e.target.value)}
                                required
                                fullWidth
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
                </CardContent>
            </Card>
        </Box>
    );
}
