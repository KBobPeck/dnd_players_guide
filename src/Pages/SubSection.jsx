import React from "react";
import { useParams, Link } from "react-router-dom";
import { useFetch } from "../util/useFetch";

const SubSection = () => {
  const { id } = useParams();

  const { data, loading } = useFetch(window.location.pathname);

  console.log(data);
  if (loading) {
    return <div className="loading"></div>;
  }
  return (
    <article className="container sub">
      <div className="links">
        {data.map((link, i) => {
          const { name, index } = link;

          return (
            <Link className="linkbtn" key={i} to={`/${id}/${index}`}>
              {name}
            </Link>
          );
        })}
        <Link className="btn" to="/">
          back to home
        </Link>
      </div>
    </article>
  );
};

export default SubSection;
