CREATE DATABASE course_db;

USE course_db;

CREATE TABLE courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    course_name VARCHAR(100),
    credits INT
);
in one terminal
node server.js

in another terminal
npm run dev





if u wanna install everthing on ur system
npm init -y
npm install express mysql2 cors

in one terminal
node server.js

in another terminal
npm create vite@latest course-frontend -- --template react
cd course-frontend
npm install
npm run dev