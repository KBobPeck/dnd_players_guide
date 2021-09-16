import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Equipment = ({ equip, echoose }) => {
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
  return (
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
  );
};

export default Equipment;
