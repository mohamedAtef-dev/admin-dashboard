
import { Box, Typography, useTheme } from "@mui/material";

const NotFound = () => {
    const theme = useTheme();
    return (
        <Box>
            <Typography variant="h5" sx={{color: theme.palette.error.main}} align="center">

            There Is No design yet
            <br />
            <br />
            Please Try again later
            </Typography>
        </Box>
    )
}
export default NotFound;