# plotly-js-material-design-theme

**Warning**: This project is currently not stable and the API might change in the future. See the current 
[demo](https://ndabap.github.io/plotly-js-material-design-theme/).

## Features

- Material Design charts
- easy extendable
- modern ES6 base

## Installation

```bash
$ npm install plotly-js-material-design-theme 
```

## Usage

Import the chart type you need plus the general layout and merge it with your chart configuration. You may need to 
specify the mode. Let's say you want the scatter type and line mode. First, import the scatter type.

```js
import {layout, scatter} from 'plotly-js-material-design-theme'
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

Plotly.newPlot('scatter-lines', [scatterlines], layout)
```

## Author

[Julian Claus](https://www.julian-claus.de) and contributors.

## License

MIT
