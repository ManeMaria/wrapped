import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib';

type CardProps = {
  children: (centered: boolean) => React.ReactNode
  className?: string
}
export const Card = ({ children, className }: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const wasVisibleRef = useRef(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasLeftScreen, setHasLeftScreen] = useState(false);

  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const wasVisible = wasVisibleRef.current;
          const isNowVisible = entry.isIntersecting;

          wasVisibleRef.current = isNowVisible;
          setIsVisible(isNowVisible);

          // Detecta quando o elemento saiu da tela
          if (wasVisible && !isNowVisible) {
            setHasLeftScreen(true);
            console.log('Elemento saiu da tela', {
              intersectionRatio: entry.intersectionRatio,
            });
          }

          // Detecta quando o elemento entrou na tela
          if (!wasVisible && isNowVisible) {
            setHasLeftScreen(false);
            console.log('Elemento entrou na tela', {
              intersectionRatio: entry.intersectionRatio,
            });
          }
        });
      },
      {
        rootMargin: '40%',
        threshold: 0.1,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);


  return (
    <div
      ref={cardRef}
      className={cn('h-screen w-full overflow-hidden card', className)}
      data-visible={isVisible}
      data-has-left-screen={hasLeftScreen}
    >
      {children(isVisible)}
    </div>
  )
}