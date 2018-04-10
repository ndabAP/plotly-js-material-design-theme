import defaultsDeep from 'lodash.defaultsdeep'

export const scatter3d = configuration => defaultsDeep(configuration, {
  surfacecolor: 'rgba(171, 71, 188, 0.3)',

  line: {
    width: 2
  },

  marker: {
    size: 6
  }
})
