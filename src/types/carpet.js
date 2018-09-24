import defaultsDeep from 'lodash.defaultsdeep'

export const carpet = configuration => defaultsDeep(configuration, {
  aaxis: {
    color: '#4285F4',
    gridwidth: 2
  },

  baxis: {
    color: '#4285F4',
    gridwidth: 2
  }
})
