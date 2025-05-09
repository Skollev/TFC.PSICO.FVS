// src/theme.tsx
import { createTheme } from '@mui/material/styles';
import "@fontsource/playfair-display";

const tema = createTheme({
    typography: {
        fontFamily: '"Playfair Display", serif',
        h1: {
            fontWeight: 600,
            fontSize: '3rem',
            color: '#198754',
            textAlign: 'center',
        },
        h2: {
            fontWeight: 600,
            fontSize: '2rem',
            color: 'black',
        },
        h3: {
            fontWeight: 500,
            fontSize: '2rem',
            color: 'black',
            textAlign: 'center',
        },
        h4: {
            fontWeight: 500,
            fontSize: '2rem',
            color: '#198754',
            textAlign: 'center',
        },
        body1: {
            fontWeight: 400,
            fontSize: '1rem',
            color: 'black',
            lineHeight: 1.6,
        },
        body2: {
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
            default: '#f2fef2',
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

export default tema;
