import axios from "axios";

//Export method to get all active students in a gym
const getAllAntelope = async () => {
  //Base api url from env variable
  const baseUrl = process.env.VUE_APP_API_URL;
  //Axios uses express app's mongoose built-ins to
  //query for all students in the Antelope gym
  const response = await axios.get(`${baseUrl}/actives/Antelope`);
  
  //Production version of api call
  //const response = await axios.get('actives/Antelope');
  return response.data;
};

export default getAllAntelope;
