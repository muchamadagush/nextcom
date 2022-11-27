import Fetcher from 'services/Fetcher'
import { AxiosInstance } from 'axios'
import { BASE_API_URL } from 'constant'

interface ILogin {
  username: string
  password: string
}

class BaseApiCall {
  public api: AxiosInstance

  constructor() {
    this.api = Fetcher.createAuthAxios(
      BASE_API_URL,
      'token',
    )
  }

  login(data: ILogin) {
    return this.api.post(`/auth/login`, data)
  }
}

const ApiCall = new BaseApiCall()

export default ApiCall
