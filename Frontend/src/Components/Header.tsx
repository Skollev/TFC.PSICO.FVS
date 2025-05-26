import React, { useState } from "react";
import { AccountCircle, Logout, Menu as MenuIcon } from "@mui/icons-material";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Drawer,
    List,
    ListItem,
    Box,
    ListItemButton,
    Grid,
    Link,
} from "@mui/material";
import useScroll from "../Hooks/Scroll";

export default function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const scrolled = useScroll();

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

    const logOut: React.MouseEventHandler<HTMLButtonElement> = () => {
        localStorage.removeItem("id");
        localStorage.removeItem("rol");
        localStorage.removeItem("token");
        window.location.href = '/';
    }

    const id = localStorage.getItem("id");

    const drawerContent = (
        <Box
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            sx={{
                width: "auto",
                backgroundColor: "#198754",
                color: "white"
            }}
        >
            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="/">
                        <Typography variant="body2">Inicio</Typography>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    {id ? (
                        <ListItemButton component="a" href="/perfil">
                            <Typography variant="body2">Ver Perfil</Typography>
                        </ListItemButton>
                    ) : (
                        <ListItemButton component="a" href="/login">
                            <Typography variant="body2">Iniciar Sesión</Typography>
                        </ListItemButton>
                    )}
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="/pedirCita">
                        <Typography variant="body2">Pedir cita</Typography>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="/informacion-legal">
                        <Typography variant="body2">Información legal</Typography>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <>
            {!scrolled || drawerOpen ? (
                <AppBar position="static" sx={{}}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Grid flexGrow={1}>

                            <Typography variant="h6">
                                <Link href="/" color="inherit" underline="none">
                                    Rocío Delgado Psicología
                                </Link>
                            </Typography>

                        </Grid>
                        {id ? (
                            <>
                                <IconButton color="inherit" href="/Perfil">
                                    <AccountCircle />
                                </IconButton>
                                <IconButton color="inherit" onClick={logOut}>
                                    <Logout />
                                </IconButton>
                            </>
                        ) : (
                            <IconButton color="inherit" href="/Login">
                                <AccountCircle />
                            </IconButton>)}
                    </Toolbar>
                </AppBar >
            ) : (
                <Box
                    sx={{
                        position: "fixed",
                        top: 16,
                        right: 16,
                        zIndex: 1300,
                        backgroundColor: "#198754",
                        borderRadius: "50%",
                        boxShadow: 3,
                        padding: 1,
                        "&:hover": {
                            backgroundColor: "#f0f0f0",
                        },
                        animation: "fadeIn 1s"
                    }}
                >
                    <IconButton
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                        sx={{
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>
            )
            }

            <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
                {drawerContent}
            </Drawer>
        </>
    );
}
