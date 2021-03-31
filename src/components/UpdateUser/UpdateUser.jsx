import React from "react";
import { updateUser } from "../../services/users";
import { useDispatch } from "react-redux";
import { updateUsers } from "../../redux/action";
const UpdateUser = () => {
  const [name, setName] = React.useState("");
  const [id, setId] = React.useState("");
  const dispatcher = useDispatch();

  function submitForm() {
    const user = {
      name: name,
    };

    updateUser(id, user).then((result) => {
      console.log(result);
      dispatcher(updateUsers({ ...user, id: id }));
    });
  }

  return (
    <div>
      <h4>Update User</h4>
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
    </div>
  );
};

export default UpdateUser;
