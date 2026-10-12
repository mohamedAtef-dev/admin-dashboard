import * as React from 'react';
import { styled, useTheme, type PaletteMode } from '@mui/material/styles';
import MuiAppBar, { type AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Box, Stack } from '@mui/material';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

interface TopBarProps {
  open: boolean;
  handleDrawerOpen: () => void;
  setMode: React.Dispatch<React.SetStateAction<PaletteMode>>;
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));



const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));



const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));



    const TopBar: React.FC<TopBarProps> = ({ open, handleDrawerOpen, setMode }) => {

        const theme = useTheme();
        
        const toggleTheme = () => {
    setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'));
    localStorage.setItem("currentMode", theme.palette.mode === "dark" ? "light" : "dark")
  };
    return (
        <AppBar position="fixed" open={open}>
        <Toolbar>
            <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
                marginRight: 5,
                ...(open && { display: 'none' }),
            }}
            >
            <MenuIcon />
            </IconButton>

        <Search>
            <SearchIconWrapper>
            <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            />
        </Search>

        <Box sx={{ flexGrow: 1 }} />

    <Stack direction="row">


<IconButton onClick={toggleTheme} color="inherit">
            {theme.palette.mode === 'dark' ? (
            <LightModeOutlinedIcon sx={{ color: 'orange' }} />
            ) : (
            <DarkModeOutlinedIcon />
            )}
        </IconButton>

            <IconButton color='inherit'>
                <NotificationsOutlinedIcon />
            </IconButton>

            <IconButton color='inherit'>
                <SettingsOutlinedIcon />
            </IconButton>
            
            <IconButton color='inherit'>
                <Person2OutlinedIcon />
            </IconButton>

    </Stack>

    </Toolbar>
    </AppBar>
    );
};

export default TopBar;