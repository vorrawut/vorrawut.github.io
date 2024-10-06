import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { RxTrackNext, RxTrackPrevious } from 'react-icons/rx'

const MusicPlayer = () => {
  const [playlist] = useState([
    { url: '/music/Colorful-Flowers.mp3', title: 'Colorful Flowers' },
    { url: '/music/Memories-of-Spring.mp3', title: 'Memories of Spring' },
    { url: '/music/Missing-You.mp3', title: 'Missing You' },
    { url: '/music/Morning-Routine-Lofi-Study-Music.mp3', title: 'Morning Routine' },
    { url: '/music/silent-wood.mp3', title: 'silent wood' }
  ])

  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [isPlaying] = useState(true)

  const nextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1 < playlist.length ? prevIndex + 1 : 0))
  }

  const prevSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 >= 0 ? prevIndex - 1 : playlist.length - 1))
  }

  return (
    <div className='flex flex-col items-center justify-center mb-4'>
      <div className='flex items-center justify-center space-x-2 mb-2'>
        <RxTrackPrevious onClick={prevSong} />
        <h4 className='text-white'>Song: {playlist[currentSongIndex].title}</h4>
        <RxTrackNext onClick={nextSong} />
      </div>
      <ReactPlayer url={playlist[currentSongIndex].url} playing={isPlaying} controls={true} onEnded={nextSong} width={300} height={30} />
    </div>
  )
}

export default MusicPlayer
