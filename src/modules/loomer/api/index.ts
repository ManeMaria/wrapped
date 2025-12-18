import type { User } from '@/modules/loomer/api/types'
import { axiosProvider } from '@/lib/axios'

export const getUser = async (params: { email: string }): Promise<User> => {
  const response = await axiosProvider
    .authorized()
    .get<User>(`users/by-email/${params.email}`)
  return response as unknown as User
}
