import defaultsDeep from 'lodash.defaultsdeep'

export const candlestick = configuration => defaultsDeep(configuration, {
  decreasing: {
    line: {
      color: '#3F51B5',
      width: 1
    },

    fillcolor: '#3F51B5'
  },

  increasing: {
    line: {
      color: '#3F51B5',
      width: 1
    },

    fillcolor: '#fff'
  }
})
