import defaultsDeep from 'lodash.defaultsdeep'

export const sankey = configuration => defaultsDeep(configuration, {
  link: {
    color: 'rgba(171, 71, 188, 0.3)'
  },

  node: {
    color: '#4285F4',
    line: {
      width: 0
    },

    thickness: 10
  },

  textfont: {
    color: '#757575',
    size: 12
  }
})
