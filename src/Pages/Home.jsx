import React from "react";
import { links } from "../util/consts";
import { Link } from "react-router-dom";
const filterList = ['backgrounds', 'feats', 'equipment']

const Home = () => {
  return (
    <section className="container home">
      <ul className="links">
        {links
        .filter((each) => !filterList.includes(each.name) )
        .map((link, index) => {
          const { name, url } = link;
          const suburl = url.split("/")[2];
          return (
            <li className="link">
              <Link to={`/${suburl}`} key={index}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Home;
