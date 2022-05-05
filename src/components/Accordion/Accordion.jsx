import React, { useRef, useState } from 'react'
import './Accordion.css'
import Chevron from './Chevron';
const Accordion = (props) => {

    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion__icon");
    const [setOverflow, setOverflowState] = useState("none");
    const content = useRef(null);



    function toggleAccordion(){
      setActiveState(setActive === "" ? "active" : "");

      setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight+40}px`);

      setRotateState(
        setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
      );

      setOverflowState(setOverflow === "" ? "setOverflow" : "");
    
  
    }


  return (
    <div className="accordion__section">

        <button className={`accordion ${setActive}`}
                onClick={toggleAccordion}
                >
      
            <p className="accordion__title">{props.title}</p>
      
            <Chevron className={`${setRotate}`}  width={10} fill={"#777"} />
      
        </button>

        <div ref={content} style={{maxHeight:`${setHeight}`, overflow:`${setOverflow}` } } className="accordion__content">
        
            <div className="accordion__text `${setOverflow}` " > {props.content}</div>

            <button className='accordion_button'> Download</button>
        </div>
    
    </div>
  )
}

export default Accordion;