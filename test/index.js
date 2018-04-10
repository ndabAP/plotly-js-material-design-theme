import Plotly from 'plotly.js'
import cloneDeep from 'lodash/cloneDeep'
import set from 'lodash/set'
import {
  layout,
  scatter,
  bar,
  pie,
  histogram,
  histogram2d,
  violin,
  ohlc,
  candlestick,
  scatterpolar,
  box,
  scatter3d,
  choropleth,
  scatterternary,
  sankey
} from '../src'

const configuartion = {displayModeBar: false}

layout.autosize = true
layout.xaxis.title = 'x-Axis'
layout.title = 'Chart'
layout.ternary.sum = 100
layout.geo.resolution = 110
layout.geo.projection.scale = 1

// Type: Scatter

// Mode: Lines

const scatterlines = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: 'scatter',
  mode: 'lines',
  ...scatter.lines
}

Plotly.newPlot('scatterlines', [scatterlines], cloneDeep(layout), configuartion)

// Error bar

const scatterlineserror = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  error_y: {
    type: 'data',
    array: [1, 4, 2, 5],
    visible: true
  },
  type: 'scatter',
  mode: 'lines',
  ...scatter.lines
}

Plotly.newPlot('scatterlineserror', [scatterlineserror], cloneDeep(layout), configuartion)

const scatterlinesmulti = {
  x: [1, 2, 3, 4],
  y: [12, 1, 8, 12],
  type: 'scatter',
  mode: 'lines',
  ...scatter.lines
}

// Fill

Plotly.newPlot('scatterlinesmulti', [scatterlines, scatterlinesmulti], cloneDeep(layout), configuartion)

const scatterlinesfill = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: 'scatter',
  mode: 'lines',
  fill: 'tozeroy',
  ...scatter.lines
}

Plotly.newPlot('scatterlinesfill', [scatterlinesfill], cloneDeep(layout), configuartion)

// Mode: Markers

const scattermarkers = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: 'scatter',
  mode: 'markers',
  ...scatter.markers
}

Plotly.newPlot('scattermarkers', [scattermarkers], cloneDeep(layout), configuartion)

// Type: Bar

const bardefault = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: 'bar',
  ...bar
}

Plotly.newPlot('bar', [bardefault], cloneDeep(layout), configuartion)

const bardefaultmulti = {
  x: [1, 2, 3, 4],
  y: [4, 7, 2, 11],
  type: 'bar',
  ...bar
}

Plotly.newPlot('bar-multi', [bardefault, bardefaultmulti], cloneDeep(layout), configuartion)

// Type: Pie

const piedefault = {
  values: [19, 26, 55],
  labels: ['Residential', 'Non-Residential', 'Utility'],
  type: 'pie',
  ...pie
}

Plotly.newPlot('pie', [piedefault], cloneDeep(layout), configuartion)

// Type: Histogram

const histogramdefault = {
  x: [5, 17, 1, 9, 1, 20, 12, 8, 2, 25, 5, 6, 18],
  type: 'histogram',
  ...histogram
}

Plotly.newPlot('histogram', [histogramdefault], set(cloneDeep(layout), 'bargroupgap', 0), configuartion)

// Type: Histogram 2d

const histogram2ddefault = {
  x: [1, 2, 3, 4],
  y: [5, 6, 7, 8],
  type: 'histogram2d',
  ...histogram2d
}

Plotly.newPlot('histogram2d', [histogram2ddefault], cloneDeep(layout), configuartion)

// Type: OHLC

const ohlcdefault = {
  x: ['2017-01-17', '2017-01-18', '2017-01-19', '2017-01-20', '2017-01-23', '2017-01-24', '2017-01-25', '2017-01-26', '2017-01-27', '2017-01-30', '2017-01-31', '2017-02-01', '2017-02-02', '2017-02-03', '2017-02-06', '2017-02-07', '2017-02-08', '2017-02-09', '2017-02-10'],
  close: [120, 119.989998, 119.779999, 120, 120.080002, 119.970001, 121.879997, 121.940002, 121.949997, 121.629997, 121.349998, 128.75, 128.529999, 129.080002, 130.289993, 131.529999, 132.039993, 132.419998, 132.119995],
  high: [120.239998, 120.5, 120.089996, 120.449997, 120.809998, 120.099998, 122.099998, 122.440002, 122.349998, 121.629997, 121.389999, 130.490005, 129.389999, 129.190002, 130.5, 132.089996, 132.220001, 132.449997, 132.940002],
  low: [118.220001, 119.709999, 119.370003, 119.730003, 119.769997, 119.5, 120.279999, 121.599998, 121.599998, 120.660004, 120.620003, 127.010002, 127.779999, 128.160004, 128.899994, 130.449997, 131.220001, 131.119995, 132.050003],
  open: [118.339996, 120, 119.400002, 120.449997, 120, 119.550003, 120.419998, 121.669998, 122.139999, 120.93, 121.150002, 127.029999, 127.980003, 128.309998, 129.130005, 130.539993, 131.350006, 131.649994, 132.460007],
  type: 'ohlc',
  showlegend: false,
  ...ohlc
}

