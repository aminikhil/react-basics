import "./User.css";

export default function User({ user }) {
  return <h4 className="user">{user.name}</h4>;
}
