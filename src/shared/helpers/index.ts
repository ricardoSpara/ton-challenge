import https from 'https';
import axios, { AxiosInstance } from "axios";
import { v4 as uuidV4 } from "uuid";

export const getClientApi = (uri: string): AxiosInstance => {
  return axios.create({
    baseURL: uri,
    httpsAgent: new https.Agent({
      rejectUnauthorized: false
    })
  });
};

export const generateId = (): string => {
  return uuidV4();
};
