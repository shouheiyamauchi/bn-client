import developmentConfig from './development'

export interface Config {
  API: string
}

const selectEnvironment = (environment: string) => {
  switch (environment) {
    case 'development':
      return developmentConfig
    default:
      return developmentConfig
  }
}

export default selectEnvironment(process.env.NODE_ENV)
