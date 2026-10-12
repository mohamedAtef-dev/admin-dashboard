import { ResponsivePie } from '@nivo/pie'
import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import type { ReactNode } from 'react';


interface CardProps {
    icon: ReactNode;
    title: string;
    subTitle: string;
    increase: string;
    scheme: "nivo" | "category10" | "accent" | "paired";
    data: {
        id: string;
        label: string;
        value: number;
        color: string;
    }[];
}

const Card = ({icon, title, subTitle, increase, data, scheme}: CardProps) => {
    
    const theme = useTheme();
    
    return (
                    <Paper sx={{minWidth: '333px', p: 1.5, display: 'flex', justifyContent: 'space-between', flexGrow: 1}}>
                    <Stack sx={{gap: 1}}>
            {icon}
            <Typography variant="body2" sx={{fontSize: '13px'}}>

                {title}
            </Typography>

            <Typography variant="body2" sx={{fontSize: '13px'}}>

                {subTitle}
            </Typography>

                    </Stack>

                    <Stack sx={{alignItems: 'center'}}>

                    <Box sx={{height: "70px", width: '70px'}}>

                        <ResponsivePie 
        data={data}
        margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
        innerRadius={0.7}

                        theme = {
                        {
        "text": {
            "fontSize": 11,
            "fill": theme.palette.text.primary,
            "outlineWidth": 0,
            "outlineColor": "#ffffff"
        },
        "axis": {
            "domain": {
                "line": {
                    "stroke": theme.palette.divider,
                    "strokeWidth": 1
                }
            },
            "legend": {
                "text": {
                    "fontSize": 12,
                    "fill": theme.palette.text.primary,
                    "outlineWidth": 0,
                    "outlineColor": "#ffffff"
                }
            },
            "ticks": {
                "line": {
                    "stroke": theme.palette.divider,
                    "strokeWidth": 1
                },
                "text": {
                    "fontSize": 11,
                    "fill": theme.palette.text.primary,
                    "outlineWidth": 0,
                    "outlineColor": "#ffffff"
                }
            }
        },
        "grid": {
            "line": {
                "stroke": theme.palette.divider,
                "strokeWidth": 1
            }
        },
        "legends": {
            "title": {
                "text": {
                    "fontSize": 11,
                    "fill": theme.palette.text.primary,
                    "outlineWidth": 0,
                    "outlineColor": "#ffffff"
                }
            },
            "text": {
                "fontSize": 11,
                "fill": theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "#ffffff"
            },
            "ticks": {
                "line": {},
                "text": {
                    "fontSize": 10,
                    "fill": theme.palette.text.primary,
                    "outlineWidth": 0,
                    "outlineColor": "#ffffff"
                }
            }
        },
        "annotations": {
            "text": {
                "fontSize": 13,
                "fill": theme.palette.text.primary,
                "outlineWidth": 2,
                "outlineColor": "#ffffff",
                "outlineOpacity": 1
            },
            "link": {
                "stroke": "#000000",
                "strokeWidth": 1,
                "outlineWidth": 2,
                "outlineColor": "#ffffff",
                "outlineOpacity": 1
            },
            "outline": {
                "stroke": "#000000",
                "strokeWidth": 2,
                "outlineWidth": 2,
                "outlineColor": "#ffffff",
                "outlineOpacity": 1
            },
            "symbol": {
                "fill": "#000000",
                "outlineWidth": 2,
                "outlineColor": "#ffffff",
                "outlineOpacity": 1
            }
        },
        "tooltip": {
            "container": {
                "background": theme.palette.background.default,
                "color": theme.palette.text.primary,
                "fontSize": 12
            },
            "basic": {},
            "chip": {},
            "table": {},
            "tableCell": {},
            "tableCellValue": {}
        }
    }
}

        colors={{scheme: scheme}}
        enableArcLabels={false}
        enableArcLinkLabels={false}
        padAngle={0.6}
        cornerRadius={2}
        activeOuterRadiusOffset={8}
    />


                    </Box>

                    <Typography variant="body2">
                        {increase}
                    </Typography>

                    </Stack>


            </Paper>
    )
}
export default Card;