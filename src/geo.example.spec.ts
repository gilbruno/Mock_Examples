import axios from "axios";
import { fetchDataGeo } from "./geo.example";
jest.mock("axios");

it("should return a successful response if the GET request was successful", async () => {
  const mockResponse = {
    data: {
      results: [{ country: "USA" }],
    },
  };

  axios.get = jest.fn().mockResolvedValue(mockResponse);

  const peopleData = await fetchDataGeo();

  expect(mockResponse.data).toEqual(peopleData);
});
