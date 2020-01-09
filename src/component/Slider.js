import React from 'react';

function Slider(props){

    let percentage = (props.green / props.white) * 100 + '%';

    let whiteStyle = {
        height: "30px",
        width: "100%",
        backgroundColor: "whitesmoke"
    }

    let greenStyle = {
        height: "30px",
        width: percentage,
        backgroundColor: "#00D2A0",
        color: "white",
        userSelect: "none",
    }

    return(
        <div style={whiteStyle}>
            <div style={greenStyle}>
                <div style={{padding: "8px"}}>
                    {props.green}GB/{props.white}GB
                </div>
            </div>
        </div>
    )
}

export default Slider;