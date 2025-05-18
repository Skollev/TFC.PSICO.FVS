import {
    Box,
    Button,
    TextField,
    Typography,
    Paper,
    Grid,
    Link,
} from '@mui/material';
import { useState } from 'react';
import { iniciarSesion } from '../Hooks/IniciarSesion.tsx'; // Asegúrate de que este hook esté correctamente exportado

export default function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await iniciarSesion({
                username: formData.username,
                password: formData.password,
            });

            // Redirige al usuario tras iniciar sesión exitosamente
            window.location.href = '/';
        } catch (error) {
            alert('Error al iniciar sesión');
        }
    };

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
        >
            <Paper elevation={3} sx={{ padding: 4, width: 320 }}>
                <Typography variant="h4" align="center">
                    Iniciar Sesión
                </Typography>

                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
                    <TextField
                        label="Nombre de usuario"
                        name="username"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                        value={formData.username}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Contraseña"
                        name="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{ mt: 2 }}
                    >
                        Entrar
                    </Button>

                    <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                        ¿No tienes cuenta?{' '}
                        <Link href="/crear-cuenta" color="primary">
                            Crea una.
                        </Link>
                    </Typography>
                    <Typography variant="body2" align="center" sx={{ mt: 1 }}>
                        <Link href="/" color="primary">
                            Volver al inicio
                        </Link>
                    </Typography>
                </Box>
            </Paper>
        </Grid>
    );
}
