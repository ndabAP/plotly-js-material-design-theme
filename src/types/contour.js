import defaultsDeep from 'lodash.defaultsdeep'

export const contour = configuration => defaultsDeep(configuration, {
  contours: {
    showlines: false
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
