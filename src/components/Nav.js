import { Avatar, Button, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { Box, Container } from '@mui/system';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const pages = ['Mice', 'Breeding', 'Experimental'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Logo = props => <Typography
    {...props}
    noWrap
    component="a"
    href="/"
    sx={{
        mr: 2,
        display: props.display,
        flexGrow: 1,
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
    }}
    children="LOGO"
/>

const ResponsiveAppBar = props => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <AppBar position='static'> <Container maxWidth="xl"><Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Logo variant="h6" href="/"  display={{ xs: 'none', md: 'flex' }}/>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                    children={<MenuIcon />}
                />
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                    {pages.map((page) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center"
                                // component={Link}
                                to={`/${page}`}>
                                {page}
                            </Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Logo variant="h5" display={{ xs: 'flex', md: 'none' }} />
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                    <Button
                        key={page}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                        // component={Link}
                        to={`/${page}`}
                    >
                        {page}
                    </Button>
                ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src="/static/images/bug.png" />
                    </IconButton>
                </Tooltip>
                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                    {settings.map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>

        </Toolbar></Container></AppBar>
    )
}

export default ResponsiveAppBar