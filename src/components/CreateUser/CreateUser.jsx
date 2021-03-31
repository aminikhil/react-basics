import React from "react";
import { createUser } from "../../services/users";

const CreateUser = () => {
  const [name, setName] = React.useState("");
  const [id, setId] = React.useState("");

  function submitForm() {
    const user = {
      id: id,
      name: name,
    };

    createUser(user).then((result) => console.log(result));
  }

  return (
    <form>
      <h4>Create User</h4>
      <input
        value={id}
        onChange={(event) => setId(event.target.value)}
        placeholder="ID"
      />
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Name"
      />

      <button onClick={submitForm}>Submit</button>
    </form>
  );
};

export default CreateUser;
