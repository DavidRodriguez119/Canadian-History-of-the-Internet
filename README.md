# Canadian-History-of-the-Internet

This project aims to create a website that informs about the history of the internet in Canada between the years 2000 and 2025. The website will be divided into four main periods, each covering several years of internet development in Canada.

## Table of Contents

*   [Project Description](#project-description)
*   [Features](#features)
*   [Database Schema](#database-schema)
*   [Frontend Structure](#frontend-structure)
*   [Non-Functional Requirements](#non-functional-requirements)
*   [Technologies Used](#technologies-used)
*   [Installation](#installation)
*   [How to Run the Code](#how-to-run-the-code)

## Project Description

This website will allow users to explore the history of the internet in Canada through different periods, including:

*   Early 2000s: Broadband and the Dot-Com Bubble Burst (2000-2003)
*   Web 2.0 and Social Media (2004-2010)
*   Mobile First and the App Economy (2011-2018)
*   The 5G Era and Digital Transformation (2019-2025)

Users will be able to navigate between these periods and access detailed information about key developments and sources for each period.

## Features

*   Informative: Provides comprehensive information about the history of the internet in Canada.
*   Period-based: Divides the information into four distinct periods for easy navigation.
*   Sourced: Includes references to all sources used in the research.

## Database Schema

The database will consist of three main tables:

*   **Periods:** Stores information about each period, including start year, end year, title, and overview.
*   **Developments:** Stores details about specific developments within each period.
*   **Sources:** Stores information about the sources used for the research.

## Frontend Structure

The frontend will be built using Handlebars and will include templates for:

*   Overall website layout
*   Period overview pages
*   Development details pages
*   Source details pages

## Non-Functional Requirements

*   Performance: Fast page load times and responsiveness.
*   Usability: Easy navigation, clear content, and accessibility.
*   Security: Secure connections.
*   Reliability: Minimal downtime and error handling.
*   Maintainability: Well-organized and documented code.
*   Portability: Cross-browser and platform compatibility.

## Technologies Used

*   Backend: Node.js, Express.js, Sequelize, MySQL
*   Frontend: Handlebars, HTML, CSS, JavaScript
*   Database: MySQL
*   Raw DataL: JSON files
*   Deployment: [https://canadian-internet-31f27edd4f1f.herokuapp.com]: (Heroku)
*   Version Control: Git

## Installation

[//]: # (Instructions on how to install the project dependencies.)

1. Clone the repository or download the zip file of the code. 

2. Open the code.

3. In the terminal of the project use: npm i

    * Note that node should already be installed in the device.

    * This will install all the dependencies needed to run the page.

4. Create a .env file with the necessary credentials to run the seeds file.

    * The .env file must have a: DB_NAME, DB_USER, DB_PASSWORD.

5. Go to the server.js file:

    * In line 26, change { force: false } to { force: true }

6. Run mysql -u root -p

    * Note that a version of MySQL should be already installed in the device.

    * Insert the password added in the .env file

    * Once logged in, type source db/shcema.sql

    * Once the file had run type exit

7. In the terminal type: node ./seeds/seeds.js

8. Go to the server.js file:

    * In line 26, change { force: true } to { force: false }

## How to Run the Code

[//]: # (Instructions on how to run the project locally.)

1. After installation, type node server.js in the terminal to initialize the server.

## Deployed Website

https://canadian-internet-31f27edd4f1f.herokuapp.com/

## GitHub Repository

[Link to GitHub Repository](https://github.com/DavidRodriguez119/Canadian-History-of-the-Internet.git)

## Screenshots or running app

![Home Page](/public/assets/Screenshot-home.png)
![Development Page](/public/assets/Screenshot-Development.png)
![Sources Page](/public/assets/Screenshot-Sources.png)
