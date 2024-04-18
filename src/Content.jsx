import axios from "axios";
import { useState, useEffect } from "react";
import { StudentsIndex } from "./StudentsIndex";
import { StudentShow } from "./StudentShow";
import { Modal } from "./Modal";

export function Content() {
  const [students, setStudents] = useState([]);
  const [isStudentsShowVisible, setIsStudentsShowVisible] = useState(false);
  const [currentStudent, setCurrentStudent] = useState({});

  const handleIndexStudents = () => {
    console.log("handleIndexStudents");
    axios.get("http://localhost:3000/students.json").then((response) => {
      console.log(response.data);
      setStudents(response.data);
    });
  };

  const handleShowStudent = (student) => {
    console.log("handleShowStudent", student);
    setIsStudentsShowVisible(true);
    setCurrentStudent(student);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsStudentsShowVisible(false);
  };

  useEffect(handleIndexStudents, []);

  return (
    <div>
      <StudentsIndex students={students} onShowStudent={handleShowStudent} />
      <Modal show={isStudentsShowVisible} onClose={handleClose}>
        <StudentShow student={currentStudent} />
      </Modal>
    </div>
  );
}
