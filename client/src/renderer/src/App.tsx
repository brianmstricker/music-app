import Player from "./components/player/Player"
import TitleBar from "./components/TitleBar"
import TrackList from "./components/tracklist/TrackList"

const App = () => {
  return (
    <div className="flex flex-col h-full">
      <TitleBar />
      <TrackList />
      <Player />
    </div>
  )
}
export default App
