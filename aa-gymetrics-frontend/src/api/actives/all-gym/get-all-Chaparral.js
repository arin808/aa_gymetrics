import axios from "axios";

//Export method to get all active students in a gym
const getAllChaparral = async () => {
  //Base api url from env variable
  const baseUrl = process.env.VUE_APP_API_URL;
  //Axios uses express app's mongoose built-ins to
  //query for all students in the Chaparral gym
  const response = await axios.get(`${baseUrl}/actives/Chaparral`);
  
    //Production version of api call
  //const response = await axios.get('actives/Chaparral');
  return response.data;
};

export default getAllChaparral;
