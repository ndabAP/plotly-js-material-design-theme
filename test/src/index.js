import Plotly from 'plotly.js'
import {layout, scatter, bar} from '../../src'

const configuartion = {displayModeBar: false}

// Type: Scatter

// Mode: Lines
const scatterlines = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: 'scatter',
  mode: 'lines',
  ...scatter.lines
}

layout.xaxis.title = 'Title'
layout.yaxis.title = 'Title'

Plotly.newPlot('scatter-lines', [scatterlines], layout, configuartion)

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
