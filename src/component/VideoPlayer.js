import React from 'react';

function VideoPlayer(props) {

    let style = {
        display: 'table',
        width: '65%',
        margin: '0 auto'
    }

    return (
        <div>
            <video style={style} controls={props.controls} autoPlay={props.autoPlay}>
                <source src={props.source} type="video/mp4"/>
                    Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default VideoPlayer;
