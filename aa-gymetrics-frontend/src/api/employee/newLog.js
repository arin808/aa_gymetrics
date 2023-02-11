import axios from "axios";

//Export method to write a new login log
const newLog = async (employee, gymLocation) => {
  //Base api url from env variable
  const baseUrl = process.env.VUE_APP_API_URL;
  //Create new date object for current time for log obj
  const newDate = new Date().toString();

  //Axios post call
  const response = await axios.post(`${baseUrl}/logins`, {
    //Assign passed props to new employee login object
    empID: employee.empID,
    empEmail: employee.empEmail,
    gymLocation: gymLocation,
    timestamp: newDate,
  });

  return response.data;
};

export default newLog;
