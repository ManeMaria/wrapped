import { useCallback, useEffect, useRef, useState } from 'react'

type AudioConfig = {
  src: string
  volume?: number
  loop?: boolean
}

type UseAudioManagerProps = {
  audio: AudioConfig
}

type AudioManagerReturn = {
  playAudio: () => void
  isPlaying: boolean
}

export const useAudioManager = ({
  audio,
}: UseAudioManagerProps): AudioManagerReturn => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Inicializa o audioRef no useEffect
  useEffect(() => {
    // Cria uma nova instância do áudio
    const audioElement = new Audio(audio.src)

    // Configura o volume se fornecido
    if (audio.volume !== undefined) {
      audioElement.volume = Math.max(0, Math.min(1, audio.volume))
    }

    // Configura o loop se fornecido
    if (audio.loop !== undefined) {
      audioElement.loop = audio.loop
    }

    // Adiciona listeners para gerenciar o estado
    const handleEnded = () => {
      setIsAudioPlaying(false)
    }

    const handlePause = () => {
      setIsAudioPlaying(false)
    }

    const handlePlay = () => {
      setIsAudioPlaying(true)
    }

    const handleError = (event: Event) => {
      const targetElement = event.target as HTMLAudioElement
      const error = targetElement.error

      if (error) {
        let errorMessage = 'Erro desconhecido no áudio'

        switch (error.code) {
          case MediaError.MEDIA_ERR_ABORTED:
            errorMessage = 'A reprodução foi abortada pelo usuário'
            break
          case MediaError.MEDIA_ERR_NETWORK:
            errorMessage = 'Erro de rede ao carregar o áudio'
            break
          case MediaError.MEDIA_ERR_DECODE:
            errorMessage =
              'Erro ao decodificar o áudio (formato não suportado ou arquivo corrompido)'
            break
          case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
            errorMessage = `Formato de áudio não suportado ou arquivo não encontrado: ${audio.src}`
            break
        }

        console.error('Erro no elemento de áudio:', {
          message: errorMessage,
          code: error.code,
          src: audio.src,
          networkState: targetElement.networkState,
          readyState: targetElement.readyState,
        })
      } else {
        console.error('Erro no elemento de áudio (sem detalhes):', {
          src: audio.src,
          networkState: targetElement.networkState,
          readyState: targetElement.readyState,
        })
      }

      setIsAudioPlaying(false)
    }

    audioElement.addEventListener('ended', handleEnded)
    audioElement.addEventListener('pause', handlePause)
    audioElement.addEventListener('play', handlePlay)
    audioElement.addEventListener('error', handleError)

    // Pré-carrega o áudio
    audioElement.load()

    audioRef.current = audioElement

    // Cleanup: remove listeners e pausa o áudio ao desmontar
    return () => {
      audioElement.removeEventListener('ended', handleEnded)
      audioElement.removeEventListener('pause', handlePause)
      audioElement.removeEventListener('play', handlePlay)
      audioElement.removeEventListener('error', handleError)
      audioElement.pause()
      audioElement.src = ''
    }
  }, [audio.src, audio.volume, audio.loop])

  // Função para tocar o áudio (deve ser chamada após interação do usuário)
  const playAudio = useCallback(() => {
    if (!audioRef.current) {
      console.warn('Elemento de áudio não está inicializado')
      return
    }

    // Se já está tocando, não faz nada
    if (isAudioPlaying) {
      return
    }

    // Verifica se o áudio está pronto para ser reproduzido
    if (audioRef.current.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
      audioRef.current
        .play()
        .then(() => {
          setIsAudioPlaying(true)
        })
        .catch((error) => {
          if (error.name !== 'NotAllowedError') {
            console.error('Erro ao reproduzir áudio:', error)
          }
          setIsAudioPlaying(false)
        })
    } else {
      // Se não está pronto, espera carregar e tenta novamente
      const handleCanPlay = () => {
        audioRef.current
          ?.play()
          .then(() => {
            setIsAudioPlaying(true)
          })
          .catch((error) => {
            if (error.name !== 'NotAllowedError') {
              console.error(
                'Erro ao reproduzir áudio após carregamento:',
                error,
              )
            }
            setIsAudioPlaying(false)
          })
      }
      audioRef.current.addEventListener('canplaythrough', handleCanPlay, {
        once: true,
      })
    }
  }, [isAudioPlaying])

  return {
    playAudio,
    isPlaying: isAudioPlaying,
  }
}
