import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useState } from "react";


// import { useContext } from "react";
// import { DarkModeContext } from "../../context/darkModeContext";




const RootLayout = () => {
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
        <div className='root-layout'>


            <AppBar position="static" className="nav">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                            <NavLink to="/">Home</NavLink>
                            <NavLink to="about">About</NavLink>
                            <NavLink to="help">Help</NavLink>
                            <NavLink to="careers">Careers</NavLink>
                        </Box>
                        <Box
                            variant="h6"
                            noWrap
                            component="div"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <div className="wrapper">

                                <div className="items">
                                    <div className="item">
                                        <LanguageOutlinedIcon className="icon" />
                                        En
                                    </div>
                                    <div className="item">
                                        <DarkModeOutlinedIcon
                                            className="icon"
                                        // onClick={() => dispatch({ type: "TOGGLE" })}
                                        />
                                    </div>
                                    <div className="item">
                                        <FullscreenExitOutlinedIcon className="icon" />
                                    </div>

                                    <div className="item">
                                        <img
                                            src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                            alt=""
                                            className="avatar"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
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
                                <div style={{ display: "flex", flexDirection: "column", background: "red" }} className="nav-dropdown">
                                    <NavLink to="/">Home</NavLink>
                                    <NavLink to="about">About</NavLink>
                                    <NavLink to="help">Help</NavLink>
                                    <NavLink to="careers">Careers</NavLink>
                                </div>
                            </Menu>
                        </Box>
                        <Box
                            variant="h5"
                            noWrap
                            component="div"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },

                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <div className="wrapper">

                                <div className="items">
                                    <div className="item">
                                        <LanguageOutlinedIcon className="icon" />
                                        En
                                    </div>
                                    <div className="item">
                                        <DarkModeOutlinedIcon
                                            className="icon"
                                        // onClick={() => dispatch({ type: "TOGGLE" })}
                                        />
                                    </div>

                                    {/* <div className="item">
                                                <img
                                                    src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                                    alt=""
                                                    className="avatar"
                                                />
                                            </div> */}
                                </div>
                            </div>


                        </Box>





                    </Toolbar>
                </Container>
            </AppBar>


            <Breadcrumbs />

            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default RootLayout;


