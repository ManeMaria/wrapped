import { useEffect } from 'react';
import { useAudioManager } from '@/hooks/useAudioManager';
import { cn } from '@/lib'


type ThunderProps = {
  isVisible: boolean
}

export const Thunder = ({ isVisible }: ThunderProps) => {
  const { playAudio } = useAudioManager({
    audio: {
      src: '/assets/audios/thunder.wav',
      loop: false,
      volume: 1,
    }
  })


  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    if (isVisible) {
      timeout = setTimeout(() => {
        playAudio()
      }, 7500)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [isVisible, playAudio])

  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <div className={cn(isVisible && 'flash-effect')} />
      <div className={cn('down-effect', isVisible && 'down-visible fade-out')}>
        <div
          className={cn('p-10 grid place-items-center', isVisible && 'down')}
        >
          <h3 className="text-[60px] font-bold text-(--background-color-global)">
            Trovão
          </h3>
          <span className={cn(isVisible && 'image-wrapper')}>
            <img
              loading="lazy"
              src="/assets/images/thunder.png"
              alt="thunder"
              className="object-contain h-full max-h-[520px] w-full"
            />
          </span>
        </div>
      </div>
    </div>
  )
}
