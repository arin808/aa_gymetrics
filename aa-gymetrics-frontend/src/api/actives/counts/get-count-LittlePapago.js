import axios from "axios";

//Export function to get active count for Little Papago
const getCountLittlePapago = async () => {
  //baseURL use localhost from env variable
  const baseUrl = process.env.VUE_APP_API_URL;
  //Axios call to get count of little papago
  const response = await axios.get(`${baseUrl}/actives/count/Little-Papago`);
  return response.data;
};

export default getCountLittlePapago;
