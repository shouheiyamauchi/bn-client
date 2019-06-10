export interface AccountContextState {
  logout: () => void
  setUserToken: (userToken: string) => void
  userToken: string
}
