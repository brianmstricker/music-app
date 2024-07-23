import Player from "./components/player/Player"
import TitleBar from "./components/TitleBar"

const App = () => {
  return (
    <div className="flex flex-col h-full">
      <TitleBar />
      <div className="grow">songs</div>
      <Player />
    </div>
  )
}
export default App
