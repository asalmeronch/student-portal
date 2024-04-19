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

  const handleClose = () => {
    console.log("handleClose");
    setIsStudentsShowVisible(false);
  };

  useEffect(handleIndexStudents, []);

  return (
    <div>
      <StudentsIndex students={students} onShowStudent={handleShowStudent} />
      <Modal show={isStudentsShowVisible} onClose={handleClose}>
        <StudentShow student={currentStudent} onUpdateStudent={handleUpdateStudent} />
      </Modal>
    </div>
  );
}
