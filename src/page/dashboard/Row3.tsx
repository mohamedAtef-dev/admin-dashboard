import { Paper, Stack, Typography, useTheme } from "@mui/material";
import Pie from "../pieChart/Bie";
import Bar from "../barChart/Bar";
import Geo from "../geography/geo";

const Row3 = () => {
    const theme = useTheme();
    return(
        <Stack direction={"row"}  sx={{mt: 3, flexWrap: 'wrap', gap: 1.5}}>
            <Paper sx={{flexGrow: 1, minWidth: '400px', width: '28%'}}>

            <Typography sx={{padding: '30px 30px 0 30px', fontWeight: 600, color: theme.palette.secondary.main}} variant="h6">
                Campaign
            </Typography>

                <Pie isDashbord= {true}/>


            <Typography sx={{mt: '15px'}} align="center" variant="h6">
                $48,352 revenue generated
            </Typography>

            <Typography variant="body2" sx={{px: 0.7, pb: 3}} align="center">
                Includes extra misc expenditures and costs
            </Typography>
        
            </Paper>


            <Paper sx={{flexGrow: 1, minWidth: '400px', width: '33%'}}>

            <Typography sx={{padding: '30px 30px 0 30px', fontWeight: 600, color: theme.palette.secondary.main}} variant="h6">
                Sales Quantity
            </Typography>

            <Bar isDashbord={true}/>
            </Paper>



            <Paper sx={{flexGrow: 1, minWidth: '400px', width: '33%'}}>

        <Geo isDashbord={true} />

            </Paper>


        </Stack>
    )
}
export default Row3;