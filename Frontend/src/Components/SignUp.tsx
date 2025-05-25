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
import { crearPaciente } from '../Hooks/CrearPaciente.tsx';

export default function SignUp() {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        username: '',
        password: '',
        confirmarPassword: '',
        mayorDeEdad: false,
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

        if (formData.password !== formData.confirmarPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        try {
            await crearPaciente({
                nombre: formData.nombre,
                apellido: formData.apellido,
                foto: '',
                correo: formData.correo,
                username: formData.username,
                password: formData.password,
                consentimiento: false,
            });
            window.location.href = "/";
        } catch (err) {
            alert('Error al crear la cuenta');
        }
    };

    return (
        <Grid container justifyContent="center" alignItems="center" minHeight="100vh">
            <Paper elevation={3} sx={{ padding: 4, width: 320 }}>
                <Typography variant="h4" align="center">
                    Crear Cuenta
                </Typography>

                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
                    <TextField
                        label="Nombre"
                        name="nombre"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                        value={formData.nombre}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Apellidos"
                        name="apellido"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                        value={formData.apellido}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Correo electrónico"
                        name="correo"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="email"
                        required
                        value={formData.correo}
                        onChange={handleChange}
                    />
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
                    <TextField
                        label="Confirmar contraseña"
                        name="confirmarPassword"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="password"
                        required
                        value={formData.confirmarPassword}
                        onChange={handleChange}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{ mt: 2 }}
                    >
                        Registrarse
                    </Button>

                    <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                        ¿Ya tienes una cuenta?{' '}
                        <Link href="/login" color="primary">
                            Inicia sesión.
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
