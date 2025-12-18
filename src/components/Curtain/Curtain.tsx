import { cn } from "@/lib";

type CurtainProps = {
  children: React.ReactNode;
  isVisible?: boolean;
}
export const Curtain = ({ children, isVisible = false }: CurtainProps) => {
  return (
    <div className="curtain-effect h-full w-full">
      <span className={cn("curtain-effect-left", isVisible && "animated-left")} />
      {children}
      <span className={cn("curtain-effect-right", isVisible && "animated-right")} />
    </div>
  )
}