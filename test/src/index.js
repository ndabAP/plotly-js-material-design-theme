import Plotly from 'plotly.js'
import {layout, scatter} from '../../src'

// Scatter
const trace = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: 'scatter',
  ...scatter
}

const data = [trace]

Plotly.newPlot('scatter', data, layout)
