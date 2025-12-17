import { useGetUser } from '../queries';

export const UserPage = () => {
  const { data: user, isLoading } = useGetUser({
    email: 'cesar@loomi.com.br',
  })
  console.log("🚀 ~ UserPage ~ user:", user)

  return (
    <div className="grid place-items-center h-screen px-6">
      <div>User</div>
    </div>
  )
}
