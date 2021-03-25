import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../services/users";
import { fetchUsers } from "../../redux/action";
import UpdateUser from "../UpdateUser";

const Home = (props) => {
  const dispatcher = useDispatch();
  const state = useSelector((state) => state);

  React.useEffect(() => {
    getUsers().then((users) => {
      dispatcher(fetchUsers(users));
      console.log("Got users");
    });
  }, [dispatcher]);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {state.users.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {state.users.length === 0 ? "Loading" : ""}
      <hr />
      <h5>Update User Here</h5>
      <UpdateUser />
    </>
  );
};

export default Home;
