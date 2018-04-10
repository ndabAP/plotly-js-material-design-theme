# plotly-js-material-design-theme

> Built on top of d3.js and stack.gl, plotly.js is a high-level, declarative charting library. plotly.js ships with 20 
chart types, including 3D charts, statistical graphs, and SVG maps. 

This library introduces the Material Design guidelines to Plotly.js. **Warning**: This project is currently not stable 
and the API might change in the future. See the current 
[demo](https://ndabap.github.io/plotly-js-material-design-theme/).

## Features

- Material Design charts
- easily extendable
- effortlessly trimmable

## Installation

```bash
$ npm install plotly-js-material-design-theme 
```

## Usage

Import the chart type you need plus the general index and merge it with your chart configuration. You may need to 
specify the mode. Let's say you want the scatter type and line mode. First, import the scatter type.

```js
import {index, scatter} from 'plotly-js-material-design-theme'
```

Now setup your chart as usual but make sure you merge it with the imported one.

```js
const scatterlines = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: 'scatter',
  mode: 'lines',
  ...scatter.lines
}

Plotly.newPlot('scatter-lines', [scatterlines], index)
```

## Charts

As of version 1.35.2, Plotly.js supports 29 chart types. However, chart types can be classified by additional 
subproperties, e. g. mode or fill. The following table lists the currently supported charts by this library.

| Type            | Mode        | Subproperty     |
|-----------------|-------------|-----------------|
| `scatter`       | `lines`     | `fillcolor`     |
|                 | `markers`   |                 |
| `bar`           |             |                 |
| `pie`           |             |                 |
| `box`           |             |                 |
| `choropleth`    |             |                 |
| `scatterternary`| `lines`     | `fillcolor`     |
|                 | `markers`   |                 |
| `histogram`     |             |                 |
| `histogram2d`   |             |                 |
| `violin`        |             |                 |
| `ohlc`          |             |                 |
| `candlestick`   |             |                 |
| `scatterpolar`  | `lines`     |                 |
|                 | `markers`   |                 |
| `scatter3d`     | `lines`     | `surfacecolor`  |
|                 | `markers`   |                 |   

## Author

[Julian Claus](https://www.julian-claus.de) and contributors.

## License

MIT
