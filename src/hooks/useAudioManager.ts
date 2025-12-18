import { useRef, useState } from "react"

type AudioConfig = {
  src: string
  volume?: number
  loop?: boolean
}

type UseAudioManagerProps = {
  audio: AudioConfig
  allowMultiple?: boolean
}

type AudioManagerReturn = {
  playAudio: () => void
}

export const useAudioManager = ({
  audio,
  allowMultiple = false,
}: UseAudioManagerProps): AudioManagerReturn => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Inicializa o audioRef no primeiro uso
  if (!audioRef.current) {
    audioRef.current = new Audio(audio.src);
    if (audio.volume) {
      audioRef.current.volume = audio.volume;
    }
    if (audio.loop) {
      audioRef.current.loop = audio.loop;
    }
  }

  // Função para tocar o áudio
  const playAudio = () => {
    // Verifica se o áudio já está tocando
    if (!isAudioPlaying) {
      audioRef.current?.play().then(() => {
        setIsAudioPlaying(true); // Marca o áudio como tocando
      }).catch((error) => {
        console.error("Erro ao reproduzir áudio:", error);
      });
    }
  };

  return {
    playAudio,
  };
}

