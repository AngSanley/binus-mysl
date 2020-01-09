import React from 'react';

function AudioPlayer(props) {

    return (
        <div>
            <audio controls={props.controls}>
                <source src={props.source} type={props.type} autoPlay={props.autoPlay}/>
                Your browser does not support the audio element.
            </audio>
        </div>
    );
}

export default AudioPlayer;
