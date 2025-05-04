import React, { useState } from "react";
import { AccountCircle, Menu as MenuIcon } from "@mui/icons-material";
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
} from "@mui/material";

export default function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

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
                    <ListItemButton component="a" href="/pedir-cita">
                        <ListItemText primary="Pedir cita" />

                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="/precios">
                        <ListItemText primary="Consultar precios" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="/precios">
                        <ListItemText primary="Información legal" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box >
    );



    return (
        <>
            <AppBar position="static">
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

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Rocío Delgado Psicología
                    </Typography>

                    <IconButton color="inherit" href="/Login">
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
                {drawerContent}
            </Drawer>
        </>
    );
}
