import defaultsDeep from 'lodash.defaultsdeep'

export const box = configuration => defaultsDeep(configuration, {
  line: {
    color: '#4285F4',
    width: 1
  },

  fillcolor: '#FFF'
})
