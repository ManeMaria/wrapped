import * as React from "react"
import type { CarouselProps } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
} from "@/components/ui/carousel";


import { cn } from "@/lib";

type RootProps = {
  children: () => React.ReactNode;
  className?: string;
} & CarouselProps;

export function Root({ children, ...props }: RootProps) {
  return (
    <Carousel className={cn("w-full max-w-xs relative bg-amber-800", props.className)} {...props}>
      <CarouselContent>
        {children()}
      </CarouselContent>
    </Carousel>
  )
}
