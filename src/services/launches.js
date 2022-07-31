const API_URL = "https://api.spacexdata.com/v5";

export const getAllLaunches = async () => {
  try {
    const response = await fetch(API_URL + "/launches");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getLaunchByFlightNumber = async (flightNumber) => {
    try {
      const response = await fetch(API_URL + "/launches/" + flightNumber);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };

/* Petición fetch de tipo GET. Librerias para fetching:
-Axios
-Fetching es la librería nativa */

// export async function getAllLaunches() {
//   const response = await fetch(API_URL + "/launches");
//   const data = await response.json();
//   return data;
// }

// export const getAllLaunches = async () => {
//   const response = await fetch(API_URL + "/launches");
//   const data = await response.json();
//   return data;
// };
