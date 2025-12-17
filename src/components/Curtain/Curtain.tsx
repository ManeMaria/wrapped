export const Curtain = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="curtain-effect h-full w-full">
      <span className="curtain-effect-left" />
      {children}
      <span className="curtain-effect-right" />
    </div>
  )
}