import { useQuery } from '@tanstack/react-query';

import { QueryKeys } from '../utils/enums';
import queryClient from '../utils/queryClient';

export function createGlobalState<T>(
  queryKey: QueryKeys,
  initialData: T | null = null
) {
  return function () {
    const { data } = useQuery({
      queryKey: [queryKey],
      queryFn: () => Promise.resolve(initialData),
      refetchInterval: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchIntervalInBackground: false,
    });

    function setData(data: Partial<T>) {
      queryClient.setQueryData([queryKey], data);
    }

    function resetData() {
      queryClient.invalidateQueries({
        queryKey: [queryKey],
      });
      queryClient.refetchQueries({
        queryKey: [queryKey],
      });
    }

    return { data, setData, resetData };
  };
}
