import React from 'react';

const LibrarySong = ({songs, currentSong, setCurrentSong, audioRef, isPlaying}) => {
    const songSelectHandler = () => {
        const selectedSong = songs.filter((state) => state.id === currentSong.id);
        setCurrentSong(selectedSong[0]);
        if(isPlaying){
            const playPromise = audioRef.current.play();
            if(playPromise !== undefined) {
                playPromise.then((audio) => {
                    audioRef.current.play();
                })
            }
        }
    }
  return (
    <div onClick={songSelectHandler} className='library-song'>
        <img src={currentSong.cover} alt={currentSong.name} />
        <div className="song-description">
            <h3>{currentSong.name}</h3>
            <h4>{currentSong.artist}</h4>
        </div>
    </div>
  )
}

export default LibrarySong;