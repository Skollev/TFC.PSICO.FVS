import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";

type props = {
    nombre: string;
    fotoPerfil: string;
};
export default function DatosPersonales({ nombre, fotoPerfil }: props) {
    return (

        <>
            <Grid container size={12} flexDirection={"row"}>
                <Grid size={3}>
                    <Avatar
                        alt={nombre}
                        src={fotoPerfil}
                        sx={ } />
                </Grid>
                <Grid size={9} flexDirection={"column"}>

                </Grid>
            </Grid>
        </>

    ).
}