import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Speedometer = ({ value, max }) => {
  // Calculate percentage
  const percentage = (value / max) * 100;

  // Define chart data with colored zones
  const data = {
    datasets: [
      {
        data: [50, 50, 100], // Split into red, orange, and green zones
        backgroundColor: ["#FF0000", "#FFA500", "#00FF00"], // Red, Orange, Green
        hoverBackgroundColor: ["#FF0000", "#FFA500", "#00FF00"],
        borderWidth: 0,
        rotation: 270, // Start at the bottom
        circumference: 180, // Create a half-circle
        cutout: "70%", // Inner cutout radius
      },
    ],
  };

  // Options to configure the speedometer
  const options = {
    responsive: true,
    plugins: {
      tooltip: { enabled: false }, // Disable tooltips
      legend: { display: false }, // Hide legend
    },
  };

  // Pointer rotation calculation
  const pointerRotation = (percentage / 100) * 180;

  return (
    <div style={{ position: "relative", width: "300px", height: "150px", margin: "0 auto" }}>
      {/* Speedometer chart */}
      <Doughnut data={data} options={options} />

      {/* Pointer */}
      <div
        style={{
          position: "absolute",
          width: "2px",
          height: "60%",
          backgroundColor: "#FFA500", // Pointer color
          transformOrigin: "bottom center",
          transform: `rotate(${pointerRotation}deg)`,
          top: "50%",
          left: "50%",
          zIndex: 2,
        }}
      ></div>

      {/* Centered value */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        {value.toFixed(2)}%
      </div>
    </div>
  );
};

export default Speedometer;
