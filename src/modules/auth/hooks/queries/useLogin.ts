import {  useMutation } from '@tanstack/react-query'
import type {MutationFunction} from '@tanstack/react-query';
import { login } from '@/modules/auth/api'

export const useLogin = () => {
  return useMutation({
    mutationFn: login as unknown as MutationFunction<
      any,
      { email: string; password: string }
    >,
  })
}
