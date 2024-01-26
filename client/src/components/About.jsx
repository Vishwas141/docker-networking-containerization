import React, { useState, useEffect } from "react";
import axios from "axios";

const About = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        // Replace 'YOUR_BACKEND_API_ENDPOINT' with the actual API endpoint
        axios.get("http://localhost:5000/api/getstudent")
            .then(response => {
                setStudents(response.data.data);
            })
            .catch(error => {
                console.error("Error fetching data from the backend:", error);
            });
    }, []);

    return (
        <div>
           

            <div>
                {students.map(student => (
                    <div key={student.id} className="card">
                        <h3>Name: {student.name}</h3>
                        <p>Email: {student.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
