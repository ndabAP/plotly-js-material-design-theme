import defaultsDeep from 'lodash.defaultsdeep'

export const violin = configuration => defaultsDeep(configuration, {
  line: {
    width: 0
  }
})
