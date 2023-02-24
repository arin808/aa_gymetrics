![Logo](https://github.com/arin808/aa_gymetrics/blob/main/images/logo.png?raw=true)



# AA Gymetrics 

The purpose of this web application is to provide gym-goers with a means of knowing how crowded a gym is. With live metrics, this web application aims to provide information to regualar students that regularly go to the gym as a convenience.

Zipped code will require npm install for dependencies



## Authors

#### Arin Aihara
- [GitHub](https://github.com/arin808)
- [LinkedIn](https://www.linkedin.com/in/arin-aihara-247771208/)
## Table of Contents

- [Installation](#installation)
- [Acknowledgements and References](#ackowledgements-and-references )
- [Features](#features)
- [API Documentation](#api-documentation)
- [Diagrams](#diagrams)
- [Screenshots](#screenshots)


## Installation

1. Download the source code for both the back-end and front-end applications
2. Run 'npm install' to download node dependencies
3. Navigate to each app
- (front-end): cd aa-gymetrics 
- (back-end): cd aa-gymetrics-backend
4. Start apps 
- (front-end): npm run serve
- (back-end): npm run api
5. Navigate to localhost:8080 in Google Chrome
    
## Acknowledgements and References

 - [README Builder](https://readme.so)
 - [Dropdown](https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/vue/dropdown)
 - [DIY Modal](https://www.section.io/engineering-education/creating-a-modal-dialog-with-tailwind-css/)
 - Special thanks to Michael Duisenberg for the assistance in utilization of Mongoose.
## Features

- Live metrics for each gym
- Employee managed student check-in and check-out
-


## API Documentation

#### Get student by ID

```http
  GET /students/${studentID}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `studentID` | `number` | **Required**. Student ID# |

#### Get employee by email

```http
  GET /employees/${email}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. Email of employee to fetch |

#### Get all logins

```http
  GET /logins
```
| Description                       |
| :-------------------------------- |
| Gets all login entries |

#### POST a new login entry

```http
  POST /logins
```
| Body      | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `employee` | `employee model` | **Required**. Log model used for login entry |


#### Get all active students

```http
  GET /actives
```

| Description                |
| :------------------------- |
| Get all students that are actively checked into a gym |

#### Get the all actives in a gym

```http
  GET /actives/{gymLocation}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `gymLocation`      | `string` | **Required**. All actives in a gym |


#### Get the active count in a gym

```http
  GET /actives/count/{gymLocation}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `gymLocation`      | `string` | **Required**. Name of gym to get the count of |


#### Get a checked in student

```http
  GET /actives/existing/{studentID}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `studentID`      | `number` | **Required**. ID of active student being checked |

#### POST a new active student to a gym

```http
  POST /logins
```
| Body      | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `active` | `active model` | **Required**. Active student model used for insertion |

#### DELETE an active student 

```http
  DELETE /actives/checkOut/{studentID}
```
| Parameter      | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `studentID` | `number` | **Required**. StudentID of student to be checked out |
## Diagrams

### ER 
![ER](https://github.com/arin808/aa_gymetrics/blob/main/images/MongoDB%20ER.jpg?raw=true)
### Physical 
![Physical](https://github.com/arin808/aa_gymetrics/blob/main/images/Physical%20Diagram.jpg?raw=true)
### Logical 
![Logical](https://github.com/arin808/aa_gymetrics/blob/main/images/Logical%20Diagram.jpg?raw=true)
## Screenshots

### Home/Landing Page
![Home](https://github.com/arin808/aa_gymetrics/blob/main/images/Home.jpg?raw=true)
### About Page
![About](https://github.com/arin808/aa_gymetrics/blob/main/images/About.jpg?raw=true)
### Login Page
![Login](https://github.com/arin808/aa_gymetrics/blob/main/images/Login.jpg?raw=true)
### Employee Gym Page
![Employee](https://github.com/arin808/aa_gymetrics/blob/main/images/Employee.jpg?raw=true)
