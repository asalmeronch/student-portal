export function CapstonesShow(props) {
  return (
    <div>
      <h1>Capstone information</h1>
      <p>Name: {props.capstone.name}</p>
      <p>Url: {props.capstone.url}</p>
      <p>Width: {props.capstone.width}</p>
      <p>Height: {props.capstone.height}</p>
    </div>
  );
}
