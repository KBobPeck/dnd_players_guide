import React, { useRef, useState } from "react";
import { useFetch } from "../util/useFetch";
import { Link } from "react-router-dom";
import Levels from "../Components/Levels";
// import Die  '../util/images/emptyDie'

const Classes = () => {
  // size changing for proficiencies
  const startRef = useRef(null);
  const [startPlus, setStartPlus] = useState(true);

  const handleStart = () => {
    // console.log(startRef.current.style.height);
    if (startRef.current.style.height === "auto") {
      setStartPlus(true);
      startRef.current.style.height = "2rem";
    } else {
      setStartPlus(false);
      startRef.current.style.height = "auto";
    }
  };

  //size changing for equipment
  const equipRef = useRef(null);
  const [equipPlus, setEquipPlus] = useState(true);

  const handleEquip = () => {
    // console.log(equipRef.current.style.height);
    if (equipRef.current.style.height === "auto") {
      setEquipPlus(true);
      equipRef.current.style.height = "2rem";
    } else {
      setEquipPlus(false);
      equipRef.current.style.height = "auto";
    }
  };

  //size changing for Multiclass
  const multiRef = useRef(null);
  const [multiPlus, setMultiPlus] = useState(true);
  const handleMulti = () => {
    // console.log(equipRef.current.style.height);
    if (multiRef.current.style.height === "auto") {
      setMultiPlus(true);
      multiRef.current.style.height = "2rem";
    } else {
      setMultiPlus(false);
      multiRef.current.style.height = "auto";
    }
  };

  const { data: classes, loading: loading1 } = useFetch(
    window.location.pathname
  );
  const { data: levels, loading: loading2 } = useFetch(
    `${window.location.pathname}/levels`
  );
  console.log(classes, levels);
  const {
    hit_die: hit,
    multi_classing,
    proficiencies: profs,
    proficiency_choices: pchoose,
    starting_equipment: equip,
    starting_equipment_options: echoose,
    subclasses,
    saving_throws,
    name,
  } = classes;
  if (loading1 || loading2) {
    return <div className="loading"></div>;
  }
  // if (profs.length % 2 === 1) profs.push({ name: ""
  return (
    <article className="container classes">
      <div className="top">
        <h2 className="title">{name}</h2>
      </div>
      <div className="underline"></div>
      <div className="saving">
        <h3>Saving Throws</h3>
        <div className="stats">
          {saving_throws.map((each) => {
            return (
              <Link to={`/ability-scores/${each.index}`}>{each.name}</Link>
            );
          })}
        </div>
      </div>

      <div className="hit">
        <h3>Hit Die</h3>
        <p>D{hit}</p>
      </div>
      <div className="underline"></div>

      <div className="multiclass" ref={multiRef}>
        <h3 onClick={handleMulti}>Multi Class {multiPlus ? "+" : "-"}</h3>
        <h4>Prerequisites</h4>
        <div className="flex-row titles">
          <h5 className="border-right">Ability Score</h5>
          <h5 className="">Minimum Score</h5>
        </div>
        <ul>
          {multi_classing.prerequisites.map((each) => {
            // each is each prereq with ability_score (STR)
            // and minimum_score (13)
            <li className="flex-row">
              <Link></Link>
            </li>;
          })}
        </ul>
      </div>
      <div className="underline"></div>

      <div className="proficiencies" ref={startRef}>
        <h3 onClick={handleStart}>Proficiencies {startPlus ? "+" : "-"}</h3>
        <h4>Starting Proficiences (all {profs.length})</h4>
        <ul>
          {profs.map((prof, i) => {
            const { name, index } = prof;
            return (
              <li key={i}>
                <Link to={`/proficiencies/${index}`}>{name}</Link>
              </li>
            );
          })}
        </ul>

        {pchoose.map((choice, i) => {
          return (
            <div key={i} className="choices">
              <h4>Choose {choice.choose} of the following</h4>
              <ul>
                {choice.from.map((each, i) => {
                  const { name, index } = each;
                  return (
                    <li key={i}>
                      <Link to={`/proficiencies/${index}`}>{name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="underline"></div>

      <div className="equip" ref={equipRef}>
        <h3 onClick={handleEquip}>Equipment {equipPlus ? "+" : "-"}</h3>
        <h4>Starting Equiment (all {equip.length})</h4>
        <ul>
          {equip.map((each, i) => {
            const { equipment, quantity } = each;
            return (
              <li key={i}>
                <Link to={`/equiment/${equipment.index}`}>
                  <div>
                    {equipment.name} ({quantity})
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* starting_equipment_options 
          has choose type from
        */}
        {echoose.map((choice, i) => {
          const { choose, from } = choice;
          // console.log(from);
          return (
            <div key={i} className="choices">
              {from[0].equipment_category ? (
                <h4>Choose an item from {from[0].equipment_category.name}</h4>
              ) : (
                <h4>Choose {choose} of the following</h4>
              )}

              <ul>
                {/*[from] an array with all the options per choice
                  if equipment has index , name
                  if equipment_option has choose, from 
                  ifequipment_category has index, name
                */}
                {from.map((each, i) => {
                  // console.log(each);
                  if (each.equipment_option) {
                    const { equipment_option } = each;
                    const { choose, from } = equipment_option;
                    // console.log(each);
                    return (
                      <li>
                        <Link
                          key={i}
                          to={`/equipment-categories/${from.equipment_category.index}`}
                        >
                          {choose} from {from.equipment_category.name}
                        </Link>
                      </li>
                    );
                  } else if (each[0]) {
                    let arr = [];
                    for (const [key, value] of Object.entries(each)) {
                      arr.push(value);
                    }
                    return (
                      <div className="test">
                        <h5 style={{ textAlign: "center" }}>both</h5>
                        <ul>
                          {arr.map((item) => {
                            console.log(arr);
                            if (item.equipment) {
                              return (
                                <li>
                                  <Link
                                    key={i}
                                    to={`/equipment/${item.equipment.index}`}
                                  >
                                    {item.equipment.name} ({item.quantity})
                                  </Link>
                                </li>
                              );
                            } else {
                              return (
                                <li>
                                  <Link
                                    key={i}
                                    to={`/equipment-categories/${item.equipment_option.from.equipment_category.index}`}
                                  >
                                    {item.equipment_option.choose} from{" "}
                                    {
                                      item.equipment_option.from
                                        .equipment_category.index
                                    }
                                  </Link>
                                </li>
                              );
                            }
                          })}
                        </ul>
                        <h5 style={{ textAlign: "center" }}>or</h5>
                      </div>
                    );
                  } else if (each.equipment_category) {
                    const { equipment_category } = each;
                    const { index, name } = equipment_category;
                    return (
                      <li key={i}>
                        <Link to={`/equipment/${index}`}>{name}</Link>
                      </li>
                    );
                  } else {
                    const { equipment, quantity } = each;
                    const { index, name } = equipment;
                    return (
                      <li key={i}>
                        <Link to={`/equipment/${index}`}>
                          {name} ({quantity})
                        </Link>
                      </li>
                    );
                  }

                  // const { name, index } = each;
                  // return (
                  //   <li key={i}>
                  //     <Link to={`/proficiencies/${index}`}>{name}</Link>
                  //   </li>
                  // );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      <Levels {...levels} />
      <Link className="btn" to="/classes">
        back to Classes
      </Link>
    </article>
  );
};
export default Classes;
