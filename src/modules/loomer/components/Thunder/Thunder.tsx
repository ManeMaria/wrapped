import { cn } from '@/lib'

type ThunderProps = {
  isVisible: boolean
}
export const Thunder = ({ isVisible }: ThunderProps) => {
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
