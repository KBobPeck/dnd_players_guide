import React from "react";
import { useFetch } from "../util/useFetch";
import { Link } from "react-router-dom";
import Levels from "../Components/Levels";
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
  return (
    <article className="container classes">
      <div className="top">
        <h2 className="title">{name}</h2>
        <h3 className="hit">
        Hit Die: d{hit}
        </h3>
      </div>

      <div className="proficiencies">
        <h3>Starting Proficiences</h3>
        {profs.map((prof, i ) => {
          const {name, index} = prof;
          return (
            <Link key={i} to='/proficiencies/shields' >
              {name}
            </Link>
          )
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
