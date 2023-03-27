import React from 'react';

const LibrarySong = ({songs, currentSong, setCurrentSong, audioRef, isPlaying, setSongs}) => {
    const songSelectHandler = () => {
        const selectedSong = songs.filter((state) => state.id === currentSong.id);
        setCurrentSong(selectedSong[0]);

        const newSongs = songs.map((song) => {
            if(song.id === currentSong.id){
                return{
                    ...song,
                    active: true,
                }
            }else{
                return{
                    ...song,
                    active: false,
                }
            }
        })
        setSongs(newSongs);
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
    <div onClick={songSelectHandler} className={`library-song ${currentSong.active ? "selected" : ""}`}>
        <img src={currentSong.cover} alt={currentSong.name} />
        <div className="song-description">
            <h3>{currentSong.name}</h3>
            <h4>{currentSong.artist}</h4>
        </div>
    </div>
  )
}

export default LibrarySong;