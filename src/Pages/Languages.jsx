import React from "react";
import { useFetch } from "../util/useFetch";
import { Link } from "react-router-dom";

const Languages = () => {
  const { data, loading } = useFetch(window.location.pathname);
  console.log(data);
  const { name, desc, type, script, typical_speakers } = data;
  if (loading) {
    return <div className="loading"></div>;
  }
  return (
    <article className="container languages">
      <div className="title">
        <h4>{type}</h4>
        <h2>{name}</h2>
        <div className="underline"></div>
      </div>
      <p>{desc ? desc : "No description given"}</p>
      <h3>Spoken by:</h3>
      <ul>{typical_speakers.map((each, i) => {
        return <li key={i}>{each}</li>
      })}</ul>
      <Link className="btn" to="/languages">
        back to Languages
      </Link>
    </article>
  );
};

export default Languages;
