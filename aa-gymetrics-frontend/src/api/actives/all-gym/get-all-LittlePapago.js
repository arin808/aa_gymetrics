import axios from "axios";

//Export method to get all actives from Little Papago
const getAllLittlePapago = async () => {
  //Base api url from env variable
  const baseUrl = process.env.VUE_APP_API_URL;
  //Axios uses express app's mongoose built-ins to
  //query for all students in the Little Papago gym
  const response = await axios.get(`${baseUrl}/actives/Little-Papago`);

  //Production version of api call
  //const response = await axios.get('actives/Little-Papago');
  return response.data;
};

export default getAllLittlePapago;
