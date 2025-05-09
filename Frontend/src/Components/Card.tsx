import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
type props = {
    imagen: string;
    altImagen: string;
    encabezado: string;
    texto: string;
}
export default function CardBasico({ imagen, altImagen, encabezado, texto }: props) {
    return (
        <>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="400px"
                        image={imagen}
                        alt={altImagen}
                    />
                    <CardContent>
                        <Typography variant="h3" component="div">
                            {encabezado}
                        </Typography>
                        <Typography variant="body2">
                            {texto}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    );
}