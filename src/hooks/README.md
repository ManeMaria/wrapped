# Hook useAudioManager

Hook React para gerenciar 3 arquivos de áudio que podem ser reproduzidos em diferentes momentos da navegação.

## Características

- ✅ Gerencia 3 arquivos de áudio independentes
- ✅ Controle individual de cada áudio (play, pause, stop)
- ✅ Controle de volume para cada áudio
- ✅ Suporte a loop
- ✅ Opção de permitir múltiplos áudios simultâneos
- ✅ Estados de cada áudio (playing, currentTime, duration, volume)
- ✅ Limpeza automática ao desmontar

## Uso Básico

```tsx
import { useAudioManager } from '@/hooks'

const MyComponent = () => {
  const { playAudio1, playAudio2, playAudio3 } = useAudioManager({
    audio1: {
      src: '/assets/audio/audio1.mp3',
      volume: 0.7,
      loop: false,
    },
    audio2: {
      src: '/assets/audio/audio2.mp3',
      volume: 0.8,
      loop: true,
    },
    audio3: {
      src: '/assets/audio/audio3.mp3',
      volume: 0.6,
      loop: false,
    },
    allowMultiple: false, // Se true, permite múltiplos áudios simultâneos
  })

  return (
    <div>
      <button onClick={playAudio1}>Tocar Áudio 1</button>
      <button onClick={playAudio2}>Tocar Áudio 2</button>
      <button onClick={playAudio3}>Tocar Áudio 3</button>
    </div>
  )
}
```

## Uso com Navegação (TanStack Router)

```tsx
import { useEffect } from 'react'
import { useLocation } from '@tanstack/react-router'
import { useAudioManager } from '@/hooks'

const AudioController = () => {
  const location = useLocation()
  const { playAudio1, playAudio2, playAudio3, stopAll } = useAudioManager({
    audio1: {
      src: '/assets/audio/login.mp3',
      volume: 0.7,
    },
    audio2: {
      src: '/assets/audio/dashboard.mp3',
      volume: 0.5,
      loop: true,
    },
    audio3: {
      src: '/assets/audio/notification.mp3',
      volume: 1,
    },
  })

  useEffect(() => {
    const pathname = location.pathname

    if (pathname === '/login') {
      playAudio1()
    } else if (pathname === '/me') {
      playAudio2()
    } else if (pathname.startsWith('/notifications')) {
      playAudio3()
    }

    return () => {
      stopAll()
    }
  }, [location.pathname, playAudio1, playAudio2, playAudio3, stopAll])

  return null
}
```

## Uso com Componente AudioManager

Para facilitar ainda mais, você pode usar o componente `AudioManager` que já integra com as rotas:

```tsx
import { AudioManager } from '@/components'

// No seu componente root ou onde desejar
;<AudioManager
  audio1Path="/assets/audio/audio1.mp3"
  audio2Path="/assets/audio/audio2.mp3"
  audio3Path="/assets/audio/audio3.mp3"
  audio1Volume={0.7}
  audio2Volume={0.8}
  audio3Volume={0.6}
  audio1Loop={false}
  audio2Loop={true}
  audio3Loop={false}
  allowMultiple={false}
  triggerOnRoute={true}
  routeAudio1={['/login', '/register']}
  routeAudio2={['/me', '/dashboard']}
  routeAudio3={['/notifications']}
/>
```

## API Completa

### Parâmetros do Hook

```typescript
type UseAudioManagerProps = {
  audio1: AudioConfig
  audio2: AudioConfig
  audio3: AudioConfig
  allowMultiple?: boolean // Padrão: false
}

type AudioConfig = {
  src: string // Caminho do arquivo de áudio
  volume?: number // 0 a 1, padrão: 1
  loop?: boolean // Padrão: false
}
```

### Retorno do Hook

```typescript
type AudioManagerReturn = {
  // Controles do Áudio 1
  playAudio1: () => void
  pauseAudio1: () => void
  stopAudio1: () => void
  setVolume1: (volume: number) => void
  audio1State: AudioState

  // Controles do Áudio 2
  playAudio2: () => void
  pauseAudio2: () => void
  stopAudio2: () => void
  setVolume2: (volume: number) => void
  audio2State: AudioState

  // Controles do Áudio 3
  playAudio3: () => void
  pauseAudio3: () => void
  stopAudio3: () => void
  setVolume3: (volume: number) => void
  audio3State: AudioState

  // Controles globais
  pauseAll: () => void
  stopAll: () => void
}

type AudioState = {
  isPlaying: boolean
  currentTime: number
  duration: number
  volume: number
}
```

## Exemplos de Uso

### Exemplo 1: Áudio de fundo + efeitos sonoros

```tsx
const { playAudio1, playAudio2, playAudio3 } = useAudioManager({
  audio1: {
    src: '/assets/audio/background.mp3',
    volume: 0.3,
    loop: true,
  },
  audio2: {
    src: '/assets/audio/click.mp3',
    volume: 0.8,
    loop: false,
  },
  audio3: {
    src: '/assets/audio/notification.mp3',
    volume: 1,
    loop: false,
  },
  allowMultiple: true, // Permite background + efeitos
})

// Toca o áudio de fundo
useEffect(() => {
  playAudio1()
}, [playAudio1])

// Toca efeito sonoro em cliques
const handleClick = () => {
  playAudio2()
}
```

### Exemplo 2: Monitoramento de estado

```tsx
const { audio1State, audio2State, audio3State, playAudio1 } = useAudioManager({
  audio1: { src: '/assets/audio/audio1.mp3' },
  audio2: { src: '/assets/audio/audio2.mp3' },
  audio3: { src: '/assets/audio/audio3.mp3' },
})

return (
  <div>
    <button onClick={playAudio1}>Tocar</button>
    <p>Status: {audio1State.isPlaying ? 'Tocando' : 'Pausado'}</p>
    <p>
      Tempo: {Math.floor(audio1State.currentTime)}s /{' '}
      {Math.floor(audio1State.duration)}s
    </p>
    <p>Volume: {Math.round(audio1State.volume * 100)}%</p>
  </div>
)
```

## Notas Importantes

1. **Autoplay Policy**: Navegadores modernos bloqueiam autoplay de áudio. O áudio só será reproduzido após uma interação do usuário (clique, toque, etc.).

2. **Caminhos dos arquivos**: Coloque os arquivos de áudio na pasta `public/assets/audio/` para acessá-los com caminhos relativos.

3. **Limpeza**: O hook limpa automaticamente os áudios quando o componente desmonta.

4. **Múltiplos áudios**: Por padrão, apenas um áudio toca por vez. Se `allowMultiple` for `true`, múltiplos áudios podem tocar simultaneamente.
