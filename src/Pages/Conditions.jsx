import React from "react";
import { useFetch } from "../util/useFetch";
import { Link } from "react-router-dom";

const Conditions = () => {
  const { data, loading } = useFetch(window.location.pathname);
  console.log(data);
  const { name, desc } = data;
  if (loading) {
    return <div className="loading"></div>;
  }
  return (
    <article className="container conditions">
      <div className="underline"></div>
      <div className="cond">
        <h3>{name}</h3>
        {desc.map((each) => {
          return <p>{each}</p>;
        })}
      </div>
      
      <Link className="btn" to="/conditions">
        back to Conditions
      </Link>
    </article>
  );
};

export default Conditions;
