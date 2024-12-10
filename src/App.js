import React, { useState } from "react";
import Speedometer from "./Speedometer";
import MyTable from "./MyTable";

const App = () => {
  const [value, setValue] = useState(0); // Current value for the gauge
  const maxValue = 200; // Maximum value for the speedometer

  return (
    <><h1>Table Data</h1>
     
      <MyTable /></>
  );
};

export default App;






 // <><div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      //   <h1>Speedometer</h1>
      //   {/* Speedometer Component */}
      //   <Speedometer value={(value / maxValue) * 100} max={maxValue} />
      //   {/* Slider Input */}
      //   <div style={{ marginTop: "20px" }}>
      //     <input
      //       type="range"
      //       min="0"
      //       max={maxValue}
      //       value={value}
      //       onChange={(e) => setValue(Number(e.target.value))}
      //       style={{ width: "80%" }} />
      //     <p>Value: {value}</p>
      //   </div>
      // </div ></>