Plotly.newPlot('ohlc', [ohlcdefault], cloneDeep(layout), configuartion)

// Type: Candlestick

const candlestickdefault = {
  x: ['2017-01-04', '2017-01-05', '2017-01-06', '2017-01-09', '2017-01-10', '2017-01-11', '2017-01-12', '2017-01-13', '2017-01-17', '2017-01-18', '2017-01-19', '2017-01-20', '2017-01-23', '2017-01-24', '2017-01-25', '2017-01-26', '2017-01-27', '2017-01-30', '2017-01-31', '2017-02-01', '2017-02-02', '2017-02-03', '2017-02-06', '2017-02-07', '2017-02-08', '2017-02-09', '2017-02-10', '2017-02-13', '2017-02-14', '2017-02-15'],
  close: [116.019997, 116.610001, 117.910004, 118.989998, 119.110001, 119.75, 119.25, 119.040001, 120, 119.989998, 119.779999, 120, 120.080002, 119.970001, 121.879997, 121.940002, 121.949997, 121.629997, 121.349998, 128.75, 128.529999, 129.080002, 130.289993, 131.529999, 132.039993, 132.419998, 132.119995, 133.289993, 135.020004, 135.509995],
  high: [116.510002, 116.860001, 118.160004, 119.43, 119.379997, 119.93, 119.300003, 119.620003, 120.239998, 120.5, 120.089996, 120.449997, 120.809998, 120.099998, 122.099998, 122.440002, 122.349998, 121.629997, 121.389999, 130.490005, 129.389999, 129.190002, 130.5, 132.089996, 132.220001, 132.449997, 132.940002, 133.820007, 135.089996, 136.270004],
  line: {color: 'rgba(31,119,180,1)'},
  low: [115.75, 115.809998, 116.470001, 117.940002, 118.300003, 118.599998, 118.209999, 118.809998, 118.220001, 119.709999, 119.370003, 119.730003, 119.769997, 119.5, 120.279999, 121.599998, 121.599998, 120.660004, 120.620003, 127.010002, 127.779999, 128.160004, 128.899994, 130.449997, 131.220001, 131.119995, 132.050003, 132.75, 133.25, 134.619995],
  open: [115.849998, 115.919998, 116.779999, 117.949997, 118.769997, 118.739998, 118.900002, 119.110001, 118.339996, 120, 119.400002, 120.449997, 120, 119.550003, 120.419998, 121.669998, 122.139999, 120.93, 121.150002, 127.029999, 127.980003, 128.309998, 129.130005, 130.539993, 131.350006, 131.649994, 132.460007, 133.080002, 133.470001, 135.520004],
  type: 'candlestick',
  showlegend: false,
  ...candlestick
}

Plotly.newPlot('candlestick', [candlestickdefault], cloneDeep(layout), configuartion)

// Type: Violin

const violindefault = {
  type: 'violin',
  y: [4, 6, 9, 2, 9, 111, 90, 80, 21, 1, 2],
  ...violin
}

Plotly.newPlot('violin', [violindefault], cloneDeep(layout), configuartion)

// Type: Scatterpolar

// Mode: Lines

const scatterpolarlines = {
  r: [0.2, 0.5, 0.4, 0.7, 0.2],
  theta: [1, 3, 6, 9, 56, 99],
  mode: 'lines',
  type: 'scatterpolar',
  ...scatterpolar.lines
}

Plotly.newPlot('scatterpolarlines', [scatterpolarlines], cloneDeep(layout), configuartion)

const scatterpolarlinesmulti = {
  r: [0.6, 0.2, 0.8, 0.9, 0.1],
  theta: [20, 56, 42, 74, 12, 59],
  mode: 'lines',
  type: 'scatterpolar',
  ...scatterpolar.lines
}

Plotly.newPlot('scatterpolarlinesmulti', [scatterpolarlines, scatterpolarlinesmulti], cloneDeep(layout), configuartion)

// Mode: Markers

const scatterpolarmarkers = {
  r: [0.2, 0.5, 0.4, 0.7, 0.2],
  theta: [1, 3, 6, 9, 56, 99],
  mode: 'markers',
  type: 'scatterpolar',
  ...scatterpolar.lines
}

Plotly.newPlot('scatterpolarmarkers', [scatterpolarmarkers], cloneDeep(layout), configuartion)

const scatterpolarmarkersmulti = {
  r: [0.3, 0.1, 0.9, 0.6, 0.7],
  theta: [5, 9, 15, 18, 58, 101],
  mode: 'markers',
  type: 'scatterpolar',
  ...scatterpolar.markers
}

Plotly.newPlot('scatterpolarmarkersmulti', [scatterpolarmarkers, scatterpolarmarkersmulti], cloneDeep(layout), configuartion)

// Type: Box

const boxdefault = {
  y: [2, 4, 9, 11, 1, 3, 18],
  type: 'box',
  ...box
}

