import { useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import type { LoginFormType } from '@/modules/auth/utils';
import { LoginForm } from '@/modules/auth/components'
import { useLogin } from '@/modules/auth/hooks/mutations'

export const LoginPage = () => {
  const [email, setEmail] = useState<string>('');
  const navigate = useNavigate();
  const { mutate: login, isPending } = useLogin({
    onSuccess: () => {
      navigate({ to: '/$me', params: { me: email } })
    },
  });

  const handleSubmit = (data: LoginFormType) => {
    setEmail(data.email);
    login(data);
  }

  return (
    <div className="grid place-items-center h-screen px-6">
      <LoginForm onSubmit={handleSubmit} isPending={isPending} />
    </div>
  )
}
