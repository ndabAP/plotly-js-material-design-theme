import defaultsDeep from 'lodash.defaultsdeep'

export const scattergeo = configuration => defaultsDeep(configuration, {
  marker: {
    size: 10,
    color: [
      '#4285F4', '#DB4437', '#F4B400', '#3F51B5', '#E91E63',
      '#9C27B0', '#673AB7', '#F44336', '#2196F3', '#03A9F4'
    ],

    line: {
      width: 0
    },

    showscale: false,

    colorbar: {
      len: 1,
      outlinewidth: 0,
      tickfont: {
        color: '#757575'
      }
    }
  }
})
