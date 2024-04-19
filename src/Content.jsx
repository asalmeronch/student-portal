import axios from "axios";
import { useState, useEffect } from "react";
import { StudentsIndex } from "./StudentsIndex";
import { CapstonesIndex } from "./CapstonesIndex";
import { StudentShow } from "./StudentShow";
import { CapstonesShow } from "./CapstonesShow";
import { Modal } from "./Modal";
import { Login } from "./login";

import { Signup } from "./Signup";
import { Routes, Route } from "react-router-dom";

export function Content() {
  const [students, setStudents] = useState([]);
  const [capstones, setCapstones] = useState([]);
  const [isCapstonesShowVisible, setIsCapstonesShowVisible] = useState(false);
  const [currentCapstone, setCurrentCapstone] = useState({});
  const [isStudentsShowVisible, setIsStudentsShowVisible] = useState(false);
  const [currentStudent, setCurrentStudent] = useState({});

  const handleIndexStudents = () => {
    console.log("handleIndexStudents");
    axios.get("http://localhost:3000/students.json").then((response) => {
      console.log(response.data);
      setStudents(response.data);
    });
  };

  const handleIndexCapstones = () => {
    console.log("handleIndexCapstones");
    axios.get("http://localhost:3000/capstones.json").then((response) => {
      console.log(response.data);
      setCapstones(response.data);
    });
  };

  const handleShowStudent = (student) => {
    console.log("handleShowStudent", student);
    setIsStudentsShowVisible(true);
    setCurrentStudent(student);
  };

  const handleUpdateStudent = (id, params, successCallback) => {
    console.log("handleUpdateStudent", params);
    axios.patch(`http://localhost:3000/student/${id}.json`, params).then((response) => {
      setStudents(
        students.map((student) => {
          if (student.id === response.data.id) {
            return response.data;
          } else {
            return student;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleShowCapstone = (capstone) => {
    console.log("handleShowCapstone", capstone);
    setIsCapstonesShowVisible(true);
    setCurrentCapstone(capstone);
  };

  const handleUpdateCapstone = (id, params, successCallback) => {
    console.log("handleUpdateCapstone", params);
    axios.patch(`http:localhost:3000/capstones/${id}.json`, params).then((response) => {
      setCapstones(
        capstones.map((capstone) => {
          if (capstone.id === response.data.id) {
            return response.data;
          } else {
            return capstone;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsStudentsShowVisible(false);
  };

  const handleCapstoneClose = () => {
    console.log("handleClose");
    setIsCapstonesShowVisible(false);
  };

  useEffect(handleIndexStudents, []);
  useEffect(handleIndexCapstones, []);

  return (
    <div className="container">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/students" element={<StudentsIndex students={students} />} />
      </Routes>

      <StudentsIndex students={students} onShowStudent={handleShowStudent} />
      <Modal show={isStudentsShowVisible} onClose={handleClose}>
        <StudentShow student={currentStudent} onUpdateStudent={handleUpdateStudent} />
      </Modal>
      <CapstonesIndex capstones={capstones} onShowCapstone={handleShowCapstone} />
      <Modal show={isCapstonesShowVisible} onClose={handleCapstoneClose}>
        <CapstonesShow capstone={currentCapstone} onUpdateCapstone={handleUpdateCapstone} />
      </Modal>
    </div>
  );
}
