import axios from 'axios'

export default class HttpClient {
  constructor(
    private baseUrl: string
  ) {

  }

  async get(path: string): Promise<any> {
    return axios.get(this.getUrl(path))
  }

  private getUrl(path: string): string {
    return `${this.baseUrl}${path}`
  }
}
