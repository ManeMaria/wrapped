export const Border = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border-effect h-dvh w-full">
      <span className="border-effect-top" />
      <span className="border-effect-left" />
      <div className="overflow-y-scroll h-full w-full">{children}</div>
      <span className="border-effect-right" />
      <span className="border-effect-bottom" />
    </div>
  )
}
