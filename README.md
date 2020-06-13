[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=akashsuper2000_faculty-dashboard&metric=alert_status)](https://sonarcloud.io/dashboard?id=akashsuper2000_faculty-dashboard)

[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/akashsuper2000/faculty-dashboard) 

# Faculty Dashboard

TL;DR:
One place for all things "faculty"!

## Description

<hr/>

### Introduction

This application is built for the faculties of an institution. The web based
application enables faculties across different disciplines to view and edit their profile, view, modify and share their course plan and their time table. It also enables them to view the recent announcements quickly. Perhaps the most
important functionality of the application is the ability to apply for leave by
giving their duration and reason directly through the app interface itself, thus saving a lot of hassle.
We hope that this application will help make the lives of people who guide
us in our lives, a bit easier. Any queries, bug reports and feedback would be
much appreciated and acted upon immediately.

<hr/>

### Motivation

The definition for motivation is: “a reason for doing something”.
In this case, it was the reason of “gratitude” for our faculties that motivated
us to make something within our domain of expertise that could possibly help
them through some of the time-consuming tasks in their lives


#### Architecture: SERN stack (SQL, Express, React, Node)

<hr/>

### Tools Used

- React framework
- NodeJS, GitHub
- Git
- SQL
- AWS
- Heroku
- GitHub Actions

<hr/>

### Implementation

- Type/Platform: Our project, Faculty Dashboard, is a web-application.
- Functionalities:

#### Stakeholder Faculty
- Manage her/his profile
- Upload/view timetable
- Upload/view course plan
- View announcements
- Apply Leave

#### Stakeholder HOD:
- Manage her/his profile
- Upload/view timetable
- Upload/view course plan
- Make announcements
- Apply/Approve Leave


##### React is used for rendering the front-end.

##### Node is used as the back-end to:
- handle requests from react
- make required queries to the database
- return required response back to react

##### Amazon S3 storage is used to store data and return required data when requests are made as queries.

<hr/>

### Static Code Analysis

- First, Sonarqube application was downloaded and a server was started in the localhost using the command “sonarqube-6.0 ./bin/linux-x86-64/sonar.sh start”,  it also used Sonarqube scanner. Then, using our credentials we log in to the application. Supported the code complexity we obtained whether the project is passed or failed. Once the project is passed the code analysis is seen. The tool analyses the code based on the following headers:
Debt, Bugs, Vulnerabilities, Code smells, Coverage and duplication. We, the developers then resolved the security issues by fixing our code to satisfy the standards set by the application.

- Actions taken:
Alerts in the code were considered to be a security vulnerability and this
problem was circumvented by adding the messages that were resolved by
marking the alerts as false positive.
Other security vulnerabilities were resolved.

<hr/>

### UI Testing
- Tools Used: Selenium, Chromium Driver, Firefox Driver, Lambda Test
- Setup Details: First installed selenium package for python, then downloaded the Chromium driver for the current chrome browser. Lambda Test tool is used to perform browser and OS compatibility test.
- Test cases statistics: 20 test cases written

<hr/>

### Continuous Integration

- Tools used: GitHub Actions
- GitHub Actions has been enabled for the GitHub repository that hosts the project.
It has a custom webhook that triggers the GitHub Actions software which runs the preconfigured tests and deploys to GitHub Pages.
- We find that an automation software like GitHub Actions is extremely helpful in eliminating the routinal procedure of running tests and deployment everytime a push is initiated. This helps in saving a lot of time and effort that otherwise would be necessary for the proper functioning of the software.

<hr/>

### Additional Software Engineering Practices

- Adopted material and fluidic design principles for UI.
- Test suites with result portal.
- Automated security updates reported through mail.
- Setup a cloud enviroment to edit and push changes right through the browser without any dependencies.
- Setup a bot that reports additional external dependencies via alerts and mails.

<hr/>

### Conclusion

We have thus completed a faculty dashboard web application. Its features include a secure login page with Recaptcha, a page for new user registration and page to help the user in case of forgetting the password. On login, the user is redirected to his/her profile page and a navbar on the top lets the user choose to see the options: Schedule, Course plan, Leave management and announcement and circulars. The course plan and the faculty schedule are specific to a particular user and are stored on a cloud s3 bucket so that it can be accessed from any device; they also include a file button to select files from local storage to update their schedule and course plan, also there are buttons to share the schedule and timetable directly over popular media and also a button to directly send the file over email.
The leave management section consists of a page where all past leaves have been displayed in chronological order and a button at the bottom to apply for leave which will redirect the user to the apply leave page. Another feature included in this is: if the user is logged in as the HOD they have the ability to approve or reject the leaves, this action will be reflected on the faculty’s dashboard. There is also a page for viewing announcements and circulars. The database used to maintain all the above data is an SQL database hosted on Heroku. Finally, there is a logout button that logs the user out of the dashboard.

<hr/>
