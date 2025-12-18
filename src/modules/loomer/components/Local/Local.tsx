type LocalProps = {
  isVisible: boolean
  children: React.ReactNode
}
export const Local = ({ children }: LocalProps) => {
  return (
    <div className="relative w-full grid items-end">
      <span className={'w-full'}>
        <img
          loading="lazy"
          src="/assets/images/top.png"
          alt="top"
          className="object-contain"
        />
      </span>
      <span className="h-[50dvh] grid place-items-center">{children}</span>
      <span className="w-full">
        <img
          loading="lazy"
          src="/assets/images/base.png"
          alt="base"
          className="object-cover"
        />
      </span>
    </div>
  )
}
