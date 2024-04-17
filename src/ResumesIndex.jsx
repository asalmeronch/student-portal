export function ResumesIndex(props) {
  return (
    <div>
      <h1>All resumes</h1>
      {props.resumes.map((resume) => (
        <div key={resume.id}>
          <h2>{resume.name}</h2>
          <img src={resume.url} />
          <p>Width: {resume.width}</p>
          <p>Height: {resume.height}</p>
          <button onClick={() => props.onShowResume(resume)}>More info</button>
        </div>
      ))}
    </div>
  );
}
