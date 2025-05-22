import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    TextField,
    Stack,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { actualizarInforme } from '../Hooks/ActualizarInforme';
import { InformeSesion } from '../Models/Interfaces';
import { obtenerInforme } from '../Hooks/ObtenerInforme';
import { useParams } from 'react-router-dom';

export default function FormularioInforme() {

    const { id } = useParams<{ id: string }>();

    const [informe, setInforme] = useState<InformeSesion | null>(null);

    useEffect(() => {
        if (id) {
            obtenerInforme(Number(id))
                .then((data) => {
                    setInforme(data);
                    setDemanda(data.demanda || '');
                    setTarea(data.tarea || '');
                })
                .catch((err) => console.error("Error al obtener informe:", err));
        }
    }, [id]);

    const [demanda, setDemanda] = React.useState('');
    const [tarea, setTarea] = React.useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!informe) return;

        informe.demanda = demanda;
        informe.tarea = tarea;

        try {
            await actualizarInforme(informe);
            window.location.href = "/perfil";
        } catch (error) {
            console.error("Error al actualizar informe:", error);
        };
    }


    return (
        <Box display="flex" justifyContent="center" alignItems="center" padding={4}>
            <Card sx={{ width: '60%', height: '60vh', borderRadius: 4, boxShadow: 6, display: 'flex', flexDirection: 'column' }}>
                <CardHeader
                    title="Crea el informe de la sesión"
                    sx={{
                        textAlign: 'center',
                        bgcolor: '#198754',
                        color: 'white'
                    }}
                />
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                    <form onSubmit={handleSubmit} style={{ height: '100%' }}>
                        <Stack spacing={3} sx={{ height: '100%', justifyContent: 'space-around' }}>

                            <TextField
                                label="Motivo de consulta"
                                multiline
                                minRows={3}
                                value={demanda}
                                onChange={(e) => setDemanda(e.target.value)}
                                required
                                fullWidth
                            />

                            <TextField
                                label="Tarea"
                                multiline
                                minRows={3}
                                value={tarea}
                                onChange={(e) => setTarea(e.target.value)}
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
                                    Enviar Informe
                                </Button>
                            </Box>
                        </Stack>
                    </form>
                </CardContent >
            </Card >
        </Box >
    );
};


