import axios from "axios";

//Export function to get active count for LPC
const getCountLPC = async () => {
  //Base api url from env variable
  const baseUrl = process.env.VUE_APP_API_URL;
  //Axios call to express application to get LPC count
  const response = await axios.get(`${baseUrl}/actives/count/LPC`);
  return response.data;
};

export default getCountLPC;
