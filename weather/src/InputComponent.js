import React, { useState } from "react";

function InputComponent(props){
    const [input, setInput] = useState("");

    const handleClick = (e)=>{
        props.getWeatherDetails(input)
        setInput('');
    }

    const handleEnter = (e) =>{
        if(e.key === "Enter"){
            props.getWeatherDetails(input)
            setInput('')
        }
    }

    return(
        <div>
            <input type="text" 
            placeholder="Enter your city name" 
            onChange={(e)=>{
                setInput(e.target.value)
            }}
            onKeyDown={handleEnter}
            value={input} />

            <button onClick={handleClick} className="btn"><i class="fa fa-search"></i></button>
        </div>
    )
}

export default InputComponent;