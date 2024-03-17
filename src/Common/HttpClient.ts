import axios from 'axios'

export default class HttpClient {
  constructor(
    private baseUrl: string
  ) {

  }

  public async get(path: string, config?: any): Promise<any> {
    return axios.get(this.getUrl(path), config)
  }

  public async post(path: string, payload?: any): Promise<void> {
    return axios.post(this.getUrl(path), payload)
  }

  public async delete(path: string): Promise<void> {
    return axios.delete(this.getUrl(path))
  }

  private getUrl(path: string): string {
    return `${this.baseUrl}${path}`
  }
}
