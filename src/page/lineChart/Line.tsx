import { Box, useTheme } from '@mui/material';
import { ResponsiveLine } from '@nivo/line'
import Header from '../../components/header';



const data = [
  {
    "id": "japan",
    "data": [
      {
        "x": "plane",
        "y": 10
      },
      {
        "x": "helicopter",
        "y": 3
      },
      {
        "x": "boat",
        "y": 215
      },
      {
        "x": "train",
        "y": 81
      },
      {
        "x": "subway",
        "y": 204
      },
      {
        "x": "bus",
        "y": 17
      },
      {
        "x": "car",
        "y": 119
      },
      {
        "x": "moto",
        "y": 12
      },
      {
        "x": "bicycle",
        "y": 90
      },
      {
        "x": "horse",
        "y": 118
      },
      {
        "x": "skateboard",
        "y": 55
      },
      {
        "x": "others",
        "y": 86
      }
    ]
  },
  {
    "id": "france", "data": [
      {
        "x": "plane",
        "y": 51
      },
      {
        "x": "helicopter",
        "y": 91
      },
      {
        "x": "boat",
        "y": 182
      },
      {
        "x": "train",
        "y": 117
      },
      {
        "x": "subway",
        "y": 126
      },
      {
        "x": "bus",
        "y": 230
      },
      {
        "x": "car",
        "y": 208
      },
      {
        "x": "moto",
        "y": 76
      },
      {
        "x": "bicycle",
        "y": 226
      },
      {
        "x": "horse",
        "y": 180
      },
      {
        "x": "skateboard",
        "y": 168
      },
      {
        "x": "others",
        "y": 199
      }
    ]
  },
  {
    "id": "us",
    "data": [
      {
        "x": "plane",
        "y": 293
      },
      {
        "x": "helicopter",
        "y": 138
      },
      {
        "x": "boat",
        "y": 158
      },
      {
        "x": "train",
        "y": 256
      },
      {
        "x": "subway",
        "y": 224
      },
      {
        "x": "bus",
        "y": 247
      },
      {
        "x": "car",
        "y": 214
      },
      {
        "x": "moto",
        "y": 137
      },
      {
        "x": "bicycle",
        "y": 191
      },
      {
        "x": "horse",
        "y": 178
      },
      {
        "x": "skateboard",
        "y": 250
      },
      {
        "x": "others",
        "y": 138
      }
    ]
  },
  {
    "id": "germany",
    "data": [
      {
        "x": "plane",
        "y": 236
      },
      {
        "x": "helicopter",
        "y": 79
      },
      {
        "x": "boat",
        "y": 215
      },
      {
        "x": "train",
        "y": 273
      },
      {
        "x": "subway",
        "y": 188
      },
      {
        "x": "bus",
        "y": 245
      },
      {
        "x": "car",
        "y": 170
      },
      {
        "x": "moto",
        "y": 27
      },
      {
        "x": "bicycle",
        "y": 142
      },
      {
        "x": "horse",
        "y": 289
      },
      {
        "x": "skateboard",
        "y": 183
      },
      {
        "x": "others",
        "y": 264
      }
    ]
  },
  {
    "id": "norway",
    "data": [
      {
        "x": "plane",
        "y": 25
      },
      {
        "x": "helicopter",
        "y": 257
      },
      {
        "x": "boat",
        "y": 230
      },
      {
        "x": "train",
        "y": 294
      },
      {
        "x": "subway",
        "y": 178
      },
      {
        "x": "bus",
        "y": 127
      },
      {
        "x": "car",
        "y": 276
      },
      {
        "x": "moto",
        "y": 127
      },
      {
        "x": "bicycle",
        "y": 74
      },
      {
        "x": "horse",
        "y": 282
      },
      {
        "x": "skateboard",
        "y": 202
      },
      {
        "x": "others",
        "y": 188
      }
    ]
  }
]


const Line = ({isDahboard = false}) => {

      const theme = useTheme();

      
      return (
      <Box sx={{height: isDahboard? "280px" : "75vh"}}>

  {!isDahboard && (
      <Header title={'Line Chart'} subTitle={'Frequently Asked Questions Page'} />
  )} 
        <ResponsiveLine 
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
                      "fill": theme.palette.text.secondary,
                      "outlineWidth": 0,
                      "outlineColor": "#ffffff"
                  }
              }
          },
          "grid": {
              "line": {
                  "stroke": theme.palette.divider,
                  "strokeWidth": 0
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


        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        axisBottom={{ legend: isDahboard ? null : 'transportation', legendOffset: 36 }}
        axisLeft={{ legend: isDahboard ? null : 'count', legendOffset: -44 }}
        pointSize={10}
        curve='catmullRom'
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'seriesColor' }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                translateX: 100,
                itemWidth: 80,
                itemHeight: 22,
                symbolShape: 'circle'
            }
        ]}
    />
        </Box>




    );
}
export default Line;