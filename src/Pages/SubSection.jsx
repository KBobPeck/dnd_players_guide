import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useFetch } from "../util/useFetch";

const SubSection = () => {
  const { id } = useParams();
  const { data, loading } = useFetch(window.location.pathname);
  const [query, setQuery] = useState("");

  // console.log(window.location.pathname);
  console.log(data);
  let pageName = window.location.pathname;
  pageName = pageName.split("/");
  pageName = pageName[pageName.length - 1].split("-").join(" ");
  console.log(pageName);
  // .split("-")
  // .join(" ")
  // .split("")
  // .filter((each) => each !== "/")
  // .join("");

  if (loading) {
    return <div className="loading"></div>;
  }
  let newData = [];
  if (query) {
    newData = data.filter((each) =>
      each.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    );
  } else {
    newData = data;
  }

  return (
    <article className="container sub">
      {/* <div className="header"> */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={`search ${pageName}`}
      />

      <h3 className="page-name">{pageName}</h3>
      {/* </div> */}
      <div className="links">
        {newData.length
          ? newData.map((link, i) => {
              const { name, index } = link;
              return (
                <Link className="linkbtn" key={i} to={`/${id}/${index}`}>
                  {name}
                </Link>
              );
            })
          : "No Results Found"}
        <Link className="btn" to="/">
          back to home
        </Link>
      </div>
    </article>
  );
};

export default SubSection;
