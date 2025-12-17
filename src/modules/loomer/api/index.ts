import { axiosProvider } from '@/lib/axios'

export const getUser = async (params: { email: string }) => {
  const response = await axiosProvider.authorized().get(`users/by-email/${params.email}`)
  return response
}
