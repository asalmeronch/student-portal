export function CapstonesShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateCapstone(props.capstone.id, params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Capstone information</h1>
      <p>Name: {props.capstone.name}</p>
      <p>Description: {props.capstone.description}</p>
      <p>URL: {props.capstone.url}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.capstone.name} name="name" type="text" />
        </div>
        <div>
          Description: <input defaultValue={props.capstone.description} name="description" type="text" />
        </div>
        <div>
          URL: <input defaultValue={props.capstone.url} name="url" type="url" />
        </div>
        <div>
          Screenshot: <input defaultValue={props.capstone.screenshot} name="screenshot" type="text" />
        </div>
        <button type="submit">Update capstone</button>
      </form>
    </div>
  );
}
