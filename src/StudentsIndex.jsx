export function StudentsIndex(props) {
  return (
    <div>
      <h1>All student resumes</h1>
      {props.students.map((student) => (
        <div key={student.id}>
          <h2>
            {student.first_name} {student.last_name}
          </h2>
          <p>Resume: {student.resume_url}</p>
          <button onClick={() => props.onShowStudent(student)}>More info</button>
        </div>
      ))}
    </div>
  );
}
