import axios from "axios";

//Export method to check in a student
const checkIn = async (student, gymLocation) => {
  //Base api url from env variable
  const baseUrl = process.env.VUE_APP_API_URL;
  //Create new date object for current time for student obj
  const newDate = new Date();
  //Format date to proper string for insertion (24 hr, 00:00)
  const dateString = newDate.toLocaleTimeString("en-us", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });

  //Axios post call to express app to insert new active student
  const response = await axios.post(`${baseUrl}/actives/checkIn`, {
    //Assign passed props to new Active student object props
    studentID: student.studentID,
    studentFirst: student.studentFirst,
    studentLast: student.studentLast,
    checkInTime: dateString,
    gymLocation: gymLocation,
  });

  //Production api call
  // const response = await axios.post('/actives/checkIn', {
  //   //Assign passed props to new Active student object props
  //   studentID: student.studentID,
  //   studentFirst: student.studentFirst,
  //   studentLast: student.studentLast,
  //   checkInTime: dateString,
  //   gymLocation: gymLocation,
  // });
  return response.data;
};

export default checkIn;
