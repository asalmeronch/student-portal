export function StudentShow(props) {
  return (
    <div>
      <h1>Resume information</h1>
      <p>{props.student.resume_url}</p>
    </div>
  );
}
