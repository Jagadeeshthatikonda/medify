import axios from "axios";

export const BACKEND_END_POINT = "https://meddata-backend.onrender.com";


export const getListOfStates = async () => {
  try {
    const response = await axios.get(`${BACKEND_END_POINT}states`);
    return response.data;
  } catch (error) {
    if (error.request) {
      console.log("Request made but no response is received from the server.");
    } else {
      console.log("Error occured while setting up the request");
    }
    return null;
  }
}

export const getCitiesFromState = async (selectedState) => {
  try {
    const response = await axios.get(
      `https://meddata-backend.onrender.com/cities/${selectedState}`
    );
    return response.data;
  } catch (error) {
    if (error.request) {
      console.log("Request made but no response is received from the server.");
    } else {
      console.log("Error occured while setting up the request");
    }
    return null;
  }
}

export const getMedicalCentersFromStateAndCity = async (selectedState, selectedCity) => {
  try {
    const response = await axios.get(
      `https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`
    );
    return response.data;
  } catch (error) {
    if (error.request) {
      console.log("Request made but no response is received from the server.");
    } else {
      console.log("Error occured while setting up the request");
    }
    return null;
  }
}