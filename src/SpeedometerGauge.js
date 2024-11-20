import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const SpeedometerGauge = ({ value, max }) => {
  // Calculate percentage
  const percentage = (value / max) * 100;

  // Define chart data
  const data = {
    datasets: [
      {
        data: [value, max - value], // Active vs inactive values
        backgroundColor: ["#FF6F61", "#E0E0E0"], // Red for active, grey for inactive
        hoverBackgroundColor: ["#FF6F61", "#E0E0E0"], // Same colors on hover
        borderWidth: 0,
        rotation: 270, // Start at the bottom
        circumference: 180, // Half-circle
        cutout: "70%", // Inner radius
      },
    ],
  };

  // Define chart options
  const options = {
    responsive: true,
    plugins: {
      tooltip: { enabled: false }, // Disable tooltips
      legend: { display: false }, // Hide legend
    },
  };

  return (
    <div style={{ position: "relative", width: "300px", margin: "0 auto" }}>
      {/* The speedometer */}
      <Doughnut data={data} options={options} />

      {/* Centered text */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "22px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {percentage.toFixed(2)}%
      </div>
    </div>
  );
};

export default SpeedometerGauge;
