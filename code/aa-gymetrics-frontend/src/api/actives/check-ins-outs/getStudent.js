import axios from "axios";

//Export function for getting one student
const getStudent = async (studentID) => {
  //Base api url from env variable
  const baseUrl = process.env.VUE_APP_API_URL;
  //Axios call to express application get a student from ID
  const response = await axios.get(`${baseUrl}/students/${studentID}`);

  //Production api call
  //const response = await axios.get(`/students/${studentID}`);
  return response.data;
};

export default getStudent;
