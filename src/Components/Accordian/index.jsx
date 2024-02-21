import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiSelection, setMultiSelection] = useState([]);

  function handleSingleSelection(currentId) {
    setSelected(currentId === selected ? null : currentId);
  }

  function handleMultiSelection(currentId) {
    let copyMultiple = [...multiSelection];
    let findIndexOfCurrentId = copyMultiple.indexOf(currentId);

    if (findIndexOfCurrentId === -1) {
      copyMultiple.push(currentId);
    } else {
      copyMultiple.splice(findIndexOfCurrentId, 1);
    }

    setMultiSelection(copyMultiple);
  }

  return (
    <div className="wrapper">
      <button
        onClick={() => {
          setEnableMultiSelection(!enableMultiSelection);
        }}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => {
            return (
              <div className="item" key={dataItem.id}>
                <div
                  className="title"
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }>
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {selected === dataItem.id ||
                multiSelection.indexOf(dataItem.id) !== -1 ? (
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
