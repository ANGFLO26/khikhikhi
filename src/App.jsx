import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const audioRef = useRef(null)
  const [showPlayOverlay, setShowPlayOverlay] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.09
    }
  }, [])

  // Tự động phát nhạc khi vào trang
  useEffect(() => {
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play()
          setIsPlaying(true)
          setShowPlayOverlay(false)
        } catch (error) {
          // Nếu trình duyệt chặn autoplay, hiển thị overlay để người dùng click
          setShowPlayOverlay(true)
        }
      }
    }
    
    // Đợi một chút để đảm bảo audio đã load
    const timer = setTimeout(() => {
      playAudio()
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  // Thử phát nhạc khi người dùng tương tác với trang
  useEffect(() => {
    const handleUserInteraction = async () => {
      if (audioRef.current && !isPlaying && showPlayOverlay) {
        try {
          await audioRef.current.play()
          setIsPlaying(true)
          setShowPlayOverlay(false)
        } catch (error) {
          console.log('Không thể phát nhạc:', error)
        }
      }
    }

    // Lắng nghe các sự kiện tương tác
    const events = ['click', 'touchstart', 'keydown', 'scroll']
    events.forEach(event => {
      window.addEventListener(event, handleUserInteraction, { once: true })
    })

    return () => {
      events.forEach(event => {
        window.removeEventListener(event, handleUserInteraction)
      })
    }
  }, [isPlaying, showPlayOverlay])

  const handlePlayClick = async () => {
    if (audioRef.current) {
      try {
        await audioRef.current.play()
        setIsPlaying(true)
        setShowPlayOverlay(false)
      } catch (error) {
        console.log('Không thể phát nhạc:', error)
      }
    }
  }

  return (
    <div className="app">
      <audio
        ref={audioRef}
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="/Nhạc Truyền Động Lực Hay Nhất và Mạnh Mẽ Nhất.mp3" type="audio/mpeg" />
      </audio>

      {/* Overlay để bật nhạc nếu autoplay bị chặn */}
      {showPlayOverlay && (
        <div className="play-overlay" onClick={handlePlayClick}>
          <div className="play-overlay-content">
            <div className="fire-icon-overlay">
              <div className="overlay-flame overlay-flame-1"></div>
              <div className="overlay-flame overlay-flame-2"></div>
              <div className="overlay-flame overlay-flame-3"></div>
            </div>
            <p className="play-overlay-text">Click</p>
          </div>
        </div>
      )}

      <div className="fire-glow"></div>
      <div className="container">
        <div className="fire-container">
          <div className="fire-base"></div>
          <div className="fire">
            <div className="flame flame-1"></div>
            <div className="flame flame-2"></div>
            <div className="flame flame-3"></div>
            <div className="flame flame-4"></div>
            <div className="spark spark-1"></div>
            <div className="spark spark-2"></div>
            <div className="spark spark-3"></div>
            {/* Embers - tro nhỏ bay lên */}
            <div className="ember ember-1"></div>
            <div className="ember ember-2"></div>
            <div className="ember ember-3"></div>
            <div className="ember ember-4"></div>
            <div className="ember ember-5"></div>
            <div className="ember ember-6"></div>
          </div>
          <div className="fire-light"></div>
          {/* Particles ánh sáng xung quanh */}
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
        </div>
        <div className="quote">
          <p className="quote-text">
            Cố lên <span className="name-highlight">Duyên</span>! Tớ sẽ cùng <span className="name-highlight">Duyên</span> vượt qua khoảng thời gian này nha
          </p>
        </div>
      </div>
    </div>
  )
}

export default App

