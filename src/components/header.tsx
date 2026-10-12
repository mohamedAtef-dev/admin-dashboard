import { Box, Typography, useTheme } from "@mui/material";

interface HeaderProps {
    title: string;
    subTitle: string;
    isDashbord?: boolean;
}

const Header = ({title, subTitle, isDashbord = false}: HeaderProps) => {
    const theme = useTheme();
    return (
    <Box sx={isDashbord ? {} : {mb: 4}}>
    <Typography variant="h5" sx={{color: theme.palette.info.light, fontWeight: 'bold'}}>{title}</Typography>
    <Typography variant="body1">{subTitle}</Typography>

    </Box>
    )
}
export default Header;