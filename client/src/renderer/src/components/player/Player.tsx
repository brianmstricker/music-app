import {
  ListMusic,
  Pause,
  Play,
  PlaySquare,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume,
  Volume1,
  Volume2,
  VolumeX
} from "lucide-react"
import { useCallback, useEffect, useRef, useState } from "react"
import PlayerButton from "./PlayerButton"
import { Store } from "@renderer/hooks/useStore"

const Player = () => {
  const { update, playing, muted, volume } = Store(({ update, playing, muted, volume }) => ({
    update,
    playing,
    muted,
    volume
  }))
  const [loadingVol, setLoadingVol] = useState(false)
  const audioEl = useRef<HTMLAudioElement>(null)
  const playClick = useCallback(() => {
    playing ? audioEl.current?.pause() : audioEl.current?.play()
    update({ playing: !playing })
  }, [playing])
  const volumeClick = useCallback(() => {
    if (!audioEl.current) return
    const updateMuted =
      muted === "true" ? (audioEl.current.muted = false) : (audioEl.current.muted = true)
    localStorage.setItem("muted", updateMuted ? "true" : "false")
    update({
      muted: updateMuted ? "true" : "false"
    })
  }, [muted])
  useEffect(() => {
    if (!audioEl.current) return
    const volumeStorage = localStorage.getItem("volume")
    const mutedStorage = localStorage.getItem("muted")
    const volume = volumeStorage ? parseFloat(volumeStorage) : 0.25
    const muted = mutedStorage === "true" ? "true" : "false"
    audioEl.current.volume = volume
    audioEl.current.muted = muted === "true"
    update({ volume, muted })
    setLoadingVol(false)
  }, [loadingVol])
  return (
    <>
      <audio ref={audioEl} src="/test.mp3" controls className="hidden" />
      <div className="border-t border-t-white/10 h-24 flex justify-between items-center px-4">
        <div className="flex w-64 justify-between">
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
          <PlayerButton title="Play" onClick={playClick}>
            {playing ? <Pause size={28} /> : <Play size={28} />}
          </PlayerButton>
          <PlayerButton title="Next">
            <SkipForward size={28} />
          </PlayerButton>
          <PlayerButton title="Repeat">
            <Repeat size={20} />
          </PlayerButton>
        </div>
        <div className="flex w-64 gap-4">
          <PlayerButton title="Currently Playing">
            <PlaySquare size={20} />
          </PlayerButton>
          <PlayerButton title="Queue">
            <ListMusic size={20} />
          </PlayerButton>
          <div className="grow flex items-center gap-2">
            {!loadingVol && audioEl.current && (
              <PlayerButton title={audioEl.current.muted ? "Unmute" : "Mute"} onClick={volumeClick}>
                {audioEl.current.muted && <VolumeX size={24} />}
                {!audioEl.current.muted && (
                  <>
                    {audioEl.current.volume > 0.5 ? (
                      <Volume2 size={24} />
                    ) : audioEl.current.volume > 0 ? (
                      <Volume1 size={24} />
                    ) : (
                      <Volume size={24} />
                    )}
                  </>
                )}
              </PlayerButton>
            )}
            <div className="w-full h-2 bg-white/10 rounded-full" />
          </div>
        </div>
      </div>
    </>
  )
}
export default Player
