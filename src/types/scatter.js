import defaultsDeep from 'lodash.defaultsdeep'

export const scatter = configuration => defaultsDeep(configuration, {
  fillcolor: 'rgba(171, 71, 188, 0.3)',

  line: {
    width: 2
  },

  marker: {
    size: 10
  }
})
