import axios from "axios";
import { useState, useEffect } from "react";
import { ResumesIndex } from "./ResumesIndex";
import { Modal } from "./Modal";

export function Content() {
  // const [resumes, setResumes] = useState([]);
  const resumes = [
    { id: 1, name: "First", url: "https://via.placeholder.com/150", width: 150, height: 150 },
    { id: 2, name: "Second", url: "https://via.placeholder.com/300", width: 300, height: 300 },
  ];

  const handleIndexResumes = () => {
    console.log("handleIndexResumes");
    axios.get("http://localhost:3000/resumes.json").then((response) => {
      console.log(response.data);
      setResumes(response.data);
    });
  };

  const handleCreateResume = (params, successCallback) => {
    console.log("handleCreateResume", params);
    axios.post("http://localhost:3000/resumes.json", params).then((response) => {
      setResumes([...resumes, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndexResumes, []);

  return (
    <div>
      <ResumesIndex resumes={resumes} />
      <Modal show={true}>
        <h1>Test</h1>
      </Modal>
    </div>
  );
}
