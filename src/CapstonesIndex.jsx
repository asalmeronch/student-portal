export function CapstonesIndex(props) {
  return (
    <div>
      <h1>All capstones</h1>
      {props.capstones.map((capstone) => (
        <div key={capstone.id}>
          <h2>{capstone.name}</h2>
          <img src={capstone.url} />
          <p>Width: {capstone.width}</p>
          <p>Height: {capstone.height}</p>
        </div>
      ))}
    </div>
  );
}
