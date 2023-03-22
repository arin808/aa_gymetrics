import axios from "axios";

//Export method for checking student out
const checkOut = async (studentID) => {
  //Base api url from env variable
  const baseUrl = process.env.VUE_APP_API_URL;
  //Axios delete call from express route
  const response = await axios.delete(
    `${baseUrl}/actives/checkOut/${studentID}`
  );
  return response.data;
};

export default checkOut;
