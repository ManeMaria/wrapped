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
          className="object-cover h-[145px] w-full"
        />
      </span>
      <span className="h-[60dvh] grid place-items-center">{children}</span>
      <span className="w-full">
        <img
          loading="lazy"
          src="/assets/images/base.png"
          alt="base"
          className="object-cover h-[100px] w-full"
        />
      </span>
    </div>
  )
}
