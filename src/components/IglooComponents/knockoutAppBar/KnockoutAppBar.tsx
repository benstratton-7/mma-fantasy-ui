import { MenuRounded } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import KnockoutDrawer from '../KnockoutDrawer/KnockoutDrawer';

const KnockoutAppBar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open: boolean) => {
        setDrawerOpen(open);
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={() => toggleDrawer(true)}
                    >
                        <MenuRounded />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        My Application
                    </Typography>
                </Toolbar>
            </AppBar>
            <KnockoutDrawer open={drawerOpen} onClose={() => toggleDrawer(false)} />
        </>
    );
};

export default KnockoutAppBar;
