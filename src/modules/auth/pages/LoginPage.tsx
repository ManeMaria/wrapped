import { useNavigate } from '@tanstack/react-router';
import { LoginForm } from '@/modules/auth/components'
import { useLogin } from '@/modules/auth/hooks/mutations'

export const LoginPage = () => {
  const navigate = useNavigate();
  const { mutate: login, isPending } = useLogin({
    onSuccess: () => {
      navigate({ to: '/me' })
    },
  })

  return (
    <div className="grid place-items-center h-screen px-6">
      <LoginForm onSubmit={login} isPending={isPending} />
    </div>
  )
}
