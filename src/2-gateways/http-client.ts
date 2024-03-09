/** TEST NOTE
 * For some reason that I couldn't understand,
 * An error importing axios happens when I try to test gateway-related files
 *
 * So this client is manual, for the sake of time but I wanted to use axios instead because it's super simple to configure it,
 * and it has error treatments out ouf the box
 */

const backend = process.env.REACT_APP_APP_API_BASE_URL;

type ResponseWrapper<T> = {
  data?: T;
  error?: Error;
};

type Treatment<T = any> = (
  response: Response,
  endpoint?: string,
  type?: string,
) => Promise<ResponseWrapper<T>>;

const TREATMENTS: Record<string, Treatment> = {
  'application/json': async <T>(response: Response) => {
    const data = (await response.json()) as T;

    return { data };
  },
  'application/pdf': async (response: Response, endpoint?: string) => {
    const blob = await response.blob();

    const pdfFile = new File([blob], endpoint!, {
      type: 'application/pdf',
    });

    return { data: pdfFile };
  },
  unknown: async (_: Response, __?: string, type?: string) => {
    const error = new Error(`Unsuppported content type: ${type}`);

    return { error };
  },
};

type Parsings = keyof typeof TREATMENTS;

const fetchFn =
  (method: 'GET' | 'POST' | 'DELETE') =>
  async <T>(url: string): Promise<ResponseWrapper<T>> => {
    try {
      const endpoint = `${backend}/${url}`;

      const response = await fetch(endpoint, {
        method,
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }

      const type = response.headers.get('content-type') as Parsings;

      const treatment: Treatment<T> = TREATMENTS[type] ?? TREATMENTS.unknown;

      return treatment(response, endpoint, type);
    } catch (error) {
      return { error: error as Error };
    }
  };

const instance = {
  get: fetchFn('GET'),
  post: fetchFn('POST'),
  delete: fetchFn('DELETE'),
};

export default instance;
