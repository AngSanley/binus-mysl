import React from 'react';

function TextInput(props) {
    const isBig = props.isBig;

    let style = {
        display: "block",
        minHeight: "42px",
        width: "100%",
        textTransform: "uppercase",
        border: "1px solid rgba(0, 0, 0, 0.8)",
        boxSizing: "border-box",
        marginBottom: "20px",
        textSize: "16px !important"
    };

    if(isBig){
        return (
            <textarea style={style} rows="5" cols="50" placeholder={props.placeholder}></textarea>
        )
    }
    else {return (
        <input style={style} type={props.type} name={props.name} placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
    );}
}

export default TextInput;