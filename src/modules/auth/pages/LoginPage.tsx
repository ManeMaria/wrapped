import { LoginForm } from '@/modules/auth/components'
import { useLogin } from '@/modules/auth/hooks/queries'

export const LoginPage = () => {
  const { mutate: login, isPending } = useLogin()

  return (
    <div className="grid place-items-center h-screen px-6">
      <LoginForm onSubmit={login} isPending={isPending} />
    </div>
  )
}
