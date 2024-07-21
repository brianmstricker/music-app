const Player = () => {
  return (
    <div className="border-t border-t-white/10 h-28 flex justify-between items-center">
      <div className="flex">
        <div>track img</div>
        <div>
          <div>track name</div>
          <div>artist</div>
        </div>
      </div>
      <div>player</div>
      <div className="flex">
        <div>now playing</div>
        <div>queue</div>
        <div>volume</div>
      </div>
    </div>
  )
}
export default Player
