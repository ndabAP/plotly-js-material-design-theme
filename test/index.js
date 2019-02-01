import Plotly from 'plotly.js'
import {
  layout,
  scatter,
  bar,
  carpet,
  cone,
  contour,
  heatmap,
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
  sankey,
  parcoords,
  scattergeo,
  histogram2dcontour
} from '../src'

const configuration = {displayModeBar: false}
const getLayout = additional => layout({
  autosize: true,
  xaxis: {
    title: 'x-Axis'
  },
  title: 'Chart',
  ternary: {
    sum: 100
  },
  geo: {
    resolution: 110,
    projection: {
      scale: 1
    }
  },
  ...additional
})

// Type: Scatter

// Mode: Lines

const scatterlines = scatter({
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: 'scatter',
  mode: 'lines'
})

Plotly.newPlot('scatterlines', [scatterlines], getLayout(), configuration)

// Error bar

const scatterlineserror = scatter({
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  error_y: {
    type: 'data',
    array: [1, 4, 2, 5],
    visible: true
  },
  type: 'scatter',
  mode: 'lines'
})

Plotly.newPlot('scatterlineserror', [scatterlineserror], getLayout(), configuration)

const scatterlinesmulti = scatter({
  x: [1, 2, 3, 4],
  y: [12, 1, 8, 12],
  type: 'scatter',
  mode: 'lines'
})

// Fill

Plotly.newPlot('scatterlinesmulti', [scatterlines, scatterlinesmulti], getLayout(), configuration)

const scatterlinesfill = scatter({
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: 'scatter',
  mode: 'lines',
  fill: 'tozeroy'
})

Plotly.newPlot('scatterlinesfill', [scatterlinesfill], getLayout(), configuration)

// Mode: Markers

const scattermarkers = scatter({
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: 'scatter',
  mode: 'markers'
})

Plotly.newPlot('scattermarkers', [scattermarkers], getLayout(), configuration)

const scattermarkersmarker = scatter({
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  mode: 'markers',
  marker: {
    size: [40, 60, 80, 100]
  }
})

Plotly.newPlot('scattermarkersmarker', [scattermarkersmarker], getLayout(), configuration)

// Type: Bar

const bardefault = bar({
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: 'bar'
})

Plotly.newPlot('bar', [bardefault], getLayout(), configuration)

const bardefaultmulti = bar({
  x: [1, 2, 3, 4],
  y: [4, 7, 2, 11],
  type: 'bar'
})

Plotly.newPlot('bar-multi', [bardefault, bardefaultmulti], getLayout(), configuration)

// Type: Carpet

const carpetdefault = carpet({
  type: 'carpet',
  a: [4, 4, 4, 4.5, 4.5, 4.5, 5, 5, 5, 6, 6, 6],
  b: [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3],
  y: [2, 3.5, 4, 3, 4.5, 5, 5.5, 6.5, 7.5, 8, 8.5, 10]
})

Plotly.newPlot('carpet', [carpetdefault], getLayout(), configuration)

// Type: contour

const size = 100
let x = new Array(size)
let y = new Array(size)
let z = new Array(size)

for (let i = 0; i < size; i++) {
  x[i] = y[i] = -2 * Math.PI + 4 * Math.PI * i / size
  z[i] = new Array(size)
}

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    let r2 = x[i] * x[i] + y[j] * y[j]
    z[i][j] = Math.sin(x[i]) * Math.cos(y[j]) * Math.sin(r2) / Math.log(r2 + 1)
  }
}

const contourdefault = contour({
  z,
  x,
  y,
  type: 'contour'
})

Plotly.newPlot('contour', [contourdefault], getLayout(), configuration)

// Type: heatmap

const heatmapdefault = heatmap({
  z: [[1, 20, 30], [20, 1, 60], [30, 60, 1]],
  type: 'heatmap'
})

Plotly.newPlot('heatmap', [heatmapdefault], getLayout(), configuration)

// Type: cone

const conedefault = cone({
  type: 'cone',
  x: [1],
  y: [1],
  z: [1],
  u: [1],
  v: [1],
  w: [0]
})

Plotly.newPlot('cone', [conedefault], getLayout(), configuration)

// Type: Pie

const piedefault = pie({
  values: [19, 26, 55],
  labels: ['Residential', 'Non-Residential', 'Utility'],
  type: 'pie'
})

Plotly.newPlot('pie', [piedefault], getLayout(), configuration)

// Type: Histogram

const histogramdefault = histogram({
  x: [5, 17, 1, 9, 1, 20, 12, 8, 2, 25, 5, 6, 18],
  type: 'histogram'
})

Plotly.newPlot('histogram', [histogramdefault], getLayout({bargroupgap: 0}), configuration)

// Type: Histogram 2d

