import { axiosProvider } from '@/lib/axios'

export const login = async (data: { email: string; password: string }) => {
  console.log('🚀 ~ login ~ data:', data)
  const response = await axiosProvider.unauthorized().post('/auth/login', data)
  return response.data
}
