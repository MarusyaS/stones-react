import * as React from 'react';
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
import { Link} from "react-router-dom";
import {Homepage} from './homepage';
import {GridView} from './grid_view';
import {Paradata} from './paradata';
import { blueGrey, orange, cyan } from '@mui/material/colors';

const links = [
  {
      // className: styles.className,
      // activeClassName: styles.activeClassName,
      to: '/ep_tur',
      name: 'Homegrid',
      label: 'О проекте'
  },
  {
      // className: styles.className,
      // activeClassName: styles.activeClassName,
      to: '/ep_tur/inscriptions',
      name: 'Grid',
      label: 'Каталог'
  }, 
  {
    to: '/ep_tur/map',
    name: 'Map',
    label: 'Карта'
  },
  {
    to: 'ep_tur/process',
    name: 'Paradata',
    label: 'О моделях'
  },
]   

export function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    // const handleCloseNavMenu = () => {
    //   setAnchorElNav(null);
    // };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  
    return (
      <AppBar position="static" sx={{ backgroundColor: blueGrey[500]  }} >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/ep_tur"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: cyan[900],
                textDecoration: 'none',
              }}
            >
              EP TUR
            </Typography>
  

            {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
            {/* <Typography
              variant="h5"
              noWrap
              component="a"
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
              EP TUR
            </Typography> */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {links.map((link) => (
                // <Link to={link.to}>
                <Button
                  key={link.name}
                  component={Link} to={link.to} 
                  // onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {link.label}
                </Button>
                // </Link> 
              ))}
            </Box>
  

          </Toolbar>
        </Container>

      </AppBar>
    );
  }



