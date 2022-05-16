import camelize from "camelize";

import { locations } from "./locations.mock";

export const locationRequest = (searchTherm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTherm];
    if (!locationMock) {
      reject("not find");
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result) => {
  const formatedResponse = camelize(result);
  const { geometry = {} } = formatedResponse.results[0];
  const { lat, lng } = geometry.location;
  return { lat, lng };
};
