import React, { useRef, useState } from "react";
import { useFetch } from "../util/useFetch";
import { Link } from "react-router-dom";
import Levels from "../Components/Levels";
import Proficiencies from "../Components/classesComps/Proficiencies";
import MultiClass from "../Components/classesComps/MultiClass";
import Equipment from "../Components/classesComps/Equipment";
// import Die  '../util/images/emptyDie'

const Classes = () => {
  

 


  const { data: classes, loading: loading1 } = useFetch(
    window.location.pathname
  );
  const { data: levels, loading: loading2 } = useFetch(
    `${window.location.pathname}/levels`
  );
  console.log(classes, levels);
  const {
    hit_die: hit,
    multi_classing,
    proficiencies: profs,
    proficiency_choices: pchoose,
    starting_equipment: equip,
    starting_equipment_options: echoose,
    subclasses,
    saving_throws,
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
      </div>
      <div className="underline"></div>
      <div className="saving">
        <h3>Saving Throws</h3>
        <div className="stats">
          {saving_throws.map((each) => {
            return (
              <Link to={`/ability-scores/${each.index}`}>{each.name}</Link>
            );
          })}
        </div>
      </div>

      <div className="hit">
        <h3>Hit Die</h3>
        <p>D{hit}</p>
      </div>
      <div className="underline"></div>

      <MultiClass multi_classing={multi_classing}/>

      <div className="underline"></div>

      <Proficiencies profs={profs} pchoose={pchoose}/>
      
      <div className="underline"></div>

      <Equipment echoose={echoose} equip={equip}/>

      <Levels {...levels} />
      <Link className="btn" to="/classes">
        back to Classes
      </Link>
    </article>
  );
};
export default Classes;
