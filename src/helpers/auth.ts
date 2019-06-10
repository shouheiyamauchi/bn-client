import { USER_TOKEN_KEY } from '~src/contexts/Account/Account'

export const getAuthHeader = () => `jwt ${localStorage.getItem(USER_TOKEN_KEY)}`
