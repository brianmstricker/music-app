import { Store } from "@renderer/hooks/useStore"
import { TrackType } from "@renderer/types"
import { memo, useCallback, useMemo } from "react"

const TrackItem = memo(({ track }: { track: TrackType }) => {
  const { update } = Store(({ update }) => ({
    update
  }))
  const randomColor = useMemo(() => Math.floor(Math.random() * 16777215).toString(16), [])
  const trackDoubleClick = useCallback((_e: React.MouseEvent, track: TrackType) => {
    update({ currentTrack: track.id, playing: true })
  }, [])
  return (
    <div
      key={track.id}
      className="hover:bg-white/10 transition-colors duration-100"
      onDoubleClick={(e) => trackDoubleClick(e, track)}
    >
      <div className="p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          {track.thumbnail ? (
            <img src={track.thumbnail} alt={track.name} />
          ) : (
            <div
              className="h-14 aspect-square"
              style={{ backgroundColor: `#${randomColor}` }}
            ></div>
          )}
          <div className="flex flex-col">
            <span className="font-semibold text-lg">{track.name}</span>
            <div className="text-white/80 text-sm">
              {track.artists.map((artist, i) => (
                <span key={artist.id}>
                  {artist.name}
                  {i < track.artists.length - 1 && ", "}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div>
          <span className="text-white/80">
            {track.length > 60
              ? `${Math.floor(track.length / 60)}:${track.length % 60}`
              : track.length}
          </span>
        </div>
      </div>
    </div>
  )
})
export default TrackItem

// const randomColor = Math.floor(Math.random() * 16777215).toString(16)
//         return (
//           <div
//             key={track.id}
//             className="hover:bg-white/10 transition-colors duration-100"
//             onDoubleClick={(e) => trackDoubleClick(e, track)}
//           >
//             <div className="p-4 flex justify-between items-center">
//               <div className="flex items-center gap-4">
//                 {track.thumbnail ? (
//                   <img src={track.thumbnail} alt={track.name} />
//                 ) : (
//                   <div
//                     className="h-14 aspect-square"
//                     style={{ backgroundColor: `#${randomColor}` }}
//                   ></div>
//                 )}
//                 <div className="flex flex-col">
//                   <span className="font-semibold text-lg">{track.name}</span>
//                   <div className="text-white/80 text-sm">
//                     {track.artists.map((artist, i) => (
//                       <span key={artist.id}>
//                         {artist.name}
//                         {i < track.artists.length - 1 && ", "}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <span className="text-white/80">
//                   {track.length > 60
//                     ? `${Math.floor(track.length / 60)}:${track.length % 60}`
//                     : track.length}
//                 </span>
//               </div>
//             </div>
//           </div>
//         )
//       })}
