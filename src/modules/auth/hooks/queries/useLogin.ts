import { login } from "@/modules/auth/api";
import { useMutation, type MutationFunction } from "@tanstack/react-query";

export const useLogin = () => {
  return useMutation({
    mutationFn: login as unknown as MutationFunction<any, { email: string; password: string }>,
  });
}