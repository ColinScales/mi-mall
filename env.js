let baseUrl = ''

switch (process.env.NODE_ENV) {
  case 'development':
    baseUrl = 'sdsd'
    break
  case 'production':
    baseUrl = 'sdsd'
    break
}

export default {
  baseUrl
}