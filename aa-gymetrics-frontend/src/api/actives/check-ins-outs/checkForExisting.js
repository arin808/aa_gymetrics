import axios from "axios";

//Export function to check if a student is already checkd into a gym
const checkForExisting = async (studentID) => {
  //Base api url from env variable
  const baseUrl = process.env.VUE_APP_API_URL;
  //Axios get call to check if student exists in actives
  const response = await axios.get(`${baseUrl}/actives/existing/${studentID}`);
  return response.data;
};

export default checkForExisting;
