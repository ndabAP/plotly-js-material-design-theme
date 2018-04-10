import defaultsDeep from 'lodash.defaultsdeep'

export const ohlc = configuration => defaultsDeep(configuration, {
  decreasing: {
    line: {
      color: '#3F51B5',
      width: 1
    }
  },

  increasing: {
    line: {
      color: '#3F51B5',
      width: 1
    }
  }
})
