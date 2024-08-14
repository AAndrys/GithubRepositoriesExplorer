import { QueryKeys } from '../utils/enums';

import { createGlobalState } from '.';

export interface GlobalStateTypes {
  isListExtended: boolean;
}

export const useGlobalState = createGlobalState<GlobalStateTypes>(
  QueryKeys.Global,
  {
    isListExtended: true,
  }
);
