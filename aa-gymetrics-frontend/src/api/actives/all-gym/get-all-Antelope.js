import axios from "axios";

//Export method to get all active students in a gym
const getAllAntelope = async () => {
  //Base api url from env variable
  const baseUrl = process.env.VUE_APP_API_URL;
  //Axios call to get all students in Antelope
  const response = await axios.get(`${baseUrl}/actives/Antelope`);
  return response.data;
};

export default getAllAntelope;
