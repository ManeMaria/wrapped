import { useQuery } from '@tanstack/react-query'
import { getUser } from '@/modules/loomer/api';

export const useGetUser = (params: { email: string }) => {
  return useQuery({
    queryKey: ['user'],
    queryFn: () => getUser(params),
  })
}
