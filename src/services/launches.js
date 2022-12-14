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

export const getLaunchById = async (id) => {
  try {
    const response = await fetch(API_URL + "/launches/" + id);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

/* Petición fetch de tipo GET. Librerias para fetching:
-Axios
-Fetching es la librería nativa */

/* Formas de declarar un componente: Método función o método función flecha*/
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
