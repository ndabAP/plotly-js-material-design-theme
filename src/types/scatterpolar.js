import defaultsDeep from 'lodash.defaultsdeep'

export const scatterpolar = configuration => defaultsDeep(configuration, {
  line: {
    width: 2
  },

  fillcolor: 'rgba(171, 71, 188, 0.3)'
})
