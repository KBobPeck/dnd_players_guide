import React from "react";
import { useFetch } from "../util/useFetch";
import { Link } from "react-router-dom";

const MagicItem = () => {
  const { data, loading } = useFetch(window.location.pathname);
  console.log(data);

  const { name, desc } = data;
  if (loading) {
    return <div className="loading"></div>;
  }
  return (
    <article className="container magic-item">
      <div className="header">
        <h2 className="title">{name}</h2>
      </div>
      <div className="underline"></div>
      <h4>{desc[0]}</h4>
      <ul>
        {/* {desc.slice(1).map((each, i) => {
          return <li key={i}>{each}</li>;
        })} */}
        {desc.slice(1).map((each, i) => {
          // console.log(each.split("|").join("").trim());
          // console.log(Number(list[0]));
          const list = each.split("|").join("").trim();
          //this is to account for every type of data
          //accounts for dice rolls (i.e d100)
          console.log(list.startsWith("*"));
          if (list.split("")[0] === "d") {
            return (
              <li key={i} className="dice">
                {list}
              </li>
            );

            //statuses like curse are added with *** around them
          } else if (list.startsWith("***")) {
            let status = list.split("***").join("").split(".")[0];
            let text = list.split(".***")[1];

            return (
              <li key={i} className="status">
                <span>{status}:</span> {text}
              </li>
            );

            //status bonuses start with *
          } else if (list.startsWith("*")) {
            let status = list.split("* ")[1];
            console.log(list.split("* "));

            return (
              <li key={i} className="status">
                <span>Bonus: </span>
                {status}
              </li>
            );

            //removes |--|--| and replaces it with an underline
          } else if (list.split("")[0] === "-") {
            return <div className="underline"></div>;
            //if there is just letters its added normally
          } else if (isNaN(list[0])) {
            return <li key={i}>{list}</li>;

            //if it starts with a number then we seperate the numbers
            //for styling and
          } else {
            let nums = list.split(" ")[0];
            let restNums = list.split(" ").slice(1).join(" ");
            return (
              <li key={i} className="numerical">
                <span>{nums}:</span> {restNums}
              </li>
            );
          }
        })}
      </ul>
      <Link className="btn" to="/magic-items">
        back to Magic Items
      </Link>
    </article>
  );
};

export default MagicItem;
