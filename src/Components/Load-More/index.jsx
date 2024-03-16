import { useState } from "react";
import "../Load-More/styles.css";

export default function LoadMore() {
  const [load, setLoad] = useState(0);

  function handleClick() {
    setLoad(load + 1);
  }
  return (
    <div className="loadMore_Container">
      <div className="loadMore" onClick={handleClick}>
        {load}
        <button>Click</button>
      </div>
    </div>
  );
}
