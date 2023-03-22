import axios from "axios";

//Export method to get all actives in Verde RIver
const getAllVerdeRiver = async () => {
  //Base api url from env variable
  const baseUrl = process.env.VUE_APP_API_URL;
  //Axios uses express app's mongoose built-ins to
  //query for all students in the Verde River gym
  const response = await axios.get(`${baseUrl}/actives/Verde-River`);
  return response.data;
};

export default getAllVerdeRiver;
