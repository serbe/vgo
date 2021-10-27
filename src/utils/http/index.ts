import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
import { BASE_URL } from '../env';
import { deepMerge } from '/@/utils';

interface IHttpClientRequestParameters<T> {
  url: string;
  requiresToken: boolean;
  payload?: T;
  options?: AxiosRequestConfig;
}

interface IHttpClient {
  get<T>(parameters: IHttpClientRequestParameters<T>): Promise<T>;
  post<T>(parameters: IHttpClientRequestParameters<T>): Promise<T>;
}

class HttpClient implements IHttpClient {
  private axiosInstance: AxiosInstance;

  constructor(options: AxiosRequestConfig) {
    this.axiosInstance = axios.create(options);
  }

  private createAxios(config: AxiosRequestConfig): void {
    this.axiosInstance = axios.create(config);
  }

  getAxios(): AxiosInstance {
    return this.axiosInstance;
  }

  configAxios(config: AxiosRequestConfig) {
    if (!this.axiosInstance) {
      return;
    }
    this.createAxios(config);
  }

  setHeader(headers: any): void {
    if (!this.axiosInstance) {
      return;
    }
    Object.assign(this.axiosInstance.defaults.headers, headers);
  }

  get<T>(parameters: IHttpClientRequestParameters<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const { url, options, requiresToken } = parameters;

      // // if API endpoint requires a token, we'll need to add a way to add this.
      // if (requiresToken) {
      //   const token = this.getToken();
      //   options.headers.RequestVerificationToken = token;
      // }

      axios
        .get(url, options)
        .then((response: any) => {
          resolve(response.data as T);
        })
        .catch((response: any) => {
          reject(response);
        });
    });
  }

  post<T>(parameters: IHttpClientRequestParameters<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const { url, payload, options, requiresToken } = parameters;

      // // if API endpoint requires a token, we'll need to add a way to add this.
      // if (requiresToken) {
      //   const token = this.getToken();
      //   options.headers.RequestVerificationToken = token;
      // }

      axios
        .post(url, payload, options)
        .then((response: any) => {
          resolve(response.data as T);
        })
        .catch((response: any) => {
          reject(response);
        });
    });
  }
}

function createAxios(opt?: Partial<AxiosRequestConfig>) {
  return new HttpClient(
    deepMerge(
      {
        authenticationScheme: '',
        timeout: 10 * 1000,
        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
        requestOptions: {
          joinPrefix: true,
          isReturnNativeResponse: false,
          isTransformResponse: true,
          joinParamsToUrl: false,
          formatDate: true,
          errorMessageMode: 'message',
          apiUrl: BASE_URL,
          joinTime: true,
          ignoreCancelToken: true,
          withToken: true,
        },
      },
      opt || {},
    ),
  );
}

export const httpClient = createAxios();
