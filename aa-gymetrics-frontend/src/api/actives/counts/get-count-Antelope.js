import axios from "axios";

//Export function to get active count for Antelope
const getCountAntelope = async () => {
  //baseURL use localhost from env variable
  const baseUrl = process.env.VUE_APP_API_URL;
  //Axios call to express application get count of Antelope
  const response = await axios.get(`${baseUrl}/actives/count/Antelope`);
  return response.data;
};

export default getCountAntelope;
