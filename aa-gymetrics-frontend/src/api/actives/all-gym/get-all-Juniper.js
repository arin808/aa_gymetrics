import axios from "axios";

//Export method to get all actives from Juniper
const getAllJuniper = async () => {
  //Base api url from env variable
  const baseUrl = process.env.VUE_APP_API_URL;
  //Axios call to get all actives in Juniper
  const response = await axios.get(`${baseUrl}/actives/Juniper`);
  return response.data;
};

export default getAllJuniper;
