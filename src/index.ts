//import axios from "axios";
import { fetchDataGeo } from "./geo.example";

/*
export async function fetchData(url: string): Promise<any> {
  const response = await axios.get(url);
  return response.data;
}
*/

(async function main() {
  const result = await fetchDataGeo();
  console.log(result);
})();
