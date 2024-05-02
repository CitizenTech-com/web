import { useContext, useState } from "react";
import { AppContext } from "../contexts/appcontext";
import {
  API_BASE_URL,
  DEFAULT_GET_API_HEADER,
  DEFAULT_POST_API_HEADER,
} from "../constants/api-constants";
interface APIState<T> {
  data: T;
  /**
   * API Get method.
   * @param url: Url of the endpoint starting with '/'
   * @returns: Requested object or array of objects
   */
  getData: (url: string) => Promise<T>;
  /**
   * API Post Method.
   * @param url: Url of the endpoint starting with '/'
   * @param body: Object to be passed as parameter for the Post API Method.
   * @returns: Added object with additional details like id, etc...
   */
  postData: (url: string, body: unknown) => Promise<T>;
  /**
   * API Put Method.
   * @param url: Url of the endpoint starting with '/'
   * @param body: Object to be passed as parameter for the Put API Method.
   * @returns: Updated record with additional details like id, etc...
   */
  putData: (url: string, body: unknown) => Promise<T>;
  /**
   * API Delete Method.
   * @param url: Url of the endpoint starting with '/' and ending with id.
   *
   * For example: /api/v1/users/1
   * @returns: Deleted record
   */
  deleteData: (url: string) => Promise<T>;
}

const useApi = <T,>(): APIState<T> => {
  const [data, setData] = useState<T>();
  const { appState } = useContext(AppContext);

  /**
   * API Get method.
   * @param url: Url of the endpoint starting with '/'
   * @returns: Requested object or array of objects
   */
  const getData = async (url: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}${url}`, {
        method: "GET",
        headers: DEFAULT_GET_API_HEADER(appState.accessToken),
      });
      const data = await response.json();
      setData(data);

      return Promise.resolve(data);
    } catch (error) {
      console.error(error);
      Promise.reject(error);
    }
  };

  /**
   * API Post Method.
   * @param url: Url of the endpoint starting with '/'
   * @param body: Object to be passed as parameter for the Post API Method.
   * @returns: Added record with additional details like id, etc...
   */
  const postData = async (url: string, body: unknown) => {
    try {
      const response = await fetch(`${API_BASE_URL}${url}`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: DEFAULT_POST_API_HEADER(appState.accessToken),
      });
      const data = await response.json();
      setData(data);

      return Promise.resolve(data);
    } catch (error) {
      console.error(error);
      Promise.reject(error);
    }
  };

  /**
   * API Put Method.
   * @param url: Url of the endpoint starting with '/'
   * @param body: Object to be passed as parameter for the Put API Method.
   * @returns: Updated record with additional details like id, etc...
   */
  const putData = async (url: string, body: unknown) => {
    try {
      const response = await fetch(`${API_BASE_URL}${url}`, {
        method: "PUT",
        body: JSON.stringify(body),
        headers: DEFAULT_POST_API_HEADER(appState.accessToken),
      });
      const data = await response.json();
      setData(data);

      return Promise.resolve(data);
    } catch (error) {
      console.error(error);
      Promise.reject(error);
    }
  };

  /**
   * API Delete Method.
   * @param url: Url of the endpoint starting with '/' and ending with id.
   *
   * For example: /api/v1/users/1
   * @returns: Deleted record
   */
  const deleteData = async (url: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}${url}`, {
        method: "DELETE",
        headers: DEFAULT_POST_API_HEADER(appState.accessToken),
      });
      const data = await response.json();
      setData(data);

      return Promise.resolve(data);
    } catch (error) {
      console.error(error);
      Promise.reject(error);
    }
  };

  return { data, getData, postData, putData, deleteData };
};

export default useApi;
