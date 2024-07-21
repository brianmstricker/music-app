import Player from './components/Player'
import TitleBar from './components/TitleBar'

const App = () => {
  return (
    <div className="flex flex-col h-full">
      <TitleBar />
      <div className="grow">
        <audio src="/test.mp3" controls />
      </div>
      <Player />
    </div>
  )
}
export default App
