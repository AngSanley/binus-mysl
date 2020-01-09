import React from 'react';

function Button(props){
    const isHalf = props.isHalf;

    let style= {
        textTransform : "uppercase",
        width: (isHalf) ? "48%" : "100%",
        margin: (isHalf) ? "0% 1%" : "0",
        minHeight: "42px",
        fontWeight: "bold",
        background: props.color ? props.color : "#164396",
        color: "white",
        boxShadow: "0px 1px 3px rgba(0,0,0,0.25)",
        borderRadius: "5px",
        border: "0",
        marginBottom: "20px"
    };

    return(
    <input style={style} type={props.type} value={props.title} onClick={props.onClick}/>
    );
}

export default Button;