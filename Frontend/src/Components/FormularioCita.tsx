import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    TextField,
    Stack,
    MenuItem
} from '@mui/material';
import React from 'react';
import { pedirCita } from '../Hooks/PedirCita';

const FormularioCita: React.FC = () => {
    const [horario, setHorario] = React.useState('');
    const [demanda, setDemanda] = React.useState('');
    const [tipoTerapia, setTipoTerapia] = React.useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await pedirCita(horario, tipoTerapia, demanda);
            window.location.href = "/perfil";
        } catch (error) {
            console.error("Error al pedir cita:", error);
        };
    }


    return (
        <Box display="flex" justifyContent="center" alignItems="center" padding={4}>
            <Card sx={{ width: '60%', height: '60vh', borderRadius: 4, boxShadow: 6, display: 'flex', flexDirection: 'column', color: "white" }}>
                <CardHeader
                    title="Solicitar una Cita"
                    subheader="Selecciona tu preferencia horaria y cuéntanos el motivo"
                    sx={{
                        textAlign: 'center',
                        bgcolor: '#198754',
                    }}
                />
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                    <form onSubmit={handleSubmit} style={{ height: '100%' }}>
                        <Stack spacing={3} sx={{ height: '100%', justifyContent: 'space-around' }}>
                            <TextField
                                select
                                label="Preferencia horaria"
                                value={horario}
                                onChange={(e) => setHorario(e.target.value)}
                                required
                                fullWidth
                            >
                                <MenuItem value="mañana">Mañana (9:00 - 13:00)</MenuItem>
                                <MenuItem value="tarde">Tarde (16:00 - 20:00)</MenuItem>
                                <MenuItem value="indiferente">Indiferente</MenuItem>
                            </TextField>

                            <TextField
                                select
                                label="Tipo de terapia"
                                value={tipoTerapia}
                                onChange={(e) => setTipoTerapia(e.target.value)}
                                required
                                fullWidth
                            >
                                <MenuItem value="individual">Individual - 35€</MenuItem>
                                <MenuItem value="pareja">Pareja - 45€</MenuItem>
                            </TextField>

                            <TextField
                                label="Motivo de consulta"
                                multiline
                                minRows={3}
                                value={demanda}
                                onChange={(e) => setDemanda(e.target.value)}
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
                                    Pedir cita
                                </Button>
                            </Box>
                        </Stack>
                    </form>
                </CardContent>
            </Card>
        </Box>
    );
};

export default FormularioCita;
