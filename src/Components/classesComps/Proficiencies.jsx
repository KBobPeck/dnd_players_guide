import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
const Proficiencies = ({profs, pchoose}) => {
  // size changing for proficiencies
  const startRef = useRef(null);
  const [startPlus, setStartPlus] = useState(true);

  const handleStart = () => {
    // console.log(startRef.current.style.height);
    if (startRef.current.style.height === "auto") {
      setStartPlus(true);
      startRef.current.style.height = "2rem";
    } else {
      setStartPlus(false);
      startRef.current.style.height = "auto";
    }
  };
  return <div className="proficiencies" ref={startRef}>
  <h3 onClick={handleStart}>Proficiencies {startPlus ? "+" : "-"}</h3>
  <h4>Starting Proficiences (all {profs.length})</h4>
  <ul>
    {profs.map((prof, i) => {
      const { name, index } = prof;
      return (
        <li key={i}>
          <Link to={`/proficiencies/${index}`}>{name}</Link>
        </li>
      );
    })}
  </ul>

  {pchoose.map((choice, i) => {
    return (
      <div key={i} className="choices">
        <h4>Choose {choice.choose} of the following</h4>
        <ul>
          {choice.from.map((each, i) => {
            const { name, index } = each;
            return (
              <li key={i}>
                <Link to={`/proficiencies/${index}`}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  })}
</div>
};

export default Proficiencies;
