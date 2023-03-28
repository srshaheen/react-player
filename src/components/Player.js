import { faAngleLeft, faAngleRight, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';

const Player = ({currentSong, songs, setSongs, setCurrentSong, isPlaying, setIsPlaying, audioRef, songInfo, setSongInfo}) => {

    useEffect(() => {
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
    }, [currentSong])

    const playSongHandler = () => {
        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        }else{
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };

    //useeffect
    // state
    const getTime = (time) => {
        return(
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    };

    //drag
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value});
    }

    const skipSongHandler = (direction) => {
        const currentIndex = songs.findIndex((song) => song.id === currentSong.id)
        if(direction === "skip-back"){
            if((currentIndex - 1) % songs.length === -1){
                setCurrentSong(songs[songs.length - 1]);
                return;
            }
            setCurrentSong(songs[(currentIndex - 1) % songs.length]);
        }else if(direction === "skip-forward"){
            setCurrentSong(songs[(currentIndex + 1) % songs.length]);
        }
    }

  return (
    <div className='player'>
        <div className="time-control">
            <p>{getTime(songInfo.currentTime)}</p>
            <input min={0} max={songInfo.duration || 0} value={songInfo.currentTime} onChange={dragHandler} type="range" />
            <p>{getTime(songInfo.duration)}</p>
        </div>
        <div className="play-control">
            <FontAwesomeIcon onClick={() => skipSongHandler("skip-back")} className='skip-back' size='2x' icon={faAngleLeft} />
            <FontAwesomeIcon onClick={playSongHandler} className='play' size='2x' icon={isPlaying ? faPause : faPlay} />
            <FontAwesomeIcon onClick={() => skipSongHandler("skip-forward")} className='skip-right' size='2x' icon={faAngleRight} />
        </div>
    </div>
  )
}

export default Player;