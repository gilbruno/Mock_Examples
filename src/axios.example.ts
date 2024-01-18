import { PeopleAxiosResponse } from "./interfaces/peopleAxiosResponse";
import axios, { AxiosResponse } from "axios";

export const fetchDataStarWars = async (): Promise<PeopleAxiosResponse> => {
  const response: AxiosResponse<PeopleAxiosResponse> = await axios.get(
    "https://swapi.dev/api/people",
  );

  //const result = await fetchData("http://ip-api.com/json/24.48.0.1");

  return response.data;
};
