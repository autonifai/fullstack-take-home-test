/** TEST NOTE
 * For some reason that I couldn't understand,
 * An error importing axios happens when I try to test gateway-related files
 *
 * So this client is manual, for the sake of time but I wanted to use axios instead because it's super simple to configure it,
 * and it has error treatments out ouf the box
 */

const backend = process.env.REACT_APP_APP_API_BASE_URL;

const instance = {
  async get<T>(url: string): Promise<{
    data: T;
  }> {
    const response = await fetch(`${backend}/${url}`);
    const data = (await response.json()) as T;

    return { data };
  },
  async post<T>(url: string): Promise<{
    data: T;
  }> {
    const response = await fetch(`${backend}/${url}`, {
      method: 'POST',
    });
    const data = (await response.json()) as T;
    return { data };
  },
};

export default instance;
