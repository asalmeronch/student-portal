import axios from "axios";
import { useState, useEffect } from "react";
import { ResumesIndex } from "./ResumesIndex";
import { ResumeShow } from "./ResumeShow";
import { Modal } from "./Modal";

export function Content() {
  // const [resumes, setResumes] = useState([]);
  const resumes = [
    { id: 1, name: "First", url: "https://via.placeholder.com/150", width: 150, height: 150 },
    { id: 2, name: "Second", url: "https://via.placeholder.com/300", width: 300, height: 300 },
  ];

  const [isResumesShowVisible, setIsResumesShowVisible] = useState(false);
  const [currentResume, setCurrentResume] = useState({});

  const handleIndexResumes = () => {
    console.log("handleIndexResumes");
    axios.get("http://localhost:3000/resumes.json").then((response) => {
      console.log(response.data);
      setResumes(response.data);
    });
  };

  const handleShowResume = (resume) => {
    console.log("handleShowResume", resume);
    setIsResumesShowVisible(true);
    setCurrentResume(resume);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsResumesShowVisible(false);
  };

  useEffect(handleIndexResumes, []);

  return (
    <div>
      <ResumesIndex resumes={resumes} onShowResume={handleShowResume} />
      <Modal show={isResumesShowVisible} onClose={handleClose}>
        <ResumeShow resume={currentResume} />
      </Modal>
    </div>
  );
}
