import axios from "axios";

//Function to process employee login
const getEmployee = async (empEmail) => {
  //Base url for api call
  const baseUrl = process.env.VUE_APP_API_URL;
  //Axios call to express app to get employee data based off of email
  const response = await axios.get(`${baseUrl}/employees/${empEmail}`);

  //Production api call
  //const response = await axios.get(`/employees/${empEmail}`);

  return response.data;
};

export default getEmployee;
