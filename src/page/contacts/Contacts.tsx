import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns, rows } from "./data";
import Header from "../../components/header";


const Contacts = () => {
    return(
    <Box sx={{ height: 600, width: '98%', mx: 'auto' }}>

      <Header title={"CONTACT"} subTitle={"List Of Contacts for Future Reference"} />
    <DataGrid 
      slots={{
    toolbar: GridToolbar,
  }}
    rows={rows} columns={columns} 
    showToolbar
    />
    </Box>
    );
}

export default Contacts;