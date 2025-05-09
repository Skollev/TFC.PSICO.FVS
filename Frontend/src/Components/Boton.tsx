import { Button } from "@mui/material";
type props = {
    valor: string;
    direccion: string;
}
export default function Boton({ valor, direccion }: props) {
    return (
        <>
            <Button variant="contained" href={direccion}>{valor}</Button>
        </>
    )

}