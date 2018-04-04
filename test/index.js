import Plotly from 'plotly.js'
import cloneDeep from 'lodash/cloneDeep'
import { layout, scatter, bar, pie, histogram, histogram2d, violin } from '../src'

const configuartion = {displayModeBar: false}

// Type: Scatter

// Mode: Lines
layout.yaxis.title = 'x-Axis'
layout.xaxis.title = 'y-Axis'

const scatterlines = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: 'scatter',
  mode: 'lines',
  ...scatter.lines
}

Plotly.newPlot('scatter-lines', [scatterlines], cloneDeep(layout), configuartion)

const scatterlinesmulti = {
  x: [1, 2, 3, 4],
  y: [12, 1, 8, 12],
  type: 'scatter',
  mode: 'lines',
  ...scatter.lines
}

Plotly.newPlot('scatter-lines-multi', [scatterlines, scatterlinesmulti], cloneDeep(layout), configuartion)

// Mode: Lines
const scattermarkers = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: 'scatter',
  mode: 'markers',
  ...scatter.markers
}

Plotly.newPlot('scatter-markers', [scattermarkers], cloneDeep(layout), configuartion)

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
  x: [5, 9, 1, 20, 12, 8, 2, 25],
  type: 'histogram',
  ...histogram
}

Plotly.newPlot('histogram', [histogramdefault], cloneDeep(layout), configuartion)

// Type: Histogram 2d

const histogram2ddefault = {
  x: [1, 2, 3, 4],
  y: [5, 6, 7, 8],
  type: 'histogram2d',
  ...histogram2d
}

Plotly.newPlot('histogram2d', [histogram2ddefault], cloneDeep(layout), configuartion)

// Type: Violin

const violindefault = {
  type: 'violin',
  y: [4, 6, 9, 2, 9, 111, 90, 80, 21, 1, 2],
  ...violin
}

Plotly.newPlot('violin', [violindefault], cloneDeep(layout), configuartion)

// Type: OHLC

const ohlcdefault = {
  x: ['2017-01-17', '2017-01-18', '2017-01-19', '2017-01-20', '2017-01-23', '2017-01-24', '2017-01-25', '2017-01-26', '2017-01-27', '2017-01-30', '2017-01-31', '2017-02-01', '2017-02-02', '2017-02-03', '2017-02-06', '2017-02-07', '2017-02-08', '2017-02-09', '2017-02-10'],
  close: [120, 119.989998, 119.779999, 120, 120.080002, 119.970001, 121.879997, 121.940002, 121.949997, 121.629997, 121.349998, 128.75, 128.529999, 129.080002, 130.289993, 131.529999, 132.039993, 132.419998, 132.119995],
  high: [120.239998, 120.5, 120.089996, 120.449997, 120.809998, 120.099998, 122.099998, 122.440002, 122.349998, 121.629997, 121.389999, 130.490005, 129.389999, 129.190002, 130.5, 132.089996, 132.220001, 132.449997, 132.940002],
  low: [118.220001, 119.709999, 119.370003, 119.730003, 119.769997, 119.5, 120.279999, 121.599998, 121.599998, 120.660004, 120.620003, 127.010002, 127.779999, 128.160004, 128.899994, 130.449997, 131.220001, 131.119995, 132.050003],
  open: [118.339996, 120, 119.400002, 120.449997, 120, 119.550003, 120.419998, 121.669998, 122.139999, 120.93, 121.150002, 127.029999, 127.980003, 128.309998, 129.130005, 130.539993, 131.350006, 131.649994, 132.460007],
  type: 'ohlc'
}

Plotly.newPlot('ohlc', [ohlcdefault], cloneDeep(layout), configuartion)
