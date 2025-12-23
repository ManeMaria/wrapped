import { cn } from '@/lib'

type HorsemanWalkProps = {
  isVisible: boolean
}
export const HorsemanWalk = ({ isVisible }: HorsemanWalkProps) => {
  return (
    <div className="relative w-full h-[43dvh] pl-[30px] grid items-end ">
      <span className={cn(isVisible && 'horseman-walk')}>
        <img
          loading="lazy"
          src="/assets/images/knight.png"
          alt="knight"
          className="object-contain w-[40vw] max-w-[300px]"
        />
      </span>

      <span className="w-[50%] max-w-[300px] h-[25dvh]">
        <img
          loading="lazy"
          src="/assets/images/flowers.png"
          alt="flowers"
          className="object-cover"
        />
      </span>
    </div>
  )
}
