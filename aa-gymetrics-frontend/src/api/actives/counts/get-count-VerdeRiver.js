import axios from "axios";

//Export function to get active count for Verde River
const getCountVerdeRiver = async () => {
  //baseURL use localhost from env variable
  const baseUrl = process.env.VUE_APP_API_URL;
  //Axios call to express application to get all from Verde River
  const response = await axios.get(`${baseUrl}/actives/count/Verde-River`);
  return response.data;
};

export default getCountVerdeRiver;
