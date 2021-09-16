import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../util/useFetch";

const Alignments = () => {
  const { data, loading } = useFetch(window.location.pathname);
  console.log(data);
  const { name, desc } = data;
  if (loading) {
    return <div className="loading"></div>;
  }
  return (
    <article className="container alignments">
      <h2>{name}</h2>
      <div className="underline"></div>
      <p>{desc}</p>
      <Link className="btn" to="/alignments">
        back to Alignments
      </Link>
    </article>
  );
};

export default Alignments;
