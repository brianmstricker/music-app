import { Minimize, Minus, Square, X } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

const electron = window.electronWindow

const TitleBar = () => {
  const [isMaximized, setIsMaximized] = useState(false)
  const closeWindow = useCallback(() => {
    electron.closeWindow()
  }, [])
  const minimizeWindow = useCallback(() => {
    electron.minimizeWindow()
  }, [])
  const maxOrUnmaxWindow = useCallback(async () => {
    const maximized = await electron.isMaximized()
    if (maximized) {
      electron.unmaximizeWindow()
    } else {
      electron.maximizeWindow()
    }
    setIsMaximized(!maximized)
  }, [])
  useEffect(() => {
    const checkMaximized = async () => {
      const result = await electron.isMaximized()
      console.log(result)
      setIsMaximized(result)
    }
    checkMaximized()
  }, [])
  return (
    <div className="flex justify-between items-center border-b border-b-white/10 h-12">
      <h1 className="font-bold text-lg ml-3">Music App</h1>
      <div className="flex items-center h-full">
        <button
          onClick={minimizeWindow}
          className="h-full flex items-center justify-center hover:bg-neutral-600 px-3"
        >
          <Minus size={18} />
        </button>
        <button
          onClick={maxOrUnmaxWindow}
          className="h-full flex items-center justify-center hover:bg-neutral-600 px-3"
        >
          {isMaximized ? <Minimize size={18} /> : <Square size={18} />}
        </button>
        <button
          onClick={closeWindow}
          className="h-full flex items-center justify-center hover:bg-red-600 px-3"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  )
}

export default TitleBar
