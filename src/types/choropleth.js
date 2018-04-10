import defaultsDeep from 'lodash.defaultsdeep'

export const choropleth = configuration => defaultsDeep(configuration, {
  marker: {
    line: {
      color: '#9E9E9E',
      width: 0
    }
  },

  autocolorscale: false,

  colorscale: [['0', '#4285f4'], ['1', '#93d5ed']],

  colorbar: {
    len: 1,
    outlinewidth: 0,
    tickfont: {
      color: '#757575'
    }
  }
})
