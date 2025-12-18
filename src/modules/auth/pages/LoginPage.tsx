import { useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import { LoginForm } from '@/modules/auth/components'
import { useLogin } from '@/modules/auth/hooks/mutations'
import { cookies } from '@/utils'

export const LoginPage = () => {
  const [email, setEmail] = useState<string>('')
  const navigate = useNavigate()
  const { mutate: login, isPending } = useLogin({
    onSuccess: (response) => {
      cookies.setAccess((response as { access_token: string }).access_token)
      navigate({ to: '/$me', params: { me: email } })
    },
  })

  const handleSubmit = (data: { password: string; email: string }) => {
    setEmail(data.email)
    login(data)
  }

  return (
    <div className="grid place-items-center h-screen px-6">
      <LoginForm onSubmit={handleSubmit} isPending={isPending} />
    </div>
  )
}
