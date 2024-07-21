import { Play, Repeat, Shuffle, SkipBack, SkipForward } from 'lucide-react'
import { useRef } from 'react'
import PlayerButton from './PlayerButton'

const Player = () => {
  const audioEl = useRef<HTMLAudioElement>(null)
  return (
    <>
      <audio ref={audioEl} src="/test.mp3" controls className="hidden" />
      <div className="border-t border-t-white/10 h-24 flex justify-between items-center">
        <div className="flex">
          <div>track img</div>
          <div>
            <div>track name</div>
            <div>artist</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <PlayerButton title="Shuffle">
            <Shuffle size={20} />
          </PlayerButton>
          <PlayerButton title="Previous">
            <SkipBack size={28} />
          </PlayerButton>
          <PlayerButton title="Play">
            <Play size={28} />
          </PlayerButton>
          <PlayerButton title="Next">
            <SkipForward size={28} />
          </PlayerButton>
          <PlayerButton title="Repeat">
            <Repeat size={20} />
          </PlayerButton>
        </div>
        <div className="flex">
          <div>now playing</div>
          <div>queue</div>
          <div>volume</div>
        </div>
      </div>
    </>
  )
}
export default Player
