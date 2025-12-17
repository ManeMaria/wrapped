import { Border, Curtain } from '@/components';
import { useGetUser } from '@/modules/loomer/queries';

export const UserPage = () => {
  const { data: user, isLoading } = useGetUser({
    email: 'cesar@loomi.com.br',
  })
  console.log("🚀 ~ UserPage ~ user:", user)

  return (
    <Curtain>
      <Border>
        <div className="grid place-items-center h-screen px-6">
          <div>User</div>
        </div>
      </Border>
    </Curtain>
  )
}
