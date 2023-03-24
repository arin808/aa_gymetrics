import axios from "axios";

//Export method to get all actives in LPC
const getAllLPC = async () => {
  //Base api url from env variable
  const baseUrl = process.env.VUE_APP_API_URL;
  //Axios uses express app's mongoose built-ins to
  //query for all students in the LPC gym
  const response = await axios.get(`${baseUrl}/actives/LPC`);

    //Production version of api call
  //const response = await axios.get('actives/LPC');
  return response.data;
};

export default getAllLPC;
