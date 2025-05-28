import { Box, Typography } from "@mui/material";

type Props = {
    precio: string;
    texto: string;
};



export default function PrecioCircular({ precio, texto }: Props) {


    function generarTextoCircular(texto: string, limite: number = 58): string {
        let punto = " • ";
        let textoFormado = texto;

        let espacioRestante = (limite - texto.length - texto.length) / 3;
        let espacioHastaTexto = espacioRestante / 2;
        for (let i = 0; i < espacioRestante; i++) {
            if (i == Math.round(espacioHastaTexto)) {
                textoFormado += textoFormado;
            }
            textoFormado += punto; // Agrega un punto después del texto
        }

        return textoFormado;
    }


    return (
        <Box
            sx={{
                position: "relative",
                width: "200px",
                height: "200px",
                mx: "auto",
            }}
        >
            {/* El círculo base */}
            <Box
                sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                }}
            />
            {/* Precio en el centro */}
            <Box
                sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                    {precio}
                </Typography>
            </Box>
            {/* Texto curvo */}
            <svg
                viewBox="0 0 200 200"
                width="200"
                height="200"
                style={{
                    color: "black",
                    position: "absolute",
                    top: 0,
                    left: 0,
                }}
            >
                <defs>
                    <path
                        id="circlePath"
                        d="
                            M 100, 100
                            m -80, 0
                            a 80,80 0 1,1 160,0
                            a 80,80 0 1,1 -160,0
                        "
                    />
                </defs>
                <text
                    fill="#198754"
                    fontSize="17"
                    letterSpacing="3px"
                >
                    <textPath href="#circlePath">
                        {generarTextoCircular(texto)}
                    </textPath>
                </text>
            </svg>
        </Box>
    );
}
