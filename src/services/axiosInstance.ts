import axios, { Method, AxiosHeaders } from "axios";
import { store } from "../store";
import { APIS, apisTypes } from "./apiUrl";
import { useTranslation } from "react-i18next";

const { i18n } = useTranslation();
const appLang = i18n.language;

const BASE_URL = "https://hosting-name.com/api";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  headers: {
    "Accept-Language": appLang,
  },
});

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (error) => {
    // Code here...
    const errData = error?.response?.data;
    const errors = errData?.errors?.join(", ");
    const err =
      errData?.error ||
      errors ||
      errData?.message ||
      "Something went wrong, please try again later";
    console.log("interceptor error ==>> ", err);
    if (error?.toString()?.includes("Network Error")) {
      console.log("network_error");
    }

    return Promise.reject(error);
  }
);

const Axios = async ({
  method,
  path,
  data,
  params,
  pathParams = "",
  header,
  isFormDate = true,
}: {
  method: Method;
  path: keyof apisTypes;
  data?: any;
  params?: any;
  pathParams?: string;
  header?: AxiosHeaders;
  isFormDate?: boolean;
}) => {
  const accessToken = store.getState().auth?.userData?.data?.token;
  console.log("TOKEN : ", accessToken);

  const authHeder = accessToken
    ? {
        Authorization: `Bearer ${accessToken}`,
      }
    : {};

  const response = await axiosInstance({
    method: method,
    url: APIS[path] + pathParams,
    data: data,
    params: params,
    headers: isFormDate
      ? {
          "Content-Type": "multipart/form-data",
          ...authHeder,
          ...header,
        }
      : {
          "Content-Type": "application/json",
          ...authHeder,
          ...header,
        },
  });
  return response;
};

export default Axios;
