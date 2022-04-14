import Axios from "axios"

let baseUrl = "http://localhost:5000/api/pharmacies" ;

export const addPharmacy = async (pharmacy) => {
  console.log(pharmacy)
  const result = await Axios.post(
    baseUrl + "/add",
    pharmacy
  )
  return result.data.newPharmacy
}

export const updatePharmacy = async (pharmacy) => {
  const result = await Axios.put(
    baseUrl + "/update" ,
    pharmacy
  )
  return result.data.updatedPharmacy
}

export const deletePharmacy = async (name) => {
  const result = await Axios.delete(
    baseUrl + "/delete/" + name
  )
  return result.data
}

export const fetchPharmacyByName = async (name) => {
  const result = await Axios.get(
    baseUrl + "/name/" + name
  )
  return result.data.pharmacy
}

export const fetchPharmacies = async () => {
  // await delay(500)
  const result = await Axios.get(
    baseUrl + "/all"
  ) 
  return result.data.pharmacies
}
