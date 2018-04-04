import Plotly from 'plotly.js'
import { layout, scatter, bar, pie, histogram, histogram2d } from '../../src'

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

Plotly.newPlot('scatter-lines', [scatterlines], layout, configuartion)

const scatterlinesmulti = {
  x: [1, 2, 3, 4],
  y: [12, 1, 8, 12],
  type: 'scatter',
  mode: 'lines',
  ...scatter.lines
}

Plotly.newPlot('scatter-lines-multi', [scatterlines, scatterlinesmulti], layout, configuartion)

// Mode: Lines
const scattermarkers = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: 'scatter',
  mode: 'markers',
  ...scatter.markers
}

Plotly.newPlot('scatter-markers', [scattermarkers], layout, configuartion)

// Type: Bar

const bardefault = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: 'bar',
  ...bar
}

Plotly.newPlot('bar', [bardefault], layout, configuartion)

const bardefaultmulti = {
  x: [1, 2, 3, 4],
  y: [4, 7, 2, 11],
  type: 'bar',
  ...bar
}

Plotly.newPlot('bar-multi', [bardefault, bardefaultmulti], layout, configuartion)

// Type: Pie

const piedefault = {
  values: [19, 26, 55],
  labels: ['Residential', 'Non-Residential', 'Utility'],
  type: 'pie',
  ...pie
}

Plotly.newPlot('pie', [piedefault], layout, configuartion)

// Type: Histogram

const histogramdefault = {
  x: [5, 9, 1, 20, 12, 8, 2, 25],
  type: 'histogram',
  ...histogram
}

Plotly.newPlot('histogram', [histogramdefault], layout, configuartion)

// Type: Histogram 2d

const histogram2ddefault = {
  x: [1, 2, 3, 4],
  y: [5, 6, 7, 8],
  type: 'histogram2d',
  ...histogram2d
}

Plotly.newPlot('histogram2d', [histogram2ddefault], layout, configuartion)
