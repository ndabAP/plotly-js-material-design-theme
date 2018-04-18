import defaultsDeep from 'lodash.defaultsdeep'

export const parcoords = configuration => defaultsDeep(configuration, {
  line: {
    width: 10,
    colorbar: {
      len: 1,
      outlinewidth: 0,

      tickfont: {
        color: '#757575'
      }
    }
  },

  tickfont: {
    color: '#757575',
    size: 12
  },

  rangefont: {
    color: '#757575',
    size: 12
  }
})
