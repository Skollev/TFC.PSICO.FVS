import {
    Box,
    Button,
    TextField,
    Typography,
    Paper,
    Grid,
    Link,
} from '@mui/material';

export default function Login() {
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('Enviando formulario de login');
    };

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
        >
            <Paper elevation={3} sx={{ padding: 4, width: 320 }}>
                <Typography variant="h4">
                    Iniciar Sesión
                </Typography>

                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
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
};