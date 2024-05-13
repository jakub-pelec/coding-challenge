import React, { useState } from "react";
import UserItem from "./UserItem";
import { useUsers } from "../../hooks/useUsers";

const UserList = () => {
  const [filter, setFilter] = useState("");
  const { data, fetchNextPage, hasNextPage, isLoading, isError } = useUsers();

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching users</div>;

  // The filtering is done on the client side, since this API does not support querying users
  // by their name.
  const filteredUsers = data?.pages
    .flatMap((page) => page.results)
    .filter((user) => {
      const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
      return fullName.includes(filter.toLowerCase());
    });

  return (
    <div>
      <h2>User List</h2>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Filter by name..."
      />
      <ul>
        {filteredUsers?.map((user) => (
          <UserItem user={user} key={user.id.value} />
        ))}
      </ul>
      {hasNextPage && (
        <button onClick={() => fetchNextPage()} disabled={isLoading}>
          {isLoading ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
};

export default UserList;
