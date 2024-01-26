import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";
import  "./Screen.css"

const Screen = () => {
  const { calc } = useContext(CalcContext);

  // Determine font size based on the length of the displayed number
  const getFontSize = () => {
    const length = String(calc.num ? calc.num : calc.res).length;
    return length > 10 ? "small" : "large";
  };

  return (
    <div className={`screen ${getFontSize()}`}>
      {calc.num ? calc.num : calc.res}
    </div>
  );
};

export default Screen;
