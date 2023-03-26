![Logo](https://github.com/arin808/aa_gymetrics/blob/main/images/Logo.jpg?raw=true)



# AA Gymetrics 

AA Gymetrics came about since I started to go to the gym a lot more regularly and noticed an issue once school started up again. Finding a time to go to the gym became a chore, since I wanted to avoid the heavy crowds in the gym. If only there was a way of seeing how crowded a gym is at any given time... Thus AA Gymetrics was born. 

In a culture and time where fitness and exercise is becoming more and more important for mental and physical wellness, the experience at the gym is paramount to staying consistent. By providing live metrics of each gym on campus, people would be able to avoid the heavy crowds and choose which gym they'd like to go to based on the gym's population density and avoid a potentially less than ideal gym experience. 



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
2. Navigate to each app
- (front-end): cd aa-gymetrics 
- (back-end): cd aa-gymetrics-backend
3. Run 'npm install' to download node dependencies (in both apps)

## Acknowledgements and References

 - [README Builder](https://readme.so)
 - [Dropdown](https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/vue/dropdown)
 - [DIY Modal](https://www.section.io/engineering-education/creating-a-modal-dialog-with-tailwind-css/)
 - [Udemy Vue Course](https://www.udemy.com/course/vue-masterclass/)
 - [Font Awesome Icons](https://fontawesome.com/icons)
## Features

- Live metrics for each gym
- Secured login for employees
- Employee managed student check-in and check-out
- Student check-ins and check-outs with barcode scanner compatibility


## Functional and Non-Functional Requirements (NFRs)
(for a full list of user stories and requirements, see [Requirements](https://github.com/arin808/aa_gymetrics/blob/main/documents/AA%20Gymetrics%20User%20Stories.xlsx))
### Functional 
- One page with a table of all gym's metrics (headcount and density %)
- Employee login with data validation
- Employee logout
- About page outlining mission and vision
- Employee-managed pages for each gym to manage active students 
- Manual check-ins and check-outs for students as they enter and leave gyms
- Automatic check-ins and check-outs using barcode scanner technology
- Modal popups for confirmation and error notifications

### NFRs
- Logging to record employee logins for accountability and accuracy
- Cloud hosted on Heroku
- UptimeRobot monitoring
## Technologies Utilized

AA Gymetrics is created using the MEVN (MongoDB, Express, Vue, NodeJS) stack. The frontend application is built using the VueJS framework. This is paired with an Express application that functions as a REST API, allowing the Vue application to communicate with MongoDB. 

The Vue application also uses Tailwind and Axios to support easy styling and support for class attributes and a connection to the Express application, respectively. The Express application utilizes Mongoose to connect to MongoDB and allows for easy usage of Mongo's queries, making returns much more precise and intuitive.

The decision to use Vue is a result of the development team's desire to learn a new technology and improve JavaScript skills, as well as provide an easy to navigate application for users. The Vue framework is entirely new to the development team, and has been challenging but the framework has been rewarding to learn and work with.


- NetumScan USB 1D Barcode Scanner
- Vue.js v3 
- Axios v1.2.0
- Tailwind CSS v3.2.4
- NodeJS v18.13.0
- Express v4.18.2
- CORS v2.8.5
- Dotenv v16.0.3
- Mongoose v6.7.5
- MongoDB v6.0
- MongoDB Compass v1.36.1
- Postman v10.1.1

## Cloud Hosting

#### Heroku Hosted
The application is cloud hosted on the Heroku platform, allowing for access from anywhere with an internet connection. Heroku offered a quick automatic deployment from a GitHub repository.

#### DevOps
Given the nature of AA Gymetrics, there isn't much logging necessary due to a lack of transactional actions or navigations. Manual logging has been implemented to provide insight into employee logins. UptimeRobot is also being utilized to monitor the downtime of the application as well.
## Risks/Challenges
#### New framework
This project didn't come without its fair share of challenges and difficulties. First off, Vue is a completely new framework and technology to the development team, meaning a considerable learning curve had to be overcome with the help of online courses. 
#### Not fluent in JavaScript
Prior to AA Gymetrics, the development team had little experience with JavaScript. With practice during the process of familiarizing themselves with the Vue framework, this obstacle was maneuvered well enough to copmlete the project.
#### Backend oriented programmer
The development is primarily geared towards backend development, so working on an application from top to bottom presented issues during styling and site presentation. With MUCH trial and effort, the development team found a satisfying end result with the frontend application's presentation.
#### Originally intended for mobile responsiveness and had to change plans
This issue has unfortunately not been resolved. The original intention was for this site to be mobile friendly, but at this time the difficulty of implementing mobile responsiveness has proven to be out of the development team's reach.
## API Documentation

### Student Routes

#### GET student by ID

```http
  GET /students/${studentID}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `studentID` | `number` | **Required**. Student ID# |

### Employee Routes

#### GET employee by email

```http
  GET /employees/${email}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. Email of employee to fetch |

### Active Routes (Active Students)

#### GET all active students

```http
  GET /actives
```

| Description                |
| :------------------------- |
| Get all students that are actively checked into a gym |

#### GET the all actives students in a specific gym

```http
  GET /actives/{gymLocation}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `gymLocation`      | `string` | **Required**. All actives in a gym |


#### GET the count of active students in a gym

```http
  GET /actives/count/{gymLocation}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `gymLocation`      | `string` | **Required**. Name of gym to get the count of |


#### GET a checked in student

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

### Login Routes

#### GET all logins

```http
  GET /logins
```
| Description                       |
| :-------------------------------- |
| GETs all login entries |

#### POST a new login entry

```http
  POST /logins
```
| Body      | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `employee` | `employee model` | **Required**. Log model used for login entry |
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