import React, {useState} from "react";
import { links } from "../util/consts";
import { Link } from "react-router-dom";
const filterList = ["backgrounds", "feats", 'equipment', 'damage types' ];

const Home = () => {
  const [query, setQuery] = useState('')
  let newLinks = [];
  if(query){
    newLinks = links.filter((each) => each.name.includes(query.toLocaleLowerCase()))
  }else{
    newLinks = links
  }

  console.log(query);
  return (
    <section className="container home">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="search"
      />
      <ul className="links">
        {newLinks
          .filter((each) => !filterList.includes(each.name))
          .map((link, i) => {
            const { name, url } = link;
            const suburl = url.split("/")[2];
            return (
              <li key={i}>
                <Link className="linkbtn" to={`/${suburl}`}>
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
