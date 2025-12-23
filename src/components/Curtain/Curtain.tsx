import { cn } from '@/lib'

type CurtainProps = {
  children: React.ReactNode
  isVisible?: boolean
}

type CurtainImageProps = {
  src: string
  alt: string
}

const CurtainImage = ({ src, alt }: CurtainImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      fetchPriority="high"
      decoding="async"
      className="object-cover h-full w-full"
    />
  )
}

export const Curtain = ({ children, isVisible = false }: CurtainProps) => {
  return (
    <div className="curtain-effect h-full w-full">
      <span
        className={cn(
          'curtain-effect-left w-full h-full',
          isVisible ? 'animated-open-left' : 'animated-close-left',
        )}
      >
        <CurtainImage src="/assets/images/curtain-l.webp" alt="curtain-left" />
      </span>
      {children}
      <span
        className={cn(
          'curtain-effect-right',
          isVisible ? 'animated-open-right' : 'animated-close-right',
        )}
      >
        <CurtainImage src="/assets/images/curtain-r.webp" alt="curtain-right" />
      </span>
    </div>
  )
}
