import { faAngleLeft, faAngleRight, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';

const Player = ({currentSong, isPlaying, setIsPlaying}) => {

    const audioRef = useRef(null);
    const playSongHandler = () => {
        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        }else{
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };
    // state
    const [songInfo, setSongInfo] = useState({
        currentTime: null,
        duration: null
    });

    const onTimeHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({...songInfo, currentTime: current, duration: duration});
    };

    const getTime = (time) => {
        return(
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }

  return (
    <div className='player'>
        <div className="time-control">
            <p>{getTime(songInfo.currentTime)}</p>
            <input type="range" />
            <p>{getTime(songInfo.duration)}</p>
        </div>
        <div className="play-control">
            <FontAwesomeIcon className='skip-back' size='2x' icon={faAngleLeft} />
            <FontAwesomeIcon onClick={playSongHandler} className='play' size='2x' icon={faPlay} />
            <FontAwesomeIcon className='skip-right' size='2x' icon={faAngleRight} />
        </div>
        <audio onLoadedMetadata={onTimeHandler} onTimeUpdate={onTimeHandler} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  )
}

export default Player;