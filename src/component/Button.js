import React from 'react';

function Button(props){
    let style= {
        textTransform : "uppercase",
        width: "100%",
        minHeight: "42px",
        fontWeight: "bold",
        background: "#164396",
        color: "white",
        boxShadow: "0px 1px 3px rgba(0,0,0,0.25)",
        borderRadius: "5px",
        border: "0"
    };
    return(
    <input style={style} type="submit" value={props.title}/>
    );
}

export default Button;