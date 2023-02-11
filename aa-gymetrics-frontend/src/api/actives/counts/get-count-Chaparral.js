import axios from "axios";

//Export function to get active count for Chaparral
const getCountChaparral = async () => {
  //baseURL use localhost from env variable
  const baseUrl = process.env.VUE_APP_API_URL;
  //Axios call to get Chaparral count
  const response = await axios.get(`${baseUrl}/actives/count/Chaparral`);
  return response.data;
};

export default getCountChaparral;
