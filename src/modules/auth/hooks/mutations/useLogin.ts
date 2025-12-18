import { useMutation } from '@tanstack/react-query'
import { login } from '@/modules/auth/api';

type UseLoginProps = {
  onSuccess?: (data: unknown) => void;
  onError?: (error: Error) => void;
}

export const useLogin = ({ onSuccess, onError }: UseLoginProps) => {
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      onSuccess?.(data);
    },
    onError: (error) => {
      onError?.(error);
    },
  })
}
