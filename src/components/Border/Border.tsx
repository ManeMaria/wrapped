export const Border = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border-effect h-full w-full">
      <span className="border-effect-top" />
      <span className="border-effect-left" />
      {children}
      <span className="border-effect-right" />
      <span className="border-effect-bottom" />
    </div>
  )
}