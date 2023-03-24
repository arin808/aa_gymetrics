import axios from "axios";

//Export function to check if a student is already checked into a gym
const checkForExisting = async (studentID) => {
  //Base api url from env variable
  const baseUrl = process.env.VUE_APP_API_URL;
  //Axios uses express app's mongoose built-in to
  //query for a student by their ID
  const response = await axios.get(`${baseUrl}/actives/existing/${studentID}`);

  //Production api call
  //const response = await axios.get(`/actives/existing/${studentID}`);


  return response.data;
};

export default checkForExisting;
