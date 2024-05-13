import React from "react";
import { useParams } from "react-router-dom";
import { useUsers } from "../../hooks/useUsers";

const UserDetails: React.FC = () => {
  const { userId } = useParams();
  const { data } = useUsers();

  const user = data?.pages
    .flatMap((page) => page.results)
    .find((user) => user.id.value === userId);

  if (!user) {
    return <div>Loading user details...</div>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <div>
        <strong>Name:</strong> {user.name.first} {user.name.last}
      </div>
      <div>
        <strong>Email:</strong> {user.email}
      </div>
      <div>
        <strong>Phone:</strong> {user.phone}
      </div>
    </div>
  );
};

export default UserDetails;
