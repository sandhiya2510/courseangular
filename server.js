
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "coursedb"
});

db.connect(err => {
    if (err) throw err;
    console.log("MySQL connected");
});

// CREATE
app.post("/courses", (req, res) => {
    const { course_name, credits } = req.body;

    db.query(
        "INSERT INTO courses (course_name, credits) VALUES (?, ?)",
        [course_name, credits],
        (err, result) => {
            if (err) return res.status(500).send(err.message);
            res.json({ message: "Course added", id: result.insertId });
        }
    );
});

// READ
app.get("/courses", (req, res) => {
    db.query("SELECT * FROM courses", (err, rows) => {
        if (err) return res.status(500).send(err.message);
        res.json(rows);
    });
});

// UPDATE
app.put("/courses/:id", (req, res) => {
    const { course_name, credits } = req.body;

    db.query(
        "UPDATE courses SET course_name=?, credits=? WHERE id=?",
        [course_name, credits, req.params.id],
        (err) => {
            if (err) return res.status(500).send(err.message);
            res.json({ message: "Course updated" });
        }
    );
});

// DELETE
app.delete("/courses/:id", (req, res) => {
    db.query(
        "DELETE FROM courses WHERE id=?",
        [req.params.id],
        (err) => {
            if (err) return res.status(500).send(err.message);
            res.json({ message: "Course deleted" });
        }
    );
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
