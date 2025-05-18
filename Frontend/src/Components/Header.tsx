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
    ListItemText,
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
        window.location.reload();
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
            }}
        >
            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="/">
                        <ListItemText primary="Inicio" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    {id ? (
                        <ListItemButton component="a" href="/perfil">
                            <ListItemText primary="Ver Perfil" />
                        </ListItemButton>
                    ) : (
                        <ListItemButton component="a" href="/login">
                            <ListItemText primary="Iniciar Sesión" />
                        </ListItemButton>
                    )}
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="/pedir-cita">
                        <ListItemText primary="Pedir cita" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="/informacion-legal">
                        <ListItemText primary="Información legal" />
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
