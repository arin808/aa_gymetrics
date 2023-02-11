import axios from "axios";

//Export method to get all actives from Little Papago
const getAllLittlePapago = async () => {
  //Base api url from env variable
  const baseUrl = process.env.VUE_APP_API_URL;
  //Axios call to get all actives in Little Papago
  const response = await axios.get(`${baseUrl}/actives/Little-Papago`);
  return response.data;
};

export default getAllLittlePapago;
