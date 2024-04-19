export function CapstonesShow(props) {
  return (
    <div>
      <h1>Capstone information</h1>
      <p>Name: {props.capstone.name}</p>
      <p>Description: {props.capstone.description}</p>
      <p>URL: {props.capstone.url}</p>
    </div>
  );
}
