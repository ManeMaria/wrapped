import { useEffect } from 'react'
import { useNavigate, useParams } from '@tanstack/react-router'
import { Border, Curtain } from '@/components'
import { useGetUser } from '@/modules/loomer/api/queries'
import { Card } from '@/modules/loomer/components/Card'
import { cn } from '@/lib'
import { Thunder } from '@/modules/loomer/components/Thunder'
import { HorsemanWalk } from '@/modules/loomer/components/HorsemanWalk'
import { Local } from '@/modules/loomer/components/Local'

export const UserPage = () => {
  const { me } = useParams({ strict: false })

  const navigate = useNavigate()
  const {
    data: user,
    isSuccess,
    isError,
  } = useGetUser({
    email: me as string,
  })

  useEffect(() => {
    if (isError) {
      navigate({ to: '/login' })
    }
  }, [isError])

  return (
    <Curtain isVisible={isSuccess}>
      <Border>
        <Card>
          {() => (
            <div className="w-full px-6 pt-10 h-full grid">
              {/* <button onClick={playAudio}>Play Audio</button> */}
              <h3 className="text-[55px] typing-effect typing-animated">
                A Saga de
              </h3>
              <h3 className="text-[55px] typing-effect typing-animated delay-2s">
                {user?.nickname} na
              </h3>
              <h3 className="text-[55px] typing-effect typing-animated delay-3s">
                Terra da
              </h3>
              <h3 className="text-[55px] typing-effect typing-animated delay-4s">
                Loomi
              </h3>
              <div className="grid place-items-end">
                <div className="flex items-center gap-4 justify-between w-full">
                  <img
                    src="/assets/images/moon.png"
                    alt="moon"
                    className="object-contain w-[28vw] mt-[5vh]"
                  />
                  <img
                    src="/assets/images/stars.svg"
                    alt="stars"
                    className="object-contain w-[28vw] max-w-[400px]"
                  />
                </div>

                <div className="grid place-items-center w-full">
                  <img
                    src="/assets/images/man1.png"
                    alt="man"
                    className="object-contain h-[32vh] w-full max-h-[450px] "
                  />
                </div>
              </div>
            </div>
          )}
        </Card>
        <Card>
          {(isCentered) => (
            <div className="relative">
              <Thunder isVisible={isCentered} />
              <div className="w-full px-6 pt-10 h-full grid">
                <div
                  className={cn(
                    'text-[30px] ',
                    isCentered &&
                    'animate__animated  animate__fadeOutLeft animate__delay-5s',
                  )}
                >
                  <div
                    className={cn(
                      'typing-effect',
                      isCentered && 'typing-animated',
                    )}
                  >
                    Vou te contar neste
                  </div>
                  <div
                    className={cn(
                      'typing-effect',
                      isCentered && 'typing-animated delay-2s',
                    )}
                  >
                    cordel,
                  </div>
                  <div
                    className={cn(
                      'typing-effect',
                      isCentered && 'typing-animated delay-2-5s',
                    )}
                  >
                    Com Carinho e emoção
                  </div>
                </div>
                <div className="text-[30px]">
                  <div
                    className={cn(
                      'typing-effect',
                      isCentered && 'typing-animated delay-5s',
                    )}
                  >
                    A história de um
                  </div>
                  <div
                    className={cn(
                      'typing-effect',
                      isCentered && 'typing-animated delay-5-5s',
                    )}
                  >
                    Loomer
                  </div>
                  <div
                    className={cn(
                      'typing-effect',
                      isCentered && 'typing-animated delay-6s',
                    )}
                  >
                    que brilhou como
                  </div>
                </div>

                <div className="grid place-items-end h-full">
                  <div className="flex items-center gap-4 justify-center w-full">
                    <img
                      src="/assets/images/cloud.png"
                      alt="cloud1"
                      className="object-contain w-[35vw] max-w-[300px] "
                    />
                    <img
                      src="/assets/images/cloud.png"
                      alt="cloud2"
                      className="object-contain w-[35vw] max-w-[300px] mt-[5vh]"
                    />
                  </div>

                  <div className="grid place-items-center w-full">
                    <span className="object-contain h-[20vh] w-full max-h-[400px] self-start ">
                      <img
                        src="/assets/images/bird.png"
                        alt="bird"
                        className="object-contain h-full w-[70%] balance"
                      />
                    </span>
                    <img
                      src="/assets/images/cloud.png"
                      alt="cloud3"
                      className="object-contain w-[35vw] max-w-[300px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </Card>
        <Card>
          {(isCentered) => (
            <div>
              <div className="w-full px-6 pt-10 h-full grid">
                <div className={cn('text-[30px]')}>
                  <div
                    className={cn(
                      'typing-effect',
                      isCentered && 'typing-animated',
                    )}
                  >
                    Com talento e ousadia
                  </div>
                  <div
                    className={cn(
                      'typing-effect',
                      isCentered && 'typing-animated delay-2s',
                    )}
                  >
                    Foi destaque nessa
                  </div>
                  <div
                    className={cn(
                      'typing-effect',
                      isCentered && 'typing-animated delay-2-5s',
                    )}
                  >
                    nação!
                  </div>
                </div>
              </div>
              <div className="grid place-items-center h-full w-full balance">
                <img
                  loading="lazy"
                  src="/assets/images/congratulations.webp"
                  alt="congratulations"
                  className="object-contain max-w-[300px]"
                />
              </div>
            </div>
          )}
        </Card>

        <Card>
          {(isCentered) => (
            <div>
              <div className="w-full px-6 pt-10 h-full grid">
                <div className={cn('text-[30px]')}>
                  <div
                    className={cn(
                      'typing-effect',
                      isCentered && 'typing-animated',
                    )}
                  >
                    Já são {user?.loomiDays} dias de
                  </div>
                  <div
                    className={cn(
                      'typing-effect',
                      isCentered && 'typing-animated delay-2s',
                    )}
                  >
                    estrada
                  </div>
                </div>
                <div className={cn('text-[30px]')}>
                  <div
                    className={cn(
                      'typing-effect',
                      isCentered && 'typing-animated delay-2-5s',
                    )}
                  >
                    Com entrega e muito
                  </div>
                  <div
                    className={cn(
                      'typing-effect',
                      isCentered && 'typing-animated delay-3s',
                    )}
                  >
                    amor
                  </div>
                </div>
                <div className={cn('text-[22px]')}>
                  <div
                    className={cn(
                      'typing-effect',
                      isCentered && 'typing-animated delay-3-5s',
                    )}
                  >
                    Exemplo de {user?.loomiValue}
                  </div>
                  <div
                    className={cn(
                      'typing-effect',
                      isCentered && 'typing-animated delay-4s',
                    )}
                  >
                    Onde passa, deixa flor
                  </div>
                </div>
              </div>
              <div className="grid place-items-center h-full w-full ">
                <img
                  loading="lazy"
                  src="/assets/images/sky.png"
                  alt="sky"
                  className="object-contain"
                />
                <span className="w-full overflow-y-hidden forward-movement">
                  <img
                    loading="lazy"
                    src="/assets/images/montains.png"
                    alt="montains"
                    className="object-contain"
                  />
                </span>
              </div>
              <HorsemanWalk isVisible={isCentered} />
            </div>
          )}
        </Card>
        <Card>
          {(isCentered) => (
            <div className={cn('text-[30px] ')}>
              <div className="grid p-8">
                <div
                  className={cn(
                    'typing-effect',
                    isCentered && 'typing-animated ',
                  )}
                >
                  {user?.projectsCount === 1
                    ? `Foi ${user?.projectsCount} projeto`
                    : `Foram ${user?.projectsCount} projetos`}{' '}
                  entrou
                </div>
                <img
                  src="/assets/images/cloud.png"
                  alt="cloud1"
                  className="object-contain w-[25vw] max-w-[300px]  justify-self-end"
                />
                <div
                  className={cn(
                    'typing-effect',
                    isCentered && 'typing-animated delay-2s',
                  )}
                >
                  O seu sangue doou
                </div>
              </div>

              <span className="relative w-full grid place-items-center">
                <img
                  loading="lazy"
                  src="/assets/images/group.png"
                  alt="group"
                  className="object-contain w-[85%]"
                />
                <img
                  loading="lazy"
                  src="/assets/images/group2.png"
                  alt="group2"
                  className="object-contain absolute bottom-0 right-0"
                />
              </span>
            </div>
          )}
        </Card>
        <Card>
          {(isCentered) => (
            <div className={cn('text-[35px] p-8')}>
              <div className="grid ">
                <div
                  className={cn(
                    'typing-effect',
                    isCentered && 'typing-animated ',
                  )}
                >
                  E foram nestes lindos
                </div>
                <div
                  className={cn(
                    'typing-effect',
                    isCentered && 'typing-animated delay-2s',
                  )}
                >
                  projetos você mais
                </div>
                <div
                  className={cn(
                    'typing-effect',
                    isCentered && 'typing-animated delay-2-5s',
                  )}
                >
                  encantou
                </div>
              </div>

              <span className="relative w-full h-full grid gap-10">
                {user?.projects
                  .split(', ')
                  .slice(0, 4)
                  .map((project, i) => (
                    <span
                      className={cn(
                        'relative w-[70%]',
                        isCentered &&
                        `animate__animated  animate__fadeIn animate__delay-${i + 1}s`,
                      )}
                      style={
                        i % 2 !== 0
                          ? { marginLeft: `auto` }
                          : { marginRight: `auto` }
                      }
                    >
                      <span
                        className={cn(
                          'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20px]',
                          i === 0 && 'top-[70%]',
                        )}
                      >
                        {project}
                      </span>
                      <img
                        loading="lazy"
                        src={
                          i === 0
                            ? `/assets/images/fprojectname.png`
                            : `/assets/images/sprojectname.png`
                        }
                        alt={project}
                        className={cn('object-contain')}
                      />
                    </span>
                  ))}
              </span>
            </div>
          )}
        </Card>
        {!!user?.supercoins && (
          <Card>
            {(isCentered) => (
              <div className={cn('text-[35px] ')}>
                <div className="grid p-8">
                  <div
                    className={cn(
                      'typing-effect',
                      isCentered && 'typing-animated ',
                    )}
                  >
                    Foi um loomer de
                  </div>
                  <div
                    className={cn(
                      'typing-effect',
                      isCentered && 'typing-animated delay-2s',
                    )}
                  >
                    destaque
                  </div>
                  <div
                    className={cn(
                      'typing-effect',
                      isCentered && 'typing-animated delay-2-5s',
                    )}
                  >
                    E {user?.supercoins} feedbacks
                  </div>
                  <div
                    className={cn(
                      'typing-effect',
                      isCentered && 'typing-animated delay-3s',
                    )}
                  >
                    Recebeu
                  </div>
                </div>
                <span
                  className={cn(
                    'relative w-full grid place-items-center',
                    isCentered &&
                    'animate__animated  animate__fadeIn animate__delay-4s',
                  )}
                >
                  <img
                    loading="lazy"
                    src="/assets/images/like.png"
                    alt="like"
                    className="object-contain w-[85%]"
                  />
                </span>
              </div>
            )}
          </Card>
        )}

        {!!user?.loomicoins && (
          <Card>
            {(isCentered) => (
              <div className={cn('text-[35px] ')}>
                <div className="grid p-8">
                  <div
                    className={cn(
                      'typing-effect',
                      isCentered && 'typing-animated ',
                    )}
                  >
                    Por todas suas
                  </div>
                  <div
                    className={cn(
                      'typing-effect',
                      isCentered && 'typing-animated delay-2s',
                    )}
                  >
                    ações
                  </div>
                  <div
                    className={cn(
                      'typing-effect',
                      isCentered && 'typing-animated delay-2-5s',
                    )}
                  >
                    E {user?.loomicoins} LoomiCoins
                  </div>
                  <div
                    className={cn(
                      'typing-effect',
                      isCentered && 'typing-animated delay-3s',
                    )}
                  >
                    Conquistou
                  </div>
                </div>
                <span
                  className={cn(
                    'relative w-full grid place-items-center',
                    isCentered &&
                    'animate__animated  animate__fadeInUpBig animate__delay-3s',
                  )}
                >
                  <img
                    loading="lazy"
                    src="/assets/images/nice.png"
                    alt="nice"
                    className="object-contain w-[95%]"
                  />
                </span>
              </div>
            )}
          </Card>
        )}
        <Card>
          {(isCentered) => (
            <div className={cn('text-[32px] ')}>
              <div className="grid p-8">
                {user?.gratitudesAndBoosts ? (
                  <>
                    <div
                      className={cn(
                        'typing-effect',
                        isCentered && 'typing-animated ',
                      )}
                    >
                      {user?.gratitudesAndBoosts} gratidões
                    </div>
                    <div
                      className={cn(
                        'typing-effect',
                        isCentered && 'typing-animated delay-2s',
                      )}
                    >
                      Recebeu.
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className={cn(
                        'typing-effect',
                        isCentered && 'typing-animated ',
                      )}
                    >
                      Neste ano tanto
                    </div>
                    <div
                      className={cn(
                        'typing-effect',
                        isCentered && 'typing-animated delay-2s',
                      )}
                    >
                      cresceu que
                    </div>
                  </>
                )}
                {!!user?.promotions && (
                  <div
                    className={cn(
                      'typing-effect',
                      isCentered && 'typing-animated delay-2-5s',
                    )}
                  >
                    De {user?.promotions} ascendeu!
                  </div>
                )}
                <div
                  className={cn(
                    'typing-effect',
                    isCentered && 'typing-animated delay-4s',
                  )}
                >
                  Enfim, seu voo se
                </div>
                <div
                  className={cn(
                    'typing-effect',
                    isCentered && 'typing-animated delay-4-5s',
                  )}
                >
                  Sucedeu!
                </div>
              </div>
              <span
                className={cn(
                  'relative w-full grid place-items-center',
                  isCentered &&
                  'animate__animated  animate__backInUp animate__delay-5s',
                )}
              >
                <img
                  loading="lazy"
                  src="/assets/images/fly.png"
                  alt="fly"
                  className="object-contain w-[95%]"
                />
              </span>
            </div>
          )}
        </Card>
        <Card>
          {(isCentered) => (
            <div className={cn('text-[35px] ')}>
              <div className="grid p-8">
                <div
                  className={cn(
                    'typing-effect',
                    isCentered && 'typing-animated ',
                  )}
                >
                  Com {user?.peopleImpacted} pessoas
                </div>
                <div
                  className={cn(
                    'typing-effect',
                    isCentered && 'typing-animated delay-2s',
                  )}
                >
                  colaborou
                </div>
                <div
                  className={cn(
                    'typing-effect',
                    isCentered && 'typing-animated delay-2-5s',
                  )}
                >
                  Vários loomers você
                </div>
                <div
                  className={cn(
                    'typing-effect',
                    isCentered && 'typing-animated delay-3s',
                  )}
                >
                  Encantou
                </div>
              </div>
              <span
                className={cn(
                  'relative w-full grid place-items-center',
                  isCentered &&
                  'animate__animated  animate__fadeInUpBig animate__delay-3s',
                )}
              >
                <img
                  loading="lazy"
                  src="/assets/images/people.png"
                  alt="people"
                  className="object-cover "
                />
              </span>
            </div>
          )}
        </Card>
        <Card>
          {(isCentered) => (
            <div className={cn('text-[35px] ')}>
              <div className="grid p-8">
                <div
                  className={cn(
                    'typing-effect',
                    isCentered && 'typing-animated ',
                  )}
                >
                  Porém com {user?.topCollaborator} você
                </div>
                <div
                  className={cn(
                    'typing-effect',
                    isCentered && 'typing-animated delay-2s',
                  )}
                >
                  mais trabalhou
                </div>
                <div
                  className={cn(
                    'typing-effect',
                    isCentered && 'typing-animated delay-2-5s',
                  )}
                >
                  Essa dupla muito
                </div>
                <div
                  className={cn(
                    'typing-effect',
                    isCentered && 'typing-animated delay-3s',
                  )}
                >
                  brilhou!
                </div>
              </div>
              <span
                className={cn(
                  'relative w-full grid place-items-center',
                  isCentered &&
                  'animate__animated  animate__zoomIn animate__delay-3s',
                )}
              >
                <img
                  loading="lazy"
                  src="/assets/images/brother.png"
                  alt="brother"
                  className="object-cover "
                />
              </span>
            </div>
          )}
        </Card>
        <Card>
          {(isCentered) => (
            <div className={cn('text-[32px] ')}>
              <div className="grid p-8">
                {!!user?.loomiOfficeDays && (
                  <div
                    className={cn(
                      'typing-effect',
                      isCentered && 'typing-animated ',
                    )}
                  >
                    {user?.loomiOfficeDays} vezes ao office foi
                  </div>
                )}
                {!!user?.gymratsDays && (
                  <>
                    <div
                      className={cn(
                        'typing-effect',
                        isCentered && 'typing-animated delay-2s',
                      )}
                    >
                      e {user?.gymratsDays} vezes no
                    </div>
                    <div
                      className={cn(
                        'typing-effect',
                        isCentered && 'typing-animated delay-2-5s',
                      )}
                    >
                      gymrats entou
                    </div>
                  </>
                )}
                {user?.loomiOfficeDays || user?.gymratsDays ? (
                  <>
                    <div
                      className={cn(
                        'typing-effect',
                        isCentered && 'typing-animated delay-4s',
                      )}
                    >
                      {user?.loomiOfficeDays > user?.gymratsDays
                        ? `O presencial`
                        : `O seu corpo muito`}
                    </div>
                    <div
                      className={cn(
                        'typing-effect',
                        isCentered && 'typing-animated delay-4-5s',
                      )}
                    >
                      movimentou
                    </div>
                  </>
                ) : (
                  <div
                    className={cn(
                      'typing-effect',
                      isCentered && 'typing-animated ',
                    )}
                  >
                    A toa, você não ficou
                  </div>
                )}
              </div>
              <span className={cn('relative w-full grid place-items-center')}>
                <img
                  loading="lazy"
                  src="/assets/images/run.png"
                  alt="run"
                  className={cn(
                    'object-contain w-[85%]',
                    isCentered &&
                    'animate__animated  animate__slideInLeft animate__delay-4s',
                  )}
                />
                <img
                  loading="lazy"
                  src="/assets/images/group2.png"
                  alt="group2"
                  className="object-contain absolute -bottom-[25%] left-0 w-[100%]"
                />
              </span>
            </div>
          )}
        </Card>
        <Card>
          {(isCentered) => (
            <div className="p-8 mt-auto">
              <img
                loading="lazy"
                src="/assets/images/caw.png"
                alt="caw"
                className={cn(
                  'object-contain w-[95%]',
                  isCentered &&
                  'animate__animated  animate__pulse animate__infinite ml-auto',
                )}
              />
              <div className="grid  text-[32px] mt-[5dvh]">
                <div
                  className={cn(
                    'typing-effect',
                    isCentered && 'typing-animated ',
                  )}
                >
                  Se sua pernolalidade
                </div>
                <div
                  className={cn(
                    'typing-effect',
                    isCentered && 'typing-animated delay-2s',
                  )}
                >
                  Localização fosse
                </div>

                <div
                  className={cn(
                    'typing-effect',
                    isCentered && 'typing-animated delay-2-5s',
                  )}
                >
                  Qual seria o seu chão?
                </div>
              </div>
              <span
                className={cn('relative w-full h-[35dvh] grid place-items-end')}
              >
                <img
                  loading="lazy"
                  src="/assets/images/caquito.png"
                  alt="caquito"
                  className={cn(
                    'object-contain w-[45%]',
                    isCentered &&
                    'animate__animated  animate__pulse animate__infinite',
                  )}
                />
              </span>
            </div>
          )}
        </Card>
        <Card>
          {(isCentered) => (
            <Local isVisible={isCentered}>
              <div
                className={cn(
                  'grid place-items-center',
                  isCentered &&
                  'animate__animated  animate__fadeIn animate__delay-2s',
                )}
              >
                <h2 className="text-[35px] typing-effect typing-animated text-center">
                  {user?.personality}
                </h2>
                <h2 className="text-[20px] max-w-[300px] mx-auto text-center">
                  {user?.personalityDescription}
                </h2>
              </div>
            </Local>
          )}
        </Card>
        <Card>
          {(isCentered) => (
            <div className={cn('text-[35px]')}>
              <div className="grid p-8">
                <div
                  className={cn(
                    'typing-effect',
                    isCentered && 'typing-animated',
                  )}
                >
                  Essa história aqui não
                </div>
                <div
                  className={cn(
                    'typing-effect',
                    isCentered && 'typing-animated delay-2s',
                  )}
                >
                  finda aqui não
                </div>
                <div
                  className={cn(
                    'typing-effect',
                    isCentered && 'typing-animated delay-2-5s',
                  )}
                >
                  Só se inicia outra
                </div>
                <div
                  className={cn(
                    'typing-effect',
                    isCentered && 'typing-animated delay-3s',
                  )}
                >
                  estação
                </div>
              </div>
              <span
                className={cn(
                  'relative w-full grid place-items-center',
                  isCentered &&
                  'animate__animated  animate__zoomIn animate__delay-3s',
                )}
              >
                <img
                  loading="lazy"
                  src="/assets/images/sun_two.png"
                  alt="brother"
                  className="object-cover w-[85%] ml-auto"
                />
              </span>
            </div>
          )}
        </Card>
        <Card>
          {(isCentered) => (
            <div className={cn('text-[35px] ')}>
              <div className="grid p-8">
                <div
                  className={cn(
                    'typing-effect',
                    isCentered && 'typing-animated',
                  )}
                >
                  Pois ser Loomer é
                </div>
                <div
                  className={cn(
                    'typing-effect',
                    isCentered && 'typing-animated delay-2s',
                  )}
                >
                  jornada
                </div>
                <div
                  className={cn(
                    'typing-effect',
                    isCentered && 'typing-animated delay-2-5s',
                  )}
                >
                  De coragem e
                </div>
                <div
                  className={cn(
                    'typing-effect',
                    isCentered && 'typing-animated delay-3s',
                  )}
                >
                  construção
                </div>
              </div>
              <span
                className={cn(
                  'relative w-full grid place-items-center',
                  isCentered &&
                  'animate__animated  animate__zoomIn animate__delay-3s',
                )}
              >
                <img
                  loading="lazy"
                  src="/assets/images/sun.png"
                  alt="brother"
                  className="object-cover absolute bottom-[3.75rem] right-0"
                />
              </span>
              <span
                className={cn(
                  'relative w-full grid place-items-center',
                  isCentered &&
                  'animate__animated  animate__zoomIn animate__delay-3s',
                )}
              >
                <img
                  loading="lazy"
                  src="/assets/images/cangaco_man.webp"
                  alt="brother"
                  className="object-cover absolute top-[-3.75rem]"
                />
              </span>
            </div>
          )}
        </Card>
      </Border>
    </Curtain>
  )
}
