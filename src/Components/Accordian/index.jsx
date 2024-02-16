import { useState } from "react";
import data from "./data";

export default function Accordian() {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(currentId) {
    setSelected(currentId === selected ? null : currentId);
  }

  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => {
            return (
              <div className="item" key={dataItem.id}>
                <div
                  className="title"
                  onClick={() => handleSingleSelection(dataItem.id)}>
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {selected === dataItem.id ? (
                  <p className="content">{dataItem.answer}</p>
                ) : null}
              </div>
            );
          })
        ) : (
          <div>No Data Found !!</div>
        )}
      </div>
    </div>
  );
}
