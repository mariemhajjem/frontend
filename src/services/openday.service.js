import Axios from "axios";

let baseUrl = "http://localhost:5000/api/openday";

export const AddOpenDay = async (od) => {
  const result = await Axios.post(baseUrl + "/add", od);

  return result.data.newOpenDay;
};


export const fetchCenterById = async (id) => {
  const result = await Axios.get(baseUrl  + id);

  return result.data.openDay;
};


export const updateOpenDay = async (od) => {
  const result = await Axios.put(baseUrl + "/update", od);
  return result.data.updatedOpenDay;
};


export const fetchOpenDay = async () => {

  const result = await Axios.get(baseUrl + "/all");
  return result.data.openDays;
};
