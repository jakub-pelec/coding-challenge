import React from "react";
import { Link } from "react-router-dom";
import { User } from "../../typings/user";

interface UserProps {
  user: User;
}

const UserItem: React.FC<UserProps> = ({ user }) => (
  <li>
    <div>
      {user.name.first} {user.name.last}
    </div>
    <div>{user.email}</div>
    <img
      src={user.picture.medium}
      alt={`${user.name.first} ${user.name.last}`}
    />
    <Link to={`/user-details/${user?.id.value}`}>
      <button>View Details</button>
    </Link>
  </li>
);

export default UserItem;
