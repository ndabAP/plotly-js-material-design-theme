import defaultsDeep from 'lodash.defaultsdeep'

export const carpet = configuration => defaultsDeep(configuration, {
  aaxis: {
    color: '#4285F4'
  },

  baxis: {
    color: '#4285F4'
  }
})
