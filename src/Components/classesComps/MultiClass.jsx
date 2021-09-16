import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom';

const MultiClass = ({multi_classing}) => {
    //size changing for Multiclass
    const multiRef = useRef(null);
    const [multiPlus, setMultiPlus] = useState(true);
    const handleMulti = () => {
      // console.log(equipRef.current.style.height);
      if (multiRef.current.style.height === "auto") {
        setMultiPlus(true);
        multiRef.current.style.height = "2rem";
      } else {
        setMultiPlus(false);
        multiRef.current.style.height = "auto";
      }
    };
  
  return (
    <div className="multiclass" ref={multiRef}>
        <h3 onClick={handleMulti}>Multi Class {multiPlus ? "+" : "-"}</h3>
        <h4>Prerequisites</h4>
        <div className="flex-row titles">
          <h5 className="border-right">Ability Score</h5>
          <h5 className="">Minimum Score</h5>
        </div>
        <ul>
          {multi_classing.prerequisites.map((each) => {
            // each is each prereq with ability_score (STR)
            // and minimum_score (13)
            <li className="flex-row">
              <Link></Link>
            </li>;
          })}
        </ul>
      </div>
  )
}

export default MultiClass
