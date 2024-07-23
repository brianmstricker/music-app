import { data } from "../../data"
import TrackItem from "./TrackItem"

const TrackList = () => {
  return (
    <div className="grow flex flex-col overflow-y-auto">
      {data.map((track) => (
        <TrackItem key={track.id} track={track} />
      ))}
    </div>
  )
}
export default TrackList
