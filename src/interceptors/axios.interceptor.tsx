import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { getValidationError } from "../utilities";
import { SnackbarUtilities } from '../utilities/snackbar-manager';

export const AxiosInterceptor = () => {
  const updateHeader = (request: any) => {
    const token = "123456789";
    const newHeaders = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    request.headers = newHeaders;
    return request;
  };

  axios.interceptors.request.use((request) => {
    console.log("Starting Request", request);

    // Si la request no necesita el header del token, se retorna la request sin modificar
    if (request.url?.includes("assets")) return request;

    // Actualizar el header de la request
    return updateHeader(request);
  });

  // return response;
  axios.interceptors.response.use(
    // si no hay error en la response, se retorna la response
    (response) => {
      console.log("Response:", response);
      return response;
    },
    // Podemos manejar los errores de la response
    (error) => {
      // console.log("Error:", getValidationError(error.code));
      SnackbarUtilities.error(getValidationError(error.code));
      return Promise.reject(error); // elimina la response y retorna el error
    }
  );
};
