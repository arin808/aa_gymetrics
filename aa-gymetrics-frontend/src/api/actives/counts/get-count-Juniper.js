import axios from "axios";

//Export function to get active count for Juniper
const getCountJuniper = async () => {
  //baseURL use localhost from env variable
  const baseUrl = process.env.VUE_APP_API_URL;
  //Axios get call to express application to get Juniper count
  const response = await axios.get(`${baseUrl}/actives/count/Juniper`);

  //Production api call
  //const response = await axios.get('/actives/count/Juniper');

  return response.data;
};

export default getCountJuniper;