const histogram2ddefault = histogram2d({
  x: [1, 2, 3, 4],
  y: [5, 6, 7, 8],
  type: 'histogram2d'
})

Plotly.newPlot('histogram2d', [histogram2ddefault], getLayout(), configuration)

// Type: OHLC

const ohlcdefault = ohlc({
  x: ['2017-01-17', '2017-01-18', '2017-01-19', '2017-01-20', '2017-01-23', '2017-01-24', '2017-01-25', '2017-01-26', '2017-01-27', '2017-01-30', '2017-01-31', '2017-02-01', '2017-02-02', '2017-02-03', '2017-02-06', '2017-02-07', '2017-02-08', '2017-02-09', '2017-02-10'],
  close: [120, 119.989998, 119.779999, 120, 120.080002, 119.970001, 121.879997, 121.940002, 121.949997, 121.629997, 121.349998, 128.75, 128.529999, 129.080002, 130.289993, 131.529999, 132.039993, 132.419998, 132.119995],
  high: [120.239998, 120.5, 120.089996, 120.449997, 120.809998, 120.099998, 122.099998, 122.440002, 122.349998, 121.629997, 121.389999, 130.490005, 129.389999, 129.190002, 130.5, 132.089996, 132.220001, 132.449997, 132.940002],
  low: [118.220001, 119.709999, 119.370003, 119.730003, 119.769997, 119.5, 120.279999, 121.599998, 121.599998, 120.660004, 120.620003, 127.010002, 127.779999, 128.160004, 128.899994, 130.449997, 131.220001, 131.119995, 132.050003],
  open: [118.339996, 120, 119.400002, 120.449997, 120, 119.550003, 120.419998, 121.669998, 122.139999, 120.93, 121.150002, 127.029999, 127.980003, 128.309998, 129.130005, 130.539993, 131.350006, 131.649994, 132.460007],
  type: 'ohlc',
  showlegend: false
})

Plotly.newPlot('ohlc', [ohlcdefault], getLayout(), configuration)

// Type: Candlestick

const candlestickdefault = candlestick({
  x: ['2017-01-04', '2017-01-05', '2017-01-06', '2017-01-09', '2017-01-10', '2017-01-11', '2017-01-12', '2017-01-13', '2017-01-17', '2017-01-18', '2017-01-19', '2017-01-20', '2017-01-23', '2017-01-24', '2017-01-25', '2017-01-26', '2017-01-27', '2017-01-30', '2017-01-31', '2017-02-01', '2017-02-02', '2017-02-03', '2017-02-06', '2017-02-07', '2017-02-08', '2017-02-09', '2017-02-10', '2017-02-13', '2017-02-14', '2017-02-15'],
  close: [116.019997, 116.610001, 117.910004, 118.989998, 119.110001, 119.75, 119.25, 119.040001, 120, 119.989998, 119.779999, 120, 120.080002, 119.970001, 121.879997, 121.940002, 121.949997, 121.629997, 121.349998, 128.75, 128.529999, 129.080002, 130.289993, 131.529999, 132.039993, 132.419998, 132.119995, 133.289993, 135.020004, 135.509995],
  high: [116.510002, 116.860001, 118.160004, 119.43, 119.379997, 119.93, 119.300003, 119.620003, 120.239998, 120.5, 120.089996, 120.449997, 120.809998, 120.099998, 122.099998, 122.440002, 122.349998, 121.629997, 121.389999, 130.490005, 129.389999, 129.190002, 130.5, 132.089996, 132.220001, 132.449997, 132.940002, 133.820007, 135.089996, 136.270004],
  line: {color: 'rgba(31,119,180,1)'},
  low: [115.75, 115.809998, 116.470001, 117.940002, 118.300003, 118.599998, 118.209999, 118.809998, 118.220001, 119.709999, 119.370003, 119.730003, 119.769997, 119.5, 120.279999, 121.599998, 121.599998, 120.660004, 120.620003, 127.010002, 127.779999, 128.160004, 128.899994, 130.449997, 131.220001, 131.119995, 132.050003, 132.75, 133.25, 134.619995],
  open: [115.849998, 115.919998, 116.779999, 117.949997, 118.769997, 118.739998, 118.900002, 119.110001, 118.339996, 120, 119.400002, 120.449997, 120, 119.550003, 120.419998, 121.669998, 122.139999, 120.93, 121.150002, 127.029999, 127.980003, 128.309998, 129.130005, 130.539993, 131.350006, 131.649994, 132.460007, 133.080002, 133.470001, 135.520004],
  type: 'candlestick',
  showlegend: false
})

Plotly.newPlot('candlestick', [candlestickdefault], getLayout(), configuration)

// Type: Violin

const violindefault = violin({
  type: 'violin',
  y: [4, 6, 9, 2, 9, 111, 90, 80, 21, 1, 2]
})

