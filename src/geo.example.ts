import { GeoAxiosResponse } from "./interfaces/geoAxiosResponse";
import axios, { AxiosResponse } from "axios";

export const fetchDataGeo = async (): Promise<GeoAxiosResponse> => {
  const response: AxiosResponse<GeoAxiosResponse> = await axios.get(
    "http://ip-api.com/json/",
  );

  return response.data;
};
