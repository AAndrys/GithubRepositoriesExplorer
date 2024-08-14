import { apiDataValue } from '../config';
import { ApiRequests } from '../enums';
import { getRequest } from '../requests';
import { UserApiDataTypes, UserRepoApiDataTypes } from '../sharedTypes';

export const getUsers = (search: string, inputValue: string) => {
  const URL = `${ApiRequests.SearchUsers}?q=${search}&per_page=${apiDataValue.toString()}`;

  return getRequest(URL).then(res => {
    const data = res.data?.items || [];
    return data
      .filter((user: UserApiDataTypes) =>
        user.login.toLowerCase().startsWith(inputValue.toLowerCase())
      )
      .slice(0, 5);
  });
};

export const getUserRepo = (username: string) => {
  const URL = `${ApiRequests.UserRepo}${username}/repos`;

  return getRequest(URL).then(res => res.data as UserRepoApiDataTypes[]);
};
