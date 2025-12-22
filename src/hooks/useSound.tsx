import lottie, { AnimationItem } from 'lottie-web';
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';

import { formatTime } from '../utils';

type UseLottieFilesControlProps = { animationData?: string };

export const useLottieFilesControl = ({ animationData }: UseLottieFilesControlProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<AnimationItem | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isPaused, setIsPaused] = useState(false);
  const [controls, setControls] = useState(false);
  const [progress, setProgress] = useState<number | undefined>(0);
  const [totalTime, setTotalTime] = useState<string | undefined>('00:00');
  const [currentTime, setCurrentTime] = useState<string | undefined>('00:00');

  const loadAnimation = useCallback(() => {
    if (containerRef.current && animationData) {
      try {
        animationRef.current = lottie.loadAnimation({
          container: containerRef.current,
          animationData,
          loop: false,
          autoplay: true,
        });
      } catch (error) {
        console.error('Erro ao carregar a animação:', error);
      }
    }
  }, [animationData]);

  useEffect(() => {
    loadAnimation();

    return () => {
      if (animationRef.current) {
        animationRef.current.destroy();
        animationRef.current = null;
      }
    };
  }, [animationData]);

  const pauseAnimation = useCallback(() => {
    animationRef.current?.pause();
    audioRef.current?.pause();
  }, []);

  const playAnimation = useCallback(() => {
    animationRef.current?.play();
    audioRef.current?.play();

    setTimeout(() => {
      setControls(false);
    }, 1000);
  }, []);

  const finishAnimation = useCallback(() => {
    animationRef.current?.stop();

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.pause();
    }

    setIsPaused(!isPaused);
    setControls(true);
  }, [isPaused]);

  const toggleAnimation = useCallback(() => {
    if (!animationRef.current) return;

    isPaused ? playAnimation() : pauseAnimation();
    setIsPaused(!isPaused);
  }, [isPaused, pauseAnimation, playAnimation]);

  const progressChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setProgress(value);

    if (!animationRef.current) return;

    const currentFrame = animationRef.current.currentFrame;
    const frameRate = animationRef.current.frameRate;
    const totalFrames = animationRef.current.totalFrames;

    setCurrentTime(formatTime(currentFrame, frameRate));

    animationRef.current.goToAndPlay((value / 100) * totalFrames, true);
  }, []);

  useEffect(() => {
    if (animationRef.current) {
      animationRef.current.addEventListener('complete', () => {
        finishAnimation();
      });
    }
  }, [finishAnimation]);

  useEffect(() => {
    if (animationRef?.current) {
      animationRef.current.addEventListener('DOMLoaded', () => {
        const totalFrames = animationRef.current?.totalFrames;
        const frameRate = animationRef.current?.frameRate;

        if (totalFrames && frameRate) {
          setTotalTime(formatTime(totalFrames, frameRate));
        }
      });
    }
  }, []);

  useEffect(() => {
    if (animationRef.current) {
      animationRef.current.addEventListener('enterFrame', () => {
        if (!animationRef.current) return;

        const currentFrame = animationRef.current.currentFrame;
        const totalFrames = animationRef.current.totalFrames;
        const frameRate = animationRef.current.frameRate;

        setProgress((currentFrame / totalFrames) * 100);
        setCurrentTime(formatTime(currentFrame, frameRate));
      });
    }

    return () => {
      animationRef.current?.removeEventListener('enterFrame', () => {});
    };
  }, []);

  return {
    audioRef,
    containerRef,
    controls,
    progress,
    totalTime,
    currentTime,
    isPaused,
    toggleAnimation,
    progressChange,
  };
};
