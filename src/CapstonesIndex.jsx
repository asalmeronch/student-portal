export function CapstonesIndex(props) {
  return (
    <div>
      <h1>All capstones</h1>
      {props.capstones.map((capstone) => (
        <div key={capstone.id}>
          <h2>{capstone.name}</h2>
          <p>Description: {capstone.description}</p>
          <p>URL: {capstone.url}</p>
          <img src={capstone.screenshot} />
          <button onClick={() => props.onShowCapstone(capstone)}>More info</button>
        </div>
      ))}
    </div>
  );
}