Plotly.newPlot('box', [boxdefault], cloneDeep(layout), configuartion)

const boxdefaultmulti = {
  y: [9, 2, 1, 10, 4, 1, 11],
  type: 'box',
  ...box
}

Plotly.newPlot('boxmulti', [boxdefault, boxdefaultmulti], cloneDeep(layout), configuartion)

// Type: Scatterternary

// Mode: Lines

const scatterternarylines = {
  type: 'scatterternary',
  mode: 'lines',
  a: [75, 70, 75, 5, 10, 10, 20, 10, 15, 10, 20],
  b: [25, 10, 20, 60, 80, 90, 70, 20, 5, 10, 10],
  c: [0, 20, 5, 35, 10, 0, 10, 70, 80, 80, 70],
  text: ['Point 1', 'Point 2', 'Point 3', 'Point 4', 'Point 5', 'Point 6', 'Point 7', 'Point 8', 'Point 9', 'Point 10',
    'Point 11'],
  ...scatterternary.markers
}

Plotly.newPlot('scatterternarylines', [scatterternarylines], cloneDeep(layout), configuartion)

// Mode: Markers

const scatterternarymarkers = {
  type: 'scatterternary',
  mode: 'markers',
  a: [75, 70, 75, 5, 10, 10, 20, 10, 15, 10, 20],
  b: [25, 10, 20, 60, 80, 90, 70, 20, 5, 10, 10],
  c: [0, 20, 5, 35, 10, 0, 10, 70, 80, 80, 70],
  text: ['Point 1', 'Point 2', 'Point 3', 'Point 4', 'Point 5', 'Point 6', 'Point 7', 'Point 8', 'Point 9', 'Point 10',
    'Point 11'],
  ...scatterternary.markers
}

Plotly.newPlot('scatterternarymarkers', [scatterternarymarkers], cloneDeep(layout), configuartion)

// Type: Choropleth

const choroplethdefault = {
  type: 'choropleth',
  locationmode: 'country names',
  locations: ['Belarus', 'Moldova', 'Russia', 'Slovakia', 'Austria', 'Greece', 'Brazil', 'India', 'Algeria', 'Egypt',
    'Canada', 'United States', 'Sierra Leone', 'Norway', 'Ghana', 'Australia', 'Peru', 'Guyana', 'Cape Verde',
    'Barbados'],
  z: [17.5, 16.8, 15.1, 13, 10.3, 10.3, 8.7, 4.3, 1, 0.4, 8.4, 9.2, 8.7, 7.7, 4.8, 12.2, 8.1, 8.1, 6.9, 6.8],
  get text () { return this.locations },
  autocolorscale: true,
  ...choropleth
}

Plotly.newPlot('choropleth', [choroplethdefault], cloneDeep(layout), configuartion)

// Type: Sankey

const sankeydefault = {
  type: 'sankey',
  node: {
    label: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
    ...sankey.node
  },
  link: {
    source: [0, 1, 0, 2, 3, 3],
    target: [2, 3, 3, 4, 4, 5],
    value: [8, 4, 2, 8, 4, 2],
    ...sankey.link
  }
}

Plotly.newPlot('sankey', [sankeydefault], cloneDeep(layout), configuartion)

// Type: Scatter 3d

// Mode: Lines

const scatter3dlines = {
  x: [1, 2, 3, 4, 5],
  y: [9, 28, 1, 3, 4, 10],
  z: [10, 8, 7, 21, 1, 0],
  mode: 'lines',
  type: 'scatter3d',
  ...scatter3d.lines
}

Plotly.newPlot('scatter3dlines', [scatter3dlines], cloneDeep(layout), configuartion)

// Multi

const scatter3dlinesmulti = {
  x: [1, 2, 3, 4, 5],
  y: [5, 2, 6, 5, 3, 1],
  z: [6, 4, 2, 19, 17, 5],
  mode: 'lines',
  type: 'scatter3d',
  ...scatter3d.lines
}

Plotly.newPlot('scatter3dlinesmulti', [scatter3dlines, scatter3dlinesmulti], cloneDeep(layout), configuartion)

// Fill

const scatter3dlinesfill = {
  x: [1, 2, 3, 4, 5],
  y: [9, 28, 1, 3, 4, 10],
  z: [10, 8, 7, 21, 1, 0],
  surfaceaxis: 1,
  mode: 'lines',
  type: 'scatter3d',
  ...scatter3d.lines
}

Plotly.newPlot('scatter3dlinesfill', [scatter3dlinesfill], cloneDeep(layout), configuartion)

// Mode: markers

const scatter3dmarkers = {
  x: [1, 2, 3, 4, 5],
  y: [9, 28, 1, 3, 4, 10],
  z: [10, 8, 7, 21, 1, 0],
  mode: 'markers',
  type: 'scatter3d',
  ...scatter3d.markers
}

Plotly.newPlot('scatter3dmarkers', [scatter3dmarkers], cloneDeep(layout), configuartion)
