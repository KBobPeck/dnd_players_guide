import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../util/useFetch";

const AbilityScores = () => {
  const { data, loading } = useFetch(window.location.pathname);
  console.log(data);
  const { full_name, desc, skills } = data;
  if (loading) {
    return <div className="loading"></div>;
  }
  return (
    <article className="container ability">
      <div className="title">
        <h2>{full_name}</h2>
      </div>
      <div className="underline"></div>
      <p>{desc[0]}</p>
      <h3>when to check {full_name}:</h3>
      <p>{desc[1]}</p>
      <div className="skills">
        
        <h3>Affected Skills</h3>
        {skills.length ? 
        skills.map((skill) => {
          const { name, url } = skill;
          const newURL = url.substring(4);
          console.log(newURL);
          return (
            <Link to={newURL}>
              <li>{name}</li>
            </Link>
          );
        }): <p>No Skills are effected by {full_name.toLowerCase()}</p>
        
        }
      </div>
      <Link className="btn" to="/ability-scores">
        Back to Abilities
      </Link>
    </article>
  );
};

export default AbilityScores;
