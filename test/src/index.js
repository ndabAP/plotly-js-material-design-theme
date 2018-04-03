import Plotly from 'plotly.js'

const trace1 = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: 'scatter'
}

const trace2 = {
  x: [1, 2, 3, 4],
  y: [16, 5, 11, 9],
  type: 'scatter'
}

const data = [trace1, trace2]

Plotly.newPlot('chart', data)
