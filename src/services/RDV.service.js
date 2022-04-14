import Axios from "axios";

let baseUrl = "http://localhost:5000/api/appoint" ;

export const updateRDV = async (appointId,appoint) => {
  try {
    const result = await Axios.put(
      baseUrl + `/update-appoint/${appointId}`,
      appoint
    )
    return result.data;

  } catch (error) {
    return false;
  }
} 
