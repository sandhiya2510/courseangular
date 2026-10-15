CREATE DATABASE coursedb;

USE coursedb;

CREATE TABLE courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    course_name VARCHAR(100),
    credits INT
);
in one terminal
cd courseangular
npm install
node server.js

in another terminal
cd course-frontend
npm install
npm run dev

