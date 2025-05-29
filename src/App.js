import Appbar from "./Appbar";
import BarClick from "./barchart";
import DataGridPremiumDemo from "./DataGridPremiumDemo";
import GridToolbar from "./GridToolbar";
import Navbar from "./Navbar";

const App = () => {
  // const [value, setValue] = useState(0); // Current value for the gauge
  // const maxValue = 200; // Maximum value for the speedometer

  return (
    <>
      <Navbar />
      <Appbar />
      <DataGridPremiumDemo />
      {/* <Sidenav/> */}
      {/* <MyTable /> */}
      <GridToolbar />
      <BarClick />
      {/* <Dashboard/> */}
    </>
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