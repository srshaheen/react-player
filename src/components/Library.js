import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus}) => {
    const selectSongHandler = () => {
        
    }
  return (
    <div onClick={selectSongHandler} className={`library ${libraryStatus ? "active": ""}`}>
        <h1>Library</h1>
        <div className="librarySongs">
            {songs.map((song) => (
                <LibrarySong setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef} key={song.id} setCurrentSong={setCurrentSong} songs={songs} currentSong={song}/>
            ))}
            
        </div>
    </div>
  )
}

export default Library;