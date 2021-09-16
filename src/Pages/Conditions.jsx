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
      <h3>{name}</h3>
      <div className="underline"></div>
      <ul>
        {desc.map((each, i) => {
          const list = each
            .split("")
            .filter((each) => each !== "-")
            .join("")
            .trim();
          console.log(Number(list[0]));
          if (isNaN(list[0])) {
            return <li key={i}>{list}</li>;
          } else {
            return (
              <li key={i} className="numerical">
                <span>{list.substring(0, 1)}:</span> {list.substring(1)}
              </li>
            );
          }
        })}
      </ul>

      <Link className="btn" to="/conditions">
        back to Conditions
      </Link>
    </article>
  );
};

export default Conditions;
