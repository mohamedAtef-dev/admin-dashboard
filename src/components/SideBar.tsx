  import * as React from 'react';
  import { styled, useTheme, type Theme, type CSSObject } from '@mui/material/styles';
  import MuiDrawer from '@mui/material/Drawer';
  import List from '@mui/material/List';
  import Divider from '@mui/material/Divider';
  import IconButton from '@mui/material/IconButton';
  import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
  import ChevronRightIcon from '@mui/icons-material/ChevronRight';
  import ListItem from '@mui/material/ListItem';
  import ListItemButton from '@mui/material/ListItemButton';
  import ListItemIcon from '@mui/material/ListItemIcon';
  import ListItemText from '@mui/material/ListItemText';
  import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
  import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
  import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
  import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
  import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
  import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
  import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
  import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
  import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
  import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
  import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
  import Avatar from '@mui/material/Avatar';
  import { Tooltip, Typography } from '@mui/material';
  import { useLocation, useNavigate } from 'react-router-dom';
  import { grey } from '@mui/material/colors';

  const drawerWidth = 240;

  const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });

  const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }));

  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );
  interface SideBarProps {
    open: boolean;
    handleDrawerClose: () => void;
  }


  const Array1 = [
      {"text": "Dashboard", "icon": <HomeOutlinedIcon />, "path": "/"},
      {"text": "Manage Team", "icon": <PeopleAltOutlinedIcon />, "path": "/team"},
      {"text": "Contact", "icon": <ContactsOutlinedIcon />, "path": "/contacts"},
      {"text": "Invoices", "icon": <ReceiptOutlinedIcon />, "path": "/invoices"},
  ];

  const Array2 = [
      {"text": "Profile Form", "icon": <PersonOutlineOutlinedIcon />, "path": "/form"},
      {"text": "Calender", "icon": <CalendarTodayOutlinedIcon />, "path": "/calendar"},
      {"text": "FAQ", "icon": <HelpOutlineOutlinedIcon />, "path": "/faq"},
  ];

  const Array3 = [
          {"text": "Bar Chart", "icon": <BarChartOutlinedIcon />, "path": "/barChart"},
      {"text": "Pie Chart", "icon": <PieChartOutlineOutlinedIcon />, "path": "/pieChart"},
      {"text": "Line Chart", "icon": <TimelineOutlinedIcon />, "path": "/lineChart"},
      {"text": "Geography", "icon": <MapOutlinedIcon />, "path": "/geography"},
  ];


  const SideBar: React.FC<SideBarProps> = ({ open, handleDrawerClose }) => {
  const location = useLocation();

    const navigate = useNavigate();
    const theme = useTheme();

    return (
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>

  <Avatar sx={{mx: 'auto', width: open ? 88 : 44, height: open ? 88 : 44, my: 7, border:" 2px solid grey", transition: "0.25s"}} alt="Remy Sharp" src="/mohamedatef.jpg.png" />
        <Typography align='center' sx={{fontSize: open ? 17 : 0, transition: "0.25s"}}>Mohamed</Typography>
        <Typography align='center' sx={{fontSize: open ? 15 : 0, transition: "0.25s", color: theme.palette.info.main}}>Admin</Typography>
        <Divider />

        <List>
          {Array1.map((item) => (

            <Tooltip key={item.path}  title={open ? null : item.text} placement="left">
              <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
              onClick={() => {
                  navigate(item.path)
              }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  bgcolor: location.pathname === item.path ? theme.palette.mode === "dark" ? grey[800] : grey[300] :  null 
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            </Tooltip>

          ))}
        </List>

        <Divider />

        <List>
          {Array2.map((item) => (

            <Tooltip key={item.path}  title={open ? null : item.text} placement="left">

            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
              onClick={() => {
                  navigate(item.path)
              }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,

                  bgcolor: location.pathname === item.path ? theme.palette.mode === "dark" ? grey[800] : grey[300] :  null 

                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            </Tooltip>

          ))}
        </List>

        <Divider />

        <List>
          {Array3.map((item) => (

            <Tooltip key={item.path}  title={open ? null : item.text} placement="left">

            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
              onClick={() => {
                  navigate(item.path)
              }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,

                  bgcolor: location.pathname === item.path ? theme.palette.mode === "dark" ? grey[800] : grey[300] :  null 

                  
                }}
              >
            <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            </Tooltip>

          ))}
        </List>

      </Drawer>
    );
  };

  export default SideBar;