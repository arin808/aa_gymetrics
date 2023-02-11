import axios from "axios";

//Function to process employee login
const employeeLogin = async (empEmail) => {
  //Base url for api call
  const baseUrl = process.env.VUE_APP_API_URL;
  //Actual api call for employee query
  const response = await axios.get(`${baseUrl}/employees/${empEmail}`);
  return response.data;
};

export default employeeLogin;
