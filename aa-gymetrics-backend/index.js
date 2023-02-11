//Dependencies and requirements to setup DB
const { mongoConnect } = require("./config/dbconfig");
const PORT = process.env.PORT;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

//Route requirements
const StudentRoutes = require("./routes/api/StudentsRoutes");
const EmployeeRoutes = require("./routes/api/EmployeeRoutes");
const LoginRoutes = require("./routes/api/LoginsRoutes");
const ActiveRoutes = require("./routes/api/ActiveRoutes");

//Initiate app connection to MongoDB
async function startServer() {
  await mongoConnect();

  //Utilize parser for requests
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cors());

  //API route connections
  app.use("/students", StudentRoutes);
  app.use("/employees", EmployeeRoutes);
  app.use("/logins", LoginRoutes);
  app.use("/actives", ActiveRoutes);

  //Listen for active app on Port 3000
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
}

//Start the app
startServer();
