import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Loader2 } from 'lucide-react'
import type { FieldErrors, UseFormRegister } from 'react-hook-form'
import type { LoginFormType } from '@/modules/auth/utils'
import { loginSchema } from '@/modules/auth/utils'

type LoginFormProps = {
  onSubmit: (data: { password: string; email: string }) => void
  isPending: boolean
}

type InputFormProps = {
  label: string
  type: 'email' | 'birthDate'
  register: UseFormRegister<LoginFormType>
  errors: FieldErrors<LoginFormType>
  placeholder: string
}

const InputForm = ({
  label,
  type,
  register,
  errors,
  placeholder,
}: InputFormProps) => {
  return (
    <label
      htmlFor={label}
      className="w-full animate__animated animate__fadeInDown animate__delay-1s"
    >
      <p className="text-sm font-medium mb-1 ">{label}</p>
      <input
        type={type === 'birthDate' ? 'number' : 'email'}
        {...register(type)}
        className="input-form focus:outline-none"
        placeholder={placeholder}
      />
      {errors[type] && (
        <p className="text-black text-sm ml-2 mt-1">
          {errors[type]?.message ?? ''}
        </p>
      )}
    </label>
  )
}

export const LoginForm = ({ onSubmit, isPending }: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
    mode: 'onSubmit',
  })

  const handleSubmitForm = (data: LoginFormType) => {
    onSubmit({
      email: data.email,
      password: data.birthDate,
    })
  }

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="grid place-items-center gap-8 w-full max-w-[400px]"
    >
      <span className="grid gap-4">
        <img
          src="/assets/images/loomi.png"
          alt="Wrapped 2025"
          className="max-w-[230px] mx-auto animate__animated animate__fadeInDown animate__delay-1s"
        />
        <h1 className="typing-effect typing-animated">Wrapped 2025</h1>
      </span>
      <InputForm
        label="E-mail Loomi"
        type="email"
        register={register}
        errors={errors}
        placeholder="E-mail Loomi"
      />
      <InputForm
        label="Data de nascimento"
        type="birthDate"
        register={register}
        errors={errors}
        placeholder="Data de nascimento (DDMMYYYY)"
      />

      <button
        type="submit"
        className="button-submit w-full grid place-items-center animate__animated animate__fadeInDown animate__delay-1s"
        disabled={isPending}
      >
        {isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Entrar'}
      </button>
    </form>
  )
}