Plotly.newPlot('violin', [violindefault], getLayout(), configuration)

// Type: Scatterpolar

// Mode: Lines

const scatterpolarlines = scatterpolar({
  r: [0.2, 0.5, 0.4, 0.7, 0.2],
  theta: [1, 3, 6, 9, 56, 99],
  mode: 'lines',
  type: 'scatterpolar'
})

Plotly.newPlot('scatterpolarlines', [scatterpolarlines], getLayout(), configuration)

const scatterpolarlinesmulti = scatterpolar({
  r: [0.6, 0.2, 0.8, 0.9, 0.1],
  theta: [20, 56, 42, 74, 12, 59],
  mode: 'lines',
  type: 'scatterpolar'
})

Plotly.newPlot('scatterpolarlinesmulti', [scatterpolarlines, scatterpolarlinesmulti], getLayout(), configuration)

// Mode: Markers

const scatterpolarmarkers = scatterpolar({
  r: [0.2, 0.5, 0.4, 0.7, 0.2],
  theta: [1, 3, 6, 9, 56, 99],
  mode: 'markers',
  type: 'scatterpolar'
})

Plotly.newPlot('scatterpolarmarkers', [scatterpolarmarkers], getLayout(), configuration)

const scatterpolarmarkersmulti = scatterpolar({
  r: [0.3, 0.1, 0.9, 0.6, 0.7],
  theta: [5, 9, 15, 18, 58, 101],
  mode: 'markers',
  type: 'scatterpolar'
})

Plotly.newPlot('scatterpolarmarkersmulti', [scatterpolarmarkers, scatterpolarmarkersmulti], getLayout(), configuration)

// Type: Box

const boxdefault = box({
  y: [2, 4, 9, 11, 1, 3, 18],
  type: 'box'
})

Plotly.newPlot('box', [boxdefault], getLayout(), configuration)

const boxdefaultmulti = box({
  y: [9, 2, 1, 10, 4, 1, 11],
  type: 'box'
})

Plotly.newPlot('boxmulti', [boxdefault, boxdefaultmulti], getLayout(), configuration)

// Type: Scatterternary

// Mode: Lines

const scatterternarylines = scatterternary({
  type: 'scatterternary',
  mode: 'lines',
  a: [75, 70, 75, 5, 10, 10, 20, 10, 15, 10, 20],
  b: [25, 10, 20, 60, 80, 90, 70, 20, 5, 10, 10],
  c: [0, 20, 5, 35, 10, 0, 10, 70, 80, 80, 70],
  text: ['Point 1', 'Point 2', 'Point 3', 'Point 4', 'Point 5', 'Point 6', 'Point 7', 'Point 8', 'Point 9', 'Point 10',
    'Point 11']
})

Plotly.newPlot('scatterternarylines', [scatterternarylines], getLayout(), configuration)

// Mode: Markers

const scatterternarymarkers = scatterternary({
  type: 'scatterternary',
  mode: 'markers',
  a: [75, 70, 75, 5, 10, 10, 20, 10, 15, 10, 20],
  b: [25, 10, 20, 60, 80, 90, 70, 20, 5, 10, 10],
  c: [0, 20, 5, 35, 10, 0, 10, 70, 80, 80, 70],
  text: ['Point 1', 'Point 2', 'Point 3', 'Point 4', 'Point 5', 'Point 6', 'Point 7', 'Point 8', 'Point 9', 'Point 10',
    'Point 11']
})

Plotly.newPlot('scatterternarymarkers', [scatterternarymarkers], getLayout(), configuration)

// Type: Choropleth

const choroplethdefault = choropleth({
  type: 'choropleth',
  locationmode: 'country names',
  locations: ['Belarus', 'Moldova', 'Russia', 'Slovakia', 'Austria', 'Greece', 'Brazil', 'India', 'Algeria', 'Egypt',
    'Canada', 'United States', 'Sierra Leone', 'Norway', 'Ghana', 'Australia', 'Peru', 'Guyana', 'Cape Verde',
    'Barbados'],
  z: [17.5, 16.8, 15.1, 13, 10.3, 10.3, 8.7, 4.3, 1, 0.4, 8.4, 9.2, 8.7, 7.7, 4.8, 12.2, 8.1, 8.1, 6.9, 6.8],
  get text () { return this.locations }
})

Plotly.newPlot('choropleth', [choroplethdefault], getLayout({geo: {showocean: false}}), configuration)

// Type: Scattergeo

// Mode: Markers

