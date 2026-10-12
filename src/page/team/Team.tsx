import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { rows } from './data';
import { useTheme } from '@mui/material';
import { Box, Typography } from '@mui/material';
import { AdminPanelSettingsOutlined, LockClockOutlined, SecurityOutlined } from '@mui/icons-material';
import Header from '../../components/header';

const Team = () => {
    const theme = useTheme();


const columns: GridColDef[] = [
  { field: 'id', headerName: 'Id', flex: 1, width: 33, align: 'center', headerAlign: 'center'},
  { field: 'name', headerName: 'Name', flex: 1, headerAlign: 'center', align: 'center'},
  { field: 'email', headerName: 'Email', align: 'center', headerAlign: 'center'},
  { field: 'age', headerName: 'Age', align: 'center', headerAlign: 'center'},
  { field: 'phone', headerName: 'Phone', flex: 1, align: 'center', headerAlign: 'center'},
  { field: 'access', headerName: 'Access', flex: 1, align: 'center', headerAlign: 'center',
    renderCell: ({row: {access}}) => {
        return (
            <Box sx={{ p: '5px', width: '99px', borderRadius: '5px', textAlign: 'center', display: 'flex', justifyContent: 'space-evenly' ,
            backgroundColor: access === "Admin" ? theme.palette.primary.dark : access === "Manager" ? theme.palette.secondary.dark : "#3da58a"}}>

            {access === "Admin" && <AdminPanelSettingsOutlined sx={{color: '#fff'}} fontSize='small'/>}
            {access === "Manager" && <SecurityOutlined sx={{color: '#fff'}} fontSize='small'/>}
            {access === "User" && <LockClockOutlined sx={{color: '#fff'}} fontSize='small'/>}
            <Typography sx={{fontSize: '14px', color: '#fff'}}> {access} </Typography>
            </Box>
        )
    }
  },
];


    return(
    <Box sx={{ height: 600, width: '98%', mx: 'auto' }}>

        <Header title={'TEAM'} subTitle={'Managing The Team Members'} />


    <DataGrid rows={rows} columns={columns} />
    </Box>
    );
}

export default Team;