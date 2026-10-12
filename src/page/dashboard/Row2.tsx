import { Box, IconButton, Paper, Stack, Typography, useTheme } from "@mui/material";
import Line from "../lineChart/Line";
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import { Transactions } from "./data";

const Row2 = () => {
    const theme = useTheme();
    return(

        <Stack direction={"row"} sx={{flexWrap: 'wrap', gap: 2, mt: 2, minWidth: '400px', alignItems: 'center'}}> 

        <Paper sx={{ minWidth: { xs: '100%', md: '500px' }, flexGrow: 1}}>


        <Stack direction={"row"} sx={{flexWrap: 'wrap', justifyContent: 'space-between', alignItems:'center'}}>

        <Box>

        <Typography variant="h6"
        sx={{mt: 2, mb: 1, ml: 4, color: theme.palette.secondary.main}}
        >
            Revenue Generated
            </Typography>

        <Typography variant="body2" sx={{ ml: 4}}
        >
            $59,342.32
            </Typography>
            
        </Box>

        <Box>

        <IconButton sx={{mr: 3}}>

        <DownloadOutlinedIcon />
        </IconButton>

        </Box>

        </Stack>


        <Box sx={{ height: "300px", width: "100%" }}>
            <Line isDahboard={true}/>
        </Box>
        
        </Paper>

        <Paper sx={{ maxHeight: '360px', overflow: 'auto', p: 2, minWidth: { xs: '100%', md: '300px'}, flexGrow: 1}}>

        <Paper>
        <Typography variant="h6" sx={{p: 1, fontWeight: 'bold', color: theme.palette.secondary.main}}>
            Recent Transactions
        </Typography>
        </Paper>



{Transactions.map((item, index) => {
    return(

        <Paper key={item.txId || index}
        sx={{mt: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>

            <Box sx={{p: 1.5}}>

            <Typography variant="body1" sx={{fontWeight: '600'}}>
                {item.txId}
            </Typography>

            <Typography variant="body2">
        {item.user}
            </Typography>

            </Box>

            <Typography variant="body1">
            {item.date}
            </Typography>


            <Typography variant="body2"
            sx={{p: 1, borderRadius: 1.4, bgcolor: theme.palette.error.main, color: theme.palette.getContrastText(theme.palette.error.main)}}
            >
            {item.cost}
            </Typography>
        </Paper>

    )
})}

        </Paper>

        </Stack>
    )
}
export default Row2;