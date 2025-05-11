import {
    Box,
    Button,
    TextField,
    Typography,
    Paper,
    Grid,
    Link,
} from '@mui/material';

export default function SignUp() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Enviando formulario de registro');
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
                    Crear Cuenta
                </Typography>

                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
                    <TextField
                        label="Nombre completo"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Correo electrónico"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="email"
                        required
                    />
                    <TextField
                        label="Contraseña"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="password"
                        required
                    />
                    <TextField
                        label="Confirmar contraseña"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="password"
                        required
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
