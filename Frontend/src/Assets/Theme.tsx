// src/theme.tsx
import { createTheme } from '@mui/material/styles';
import "@fontsource/playfair-display";

const theme = createTheme({
    typography: {
        fontFamily: '"Playfair Display", serif',
        h1: {
            fontWeight: 700,
            fontSize: '3rem',
            color: '#198754',
        },
        h2: {
            fontWeight: 600,
            fontSize: '2rem',
            color: '#198754',
        },
        body1: {
            fontWeight: 400,
            fontSize: '1rem',
            color: 'black',
            lineHeight: 1.6,
        },
        button: {
            textTransform: 'none',
            fontWeight: 500,
        },
    },
    palette: {
        primary: {
            main: '#198754',
        },
        background: {
            default: '#ddffdd ',
        },
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                body1: {
                    color: 'white',
                },
            },
        },
    },
});

export default theme;
