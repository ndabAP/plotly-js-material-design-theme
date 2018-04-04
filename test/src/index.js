import Plotly from 'plotly.js'
import { layout, scatter, bar, pie } from '../../src'

const configuartion = {displayModeBar: false}

// Type: Scatter

// Mode: Lines
layout.yaxis.title = 'Title'
layout.xaxis.title = 'Title'

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

// Type: Pi

const piedefault = {
  values: [19, 26, 55],
  labels: ['Residential', 'Non-Residential', 'Utility'],
  type: 'pie',
  ...pie
}

Plotly.newPlot('pie', [piedefault], layout, configuartion)