const scattergeomarkers = scattergeo({
  type: 'scattergeo',
  mode: 'markers',
  text: [
    'Montreal', 'Toronto', 'Vancouver', 'Calgary', 'Edmonton',
    'Ottawa', 'Halifax', 'Victoria', 'Winnepeg', 'Regina'
  ],
  lon: [
    -73.57, -79.24, -123.06, -114.1, -113.28,
    -75.43, -63.57, -123.21, -97.13, -104.6
  ],
  lat: [
    45.5, 43.4, 49.13, 51.1, 53.34, 45.24,
    44.64, 48.25, 49.89, 50.45
  ]
})

Plotly.newPlot('scattergeomarkers', [scattergeomarkers], getLayout({
  geo: {
    scope: 'north america',
    lonaxis: {
      'range': [-130, -55]
    },
    lataxis: {
      'range': [40, 70]
    },
    showrivers: true,
    showlakes: true,
    showland: true
  }
}), configuration)

// Mode: Lines

const scattergeolines = scattergeo({
  type: 'scattergeo',
  mode: 'lines',
  text: [
    'Montreal', 'Toronto', 'Vancouver', 'Calgary', 'Edmonton',
    'Ottawa', 'Halifax', 'Victoria', 'Winnepeg', 'Regina'
  ],
  lon: [
    -73.57, -79.24, -123.06, -114.1, -113.28,
    -75.43, -63.57, -123.21, -97.13, -104.6
  ],
  lat: [
    45.5, 43.4, 49.13, 51.1, 53.34, 45.24,
    44.64, 48.25, 49.89, 50.45
  ]
})

Plotly.newPlot('scattergeolines', [scattergeolines], getLayout({
  geo: {
    scope: 'north america',
    lonaxis: {
      'range': [-130, -55]
    },
    lataxis: {
      'range': [40, 70]
    },
    showrivers: true,
    showlakes: true,
    showland: true
  }
}), configuration)

// Type: Sankey

const sankeydefault = sankey({
  type: 'sankey',
  node: {
    label: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']
  },
  link: {
    source: [0, 1, 0, 2, 3, 3],
    target: [2, 3, 3, 4, 4, 5],
    value: [8, 4, 2, 8, 4, 2]
  }
})

Plotly.newPlot('sankey', [sankeydefault], getLayout(), configuration)

// Type: Parcoords

const parcoordsdefault = parcoords({
  type: 'parcoords',
  dimensions: [{
    range: [1, 5],
    constraintrange: [1, 2],
    label: 'A',
    values: [1, 4]
  }, {
    range: [1, 5],
    label: 'B',
    values: [3, 1.5],
    tickvals: [1.5, 3, 4.5]
  }, {
    range: [1, 5],
    label: 'C',
    values: [2, 4],
    tickvals: [1, 2, 4, 5],
    ticktext: ['text 1', 'text 2', 'text 4', 'text 5']
  }, {
    range: [1, 5],
    label: 'D',
    values: [4, 2]
  }]
})

Plotly.newPlot('parcoords', [parcoordsdefault], getLayout(), configuration)

// Type: Scatter 3d

// Mode: Lines

const scatter3dlines = scatter3d({
  x: [1, 2, 3, 4, 5],
  y: [9, 28, 1, 3, 4, 10],
  z: [10, 8, 7, 21, 1, 0],
  mode: 'lines',
  type: 'scatter3d'
})

Plotly.newPlot('scatter3dlines', [scatter3dlines], getLayout(), configuration)

// Multi

const scatter3dlinesmulti = scatter3d({
  x: [1, 2, 3, 4, 5],
  y: [5, 2, 6, 5, 3, 1],
  z: [6, 4, 2, 19, 17, 5],
  mode: 'lines',
  type: 'scatter3d'
})

Plotly.newPlot('scatter3dlinesmulti', [scatter3dlines, scatter3dlinesmulti], getLayout(), configuration)

// Fill

const scatter3dlinesfill = scatter3d({
  x: [1, 2, 3, 4, 5],
  y: [9, 28, 1, 3, 4, 10],
  z: [10, 8, 7, 21, 1, 0],
  surfaceaxis: 1,
  mode: 'lines',
  type: 'scatter3d'
})

Plotly.newPlot('scatter3dlinesfill', [scatter3dlinesfill], getLayout(), configuration)

// Mode: markers

const scatter3dmarkers = scatter3d({
  x: [1, 2, 3, 4, 5],
  y: [9, 28, 1, 3, 4, 10],
  z: [10, 8, 7, 21, 1, 0],
  mode: 'markers',
  type: 'scatter3d'
})

Plotly.newPlot('scatter3dmarkers', [scatter3dmarkers], getLayout(), configuration)

// Type: Histogram 2-D contour

const histogram2dcontourdefault = histogram2dcontour({
  x: [1, 2, 3, 4, 5],
  y: [9, 28, 1, 3, 4, 10],
  type: 'histogram2dcontour'
})

Plotly.newPlot('histogram2dcontour', [histogram2dcontourdefault], getLayout(), configuration)
