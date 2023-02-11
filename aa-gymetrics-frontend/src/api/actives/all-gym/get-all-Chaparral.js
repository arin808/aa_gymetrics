import axios from "axios";

//Export method to get all active students in a gym
const getAllChaparral = async () => {
  //Base api url from env variable
  const baseUrl = process.env.VUE_APP_API_URL;
  //Axios call to get actives from Chaparral
  const response = await axios.get(`${baseUrl}/actives/Chaparral`);
  return response.data;
};

export default getAllChaparral;
