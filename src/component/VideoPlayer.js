import React from 'react';

function VideoPlayer(props) {

    return (
        <div>
            <video controls={props.controls} autoPlay={props.autoPlay}>
                <source src={props.source} type="video/mp4"/>
                    Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default VideoPlayer;
