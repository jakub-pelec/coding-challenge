import { User } from "../../typings/user";

export const fetchUsers = async ({
  pageParam = 0,
}): Promise<ApiResponse<User>> => {
  const response = await fetch(
    `https://randomuser.me/api/?page=${pageParam}&results=10&seed=abc`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
};
