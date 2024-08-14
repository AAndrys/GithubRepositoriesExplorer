import { QueryKeys } from '../utils/enums';
import { UserApiDataTypes } from '../utils/sharedTypes';

import { createGlobalState } from '.';

export const useUsersState = createGlobalState<UserApiDataTypes[]>(
  QueryKeys.Users,
  []
);
