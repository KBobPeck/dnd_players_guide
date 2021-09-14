import React, { useRef } from "react";
import { useFetch } from "../util/useFetch";
import { Link } from "react-router-dom";
import Levels from "../Components/Levels";
// import Die  '../util/images/emptyDie'

const Classes = () => {
  const startRef = useRef(null);

  const handleStart = () => {
    console.log("test");
    if (startRef.current.style.height === "2rem")
      startRef.current.style.height = "auto";
    else startRef.current.style.height = "2rem";
  };

  const { data: classes, loading: loading1 } = useFetch(
    window.location.pathname
  );
  const { data: levels, loading: loading2 } = useFetch(
    `${window.location.pathname}/levels`
  );
  console.log(classes, levels);
  const {
    hit_die: hit,
    multiclassing,
    proficiencies: profs,
    proficiency_choices: pchoose,
    starting_equipment: equip,
    starting_equipment_options: echoose,
    subclasses,
    name,
  } = classes;
  if (loading1 || loading2) {
    return <div className="loading"></div>;
  }
  // if (profs.length % 2 === 1) profs.push({ name: ""
  return (
    <article className="container classes">
      <div className="top">
        <h2 className="title">{name}</h2>
        <h3 className="hit">Hit Die: d{hit}</h3>
      </div>

      <div className="proficiencies" ref={startRef}>
        <h3 onClick={handleStart}>
          Starting Proficiences (all {profs.length})
        </h3>
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
              <h3>Choose {choice.choose} of the following</h3>
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

      <Levels {...levels} />
      <Link className="btn" to="/classes">
        back to Classes
      </Link>
    </article>
  );
};
export default Classes;
