import axios from "axios";

//Export method to get all actives in LPC
const getAllLPC = async () => {
  //Base api url from env variable
  const baseUrl = process.env.VUE_APP_API_URL;
  //Axios call to get actives in LPC
  const response = await axios.get(`${baseUrl}/actives/LPC`);
  return response.data;
};

export default getAllLPC;
