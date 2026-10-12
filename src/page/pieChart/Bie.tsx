import { Box, useTheme } from '@mui/material';
import { ResponsivePie } from '@nivo/pie'
import Header from '../../components/header';



const data = [
  {
    "id": "react",
    "label": "react",
    "value": 160,
    "color": "hsl(58, 70%, 50%)"
  },
  {
    "id": "python",
    "label": "python",
    "value": 122,
    "color": "hsl(120, 70%, 50%)"
  },
  {
    "id": "sass",
    "label": "sass",
    "value": 257,
    "color": "hsl(334, 70%, 50%)"
  },
  {
    "id": "c",
    "label": "c",
    "value": 30,
    "color": "hsl(336, 70%, 50%)"
  },
  {
    "id": "css",
    "label": "css",
    "value": 67,
    "color": "hsl(94, 70%, 50%)"
  }
]



const Pie = ({isDashbord = false}) => {
    const theme = useTheme();
    return(

        <Box sx={{height: isDashbord ? "220px" : "75vh"}}>

        {!isDashbord && (
             <Header title={'Pie Chart'} subTitle={'Frequently Asked Questions Page'} />
        )}


            <ResponsivePie 
        data={data}
        animate={false}
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
        
        margin={ isDashbord ? {top: 10, right: 0, bottom: 10, left: 0 }  : {top: 40, right: 80, bottom: 80, left: 80 }} 
        innerRadius={isDashbord ? 0.8 : 0.5}
        padAngle={0.6}
        cornerRadius={2}
        enableArcLabels={isDashbord ? false : true}
        enableArcLinkLabels={isDashbord ? false : true}
        activeOuterRadiusOffset={8}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={ theme.palette.text.primary}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        legends={
            isDashbord ? [] : [{
                anchor: 'bottom',
                direction: 'row',
                translateY: 56,
                itemWidth: 100,
                itemHeight: 18,
                symbolShape: 'circle'
            }
        ]}
    /> 
        </Box>


    )
}
export default  Pie;