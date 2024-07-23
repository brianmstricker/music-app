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
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import PlayerButton from "./PlayerButton"
import { Store } from "@renderer/hooks/useStore"

const Player = () => {
  const { update, playing, muted, volume, currentTrack } = Store(
    ({ update, playing, muted, volume, currentTrack }) => ({
      update,
      playing,
      muted,
      volume,
      currentTrack
    })
  )
  const [loadingVol, setLoadingVol] = useState(false)
  const audioEl = useRef<HTMLAudioElement>(null)
  const track = useMemo(() => currentTrack, [currentTrack])
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
  useEffect(() => {
    if (!audioEl.current || !track) return
    audioEl.current.src = track.url
    audioEl.current.play()
    // update({ secondsPlayed})
  }, [track])
  return (
    <>
      <audio ref={audioEl} src="/bye.mp3" controls className="hidden" />
      <div className="border-t border-t-white/10 h-24 flex justify-between items-center px-4 shrink-0">
        <div className="flex w-56 gap-3 truncate">
          {(!track || (track && !track.thumbnail)) && (
            <div className="bg-neutral-800 h-10 xs:h-12 aspect-square" />
          )}
          <div className="flex flex-col truncate text-sm xs:text-base min-w-[5ch]">
            <span className="truncate">{track ? track.name : ""}</span>
            <span className="truncate">
              {track && track.artists.length > 0
                ? track.artists.map((artist) => artist.name).join(", ")
                : ""}
            </span>
          </div>
        </div>
        <div className="grow mx-3 xs:mx-6 flex flex-col gap-4">
          <div className="w-full h-2 bg-white/10 rounded-full" />
          <div className="flex justify-center gap-1 xs:gap-3">
            <PlayerButton title="Shuffle">
              <Shuffle className="w-[18px] h-[18px] xs:w-5 xs:h-5" />
            </PlayerButton>
            <PlayerButton title="Previous">
              <SkipBack className="w-5 h-5 xs:w-7 xs:h-7" />
            </PlayerButton>
            <PlayerButton title="Play" onClick={playClick}>
              {playing ? (
                <Pause className="w-5 h-5 xs:w-7 xs:h-7" />
              ) : (
                <Play className="w-5 h-5 xs:w-7 xs:h-7" />
              )}
            </PlayerButton>
            <PlayerButton title="Next">
              <SkipForward className="w-5 h-5 xs:w-7 xs:h-7" />
            </PlayerButton>
            <PlayerButton title="Repeat">
              <Repeat className="w-[18px] h-[18px] xs:w-5 xs:h-5" />
            </PlayerButton>
          </div>
        </div>
        <div className="flex flex-col xs:flex-row items-end mr-2 xs:items-center w-56 gap-1">
          <div className="flex gap-1 -translate-y-[6px] xs:-translate-y-0">
            <PlayerButton title="Currently Playing">
              <PlaySquare className="w-[18px] h-[18px] xs:w-5 xs:h-5" />
            </PlayerButton>
            <PlayerButton title="Queue">
              <ListMusic className="w-[18px] h-[18px] xs:w-5 xs:h-5" />
            </PlayerButton>
          </div>
          <div className="grow flex items-center gap-2 -translate-y-[2px] xs:-translate-y-0">
            {!loadingVol && audioEl.current && (
              <PlayerButton title={audioEl.current.muted ? "Unmute" : "Mute"} onClick={volumeClick}>
                {audioEl.current.muted && <VolumeX className="w-[18px] h-[18px] xs:w-5 xs:h-5" />}
                {!audioEl.current.muted && (
                  <>
                    {audioEl.current.volume > 0.5 ? (
                      <Volume2 className="w-[18px] h-[18px] xs:w-5 xs:h-5" />
                    ) : audioEl.current.volume > 0 ? (
                      <Volume1 className="w-[18px] h-[18px] xs:w-5 xs:h-5" />
                    ) : (
                      <Volume className="w-[18px] h-[18px] xs:w-5 xs:h-5" />
                    )}
                  </>
                )}
              </PlayerButton>
            )}
            <div className="w-full min-w-24 h-2 bg-white/10 rounded-full" />
          </div>
        </div>
      </div>
    </>
  )
}
export default Player
