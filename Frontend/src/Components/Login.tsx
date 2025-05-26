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
import { iniciarSesion } from '../Hooks/IniciarSesion.tsx';

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
            await iniciarSesion(formData.username, formData.password);
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
            sx={{ p: { xs: 2, sm: 3 } }}
        >
            <Paper
                elevation={3}
                sx={{
                    p: 4,
                    width: { xs: '100%', sm: 400, md: 320 },
                    maxWidth: '100%',
                    boxSizing: 'border-box',
                }}
            >
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
