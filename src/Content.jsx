import axios from "axios";
import { useState, useEffect } from "react";
import { StudentsIndex } from "./StudentsIndex";
import { CapstonesIndex } from "./CapstonesIndex";
import { StudentShow } from "./StudentShow";
import { CapstonesShow } from "./CapstonesShow";
import { Modal } from "./Modal";

export function Content() {
  const [students, setStudents] = useState([]);
  const capstones = [
    { id: 1, name: "First", url: "https://via.placeholder.com/150", width: 150, height: 150 },
    { id: 2, name: "Second", url: "https://via.placeholder.com/300", width: 300, height: 300 },
  ];
  // const [capstones, setCapstones] = useState([]);
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

  // const handleIndexCapstones = () => {
  //   console.log("handleIndexCapstones");
  //   axios.get("http://localhost:3000/capstones.json").then((response) => {
  //     console.log(response.data);
  //     setCapstones(response.data);
  //   });
  // };

  const handleShowStudent = (student) => {
    console.log("handleShowStudent", student);
    setIsStudentsShowVisible(true);
    setCurrentStudent(student);
  };

  const handleShowCapstone = (capstone) => {
    console.log("handleShowCapstone", capstone);
    setIsCapstonesShowVisible(true);
    setCurrentCapstone(capstone);
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
  // useEffect(handleIndexCapstones, []);

  return (
    <div>
      <StudentsIndex students={students} onShowStudent={handleShowStudent} />
      <Modal show={isStudentsShowVisible} onClose={handleClose}>
        <StudentShow student={currentStudent} />
      </Modal>
      <CapstonesIndex capstones={capstones} onShowCapstone={handleShowCapstone} />
      <Modal show={isCapstonesShowVisible} onClose={handleCapstoneClose}>
        <CapstonesShow capstone={currentCapstone} />
      </Modal>
    </div>
  );
}
