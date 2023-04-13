import { vehiclesActions } from "./vehicles-slice";

const fetchVehicles = () => {
  return async (dispatch) => {
    const fetchedData = async () => {
      const response = await fetch(
        "https://findfalcone.geektrust.com/vehicles"
      );

      if (!response.ok) {
        throw new Error("There was a glitch in loading vehicles");
      }
      const data = await response.json();
      console.log(data);
      return data;
    };
    try {
      let vehiclesData = await fetchedData();
      dispatch(vehiclesActions.setVehicles({ vehicles: vehiclesData || [] }));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export default fetchVehicles;
