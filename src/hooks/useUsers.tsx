import { useInfiniteQuery } from "react-query";
import { fetchUsers } from "../api/users/users";
import { User } from "../typings/user";

export const useUsers = () =>
  useInfiniteQuery<ApiResponse<User>>(
    "users",
    ({ pageParam = 0 }) => fetchUsers({ pageParam }),
    {
      getNextPageParam: (lastPage) => lastPage.info.page + 1,
    }
  );
