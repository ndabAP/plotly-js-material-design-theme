import defaultsDeep from 'lodash.defaultsdeep'

export const scatterpolar = configuration => defaultsDeep(configuration, {
  line: {
    width: 2
  }
})
