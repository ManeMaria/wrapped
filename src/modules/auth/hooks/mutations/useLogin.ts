import { useMutation } from '@tanstack/react-query'
import { login } from '@/modules/auth/api';

type UseLoginProps = {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export const useLogin = ({ onSuccess, onError }: UseLoginProps) => {
  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      onSuccess?.();
    },
    onError: (error) => {
      onError?.(error);
    },
  })
}
