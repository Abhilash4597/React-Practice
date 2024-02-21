import { useState } from "react";
import "./styles.css";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColor(arrLength) {
    return Math.floor(Math.random() * arrLength);
  }

  function handleCreateRandomColorHex() {
    const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      const randomIndex = randomColor(hexArr.length);
      hexColor += hexArr[randomIndex];
    }

    setColor(hexColor);
  }

  function handleCreateRandomColorRGB() {
    const r = randomColor(256);
    const g = randomColor(256);
    const b = randomColor(256);

    setColor(`rgb${r},${g},${b}`);
  }

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <div>
        <button
          onClick={() => {
            setTypeOfColor("hex");
          }}>
          Create HEX Color
        </button>
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
      <div>
        <button
          onClick={() => {
            setTypeOfColor("rgb");
          }}>
          Create RGB Color
        </button>
        <span></span>
      </div>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomColorHex
            : handleCreateRandomColorRGB
        }>
        Create Random Color
      </button>
    </div>
  );
}
