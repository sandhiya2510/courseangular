
import { useState } from "react";

function App() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [credits, setCredits] = useState("");
  const [courses, setCourses] = useState([]);

  const url = "http://localhost:3000/courses";

  async function showCourses() {
    const res = await fetch(url);
    setCourses(await res.json());
  }

  async function addCourse() {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        course_name: name,
        credits: Number(credits)
      })
    });
    showCourses();
  }

  async function updateCourse() {
    await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        course_name: name,
        credits: Number(credits)
      })
    });
    showCourses();
  }

  async function deleteCourse(courseId) {
    await fetch(`${url}/${courseId}`, {
      method: "DELETE"
    });
    showCourses();
  }

  return (
    <div>
      <h2>Course Registration System</h2>

      <input placeholder="Course ID for update"
        value={id} onChange={e => setId(e.target.value)} />

      <input placeholder="Course Name"
        value={name} onChange={e => setName(e.target.value)} />

      <input placeholder="Credits" type="number"
        value={credits} onChange={e => setCredits(e.target.value)} />

      <button onClick={addCourse}>Add Course</button>
      <button onClick={showCourses}>View Courses</button>
      <button onClick={updateCourse}>Update Course</button>

      {courses.map(course => (
        <p key={course.id}>
          {course.id} - {course.course_name} - {course.credits} credits
          <button onClick={() => deleteCourse(course.id)}>
            Delete
          </button>
        </p>
      ))}
    </div>
  );
}

export default App;
