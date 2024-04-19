export function StudentShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateStudent(props.student.id, params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Resume information</h1>
      <p>{props.student.resume_url}</p>
      <div>
        Resume URL:
        <input defaultValue={props.student.resume_url} name="resume_url" type="URL" />
      </div>
      <form onSubmit={handleSubmit}></form>
    </div>
  );
}
