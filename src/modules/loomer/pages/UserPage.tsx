import { useEffect } from 'react';
import { useNavigate, useParams } from '@tanstack/react-router';
import { Border, Curtain } from '@/components';
import { useGetUser } from '@/modules/loomer/api/queries';
import { Card } from '@/modules/loomer/components/Card';
import { cn } from '@/lib';
import { Thunder } from '@/modules/loomer/components/Thunder';

export const UserPage = () => {

  const { me } = useParams({ strict: false });

  const navigate = useNavigate();
  const { data: user, isSuccess, isError } = useGetUser({
    email: me as string,
  });

  useEffect(() => {
    if (isError) {
      navigate({ to: '/login' });
    }
  }, [isError]);




  return (
    <Curtain isVisible={isSuccess}>
      <Border>
        <div className='h-full' >
          <Card>
            {() => (
              <div className="w-full px-6 pt-10 h-full  grid" >
                {/* <button onClick={playAudio}>Play Audio</button> */}
                <h3 className="text-[60px] typing-effect typing-animated">
                  A Saga de
                </h3>
                <h3 className="text-[60px] typing-effect typing-animated delay-2s">
                  {user?.nickname} na
                </h3>
                <h3 className="text-[60px] typing-effect typing-animated delay-3s">
                  Terra da
                </h3>
                <h3 className="text-[60px] typing-effect typing-animated delay-4s">
                  Loomi
                </h3>
                <div className='grid place-items-end h-full'>

                  <div className='flex items-center gap-4 justify-between w-full'>
                    <img src='/assets/images/moon.png' alt='moon' className="object-contain w-[35vw] max-w-[300px] mt-[5vh]" />
                    <img src='/assets/images/stars.svg' alt='stars' className="object-contain w-[35vw] max-w-[400px]" />
                  </div>

                  <div className='grid place-items-center w-full'>
                    <img src='/assets/images/man1.png' alt='man' className="object-contain h-[40vh] w-full max-h-[450px] " />
                  </div>
                </div>
              </div>
            )}
          </Card>
          <Card>
            {(isCentered) => (
              <div className='relative'>
                <Thunder isVisible={isCentered} />
                <div className="w-full px-6 pt-10 h-full grid" >
                  <div className={cn("text-[36px] ", isCentered && "animate__animated  animate__fadeOutLeft animate__delay-5s")}>
                    <div className={cn("typing-effect", isCentered && "typing-animated")}>
                      Vou te contar neste
                    </div>
                    <div className={cn("typing-effect", isCentered && "typing-animated delay-2s")}>cordel,</div>
                    <div className={cn("typing-effect", isCentered && "typing-animated delay-2-5s")}>
                      Com Carinho e emoção
                    </div>
                  </div>
                  <div className="text-[36px]">
                    <div className={cn("typing-effect", isCentered && "typing-animated delay-5s")}>
                      A história de um
                    </div>
                    <div className={cn("typing-effect", isCentered && "typing-animated delay-5-5s")}>
                      Loomer
                    </div>
                    <div className={cn("typing-effect", isCentered && "typing-animated delay-6s")}>
                      que brilhou como
                    </div>
                  </div>


                  <div className='grid place-items-end h-full'>

                    <div className='flex items-center gap-4 justify-center w-full'>
                      <img src='/assets/images/cloud.png' alt='cloud1' className="object-contain w-[40vw] max-w-[300px] " />
                      <img src='/assets/images/cloud.png' alt='cloud2' className="object-contain w-[40vw] max-w-[300px] mt-[5vh]" />
                    </div>

                    <div className='grid place-items-center w-full'>
                      <span className="object-contain h-[23vh] w-full max-h-[400px] self-start">
                        <img src='/assets/images/bird.png' alt='bird' className="object-contain h-full w-[70%]" />
                      </span>
                      <img src='/assets/images/cloud.png' alt='cloud3' className="object-contain w-[40vw] max-w-[300px]" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </div>
      </Border >
    </Curtain >
  )
}
