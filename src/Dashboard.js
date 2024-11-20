import React, { useState } from "react";
import "./Dashboard.css"; // Add custom styling here

const Dashboard = () => {
  const [tasks, setTasks] = useState([
    { id: "CASE54", priority: "P3", receivedDate: "29-Jul-2024 11:40 AM", targetDate: "05-Aug-2024 12:00 PM", stage: "Quality", status: "Sent for QC", uniqueId: "UQID-100000", parentCaseId: "Spaji Augst-13" },
    { id: "CASE57", priority: "P3", receivedDate: "01-Aug-2024 9:52 AM", targetDate: "08-Aug-2024 12:00 PM", stage: "Quality", status: "Sent for QC", uniqueId: "Spaji Augst-13", parentCaseId: "CASE-IN" },
    { id: "CASE152", priority: "P3", receivedDate: "12-Aug-2024 10:02 AM", targetDate: "21-Aug-2024 12:00 PM", stage: "Processing", status: "New", uniqueId: "", parentCaseId: "" },
    { id: "CASE153", priority: "P3", receivedDate: "12-Aug-2024 10:02 AM", targetDate: "22-Aug-2024 12:00 PM", stage: "Processing", status: "New", uniqueId: "", parentCaseId: "" },
  ]);

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>WorkWatch - Team A</h1>
      </header>
      <div className="dashboard-stats">
        <div className="stat-box">Rework/Error: <span>0</span></div>
        <div className="stat-box">Processed: <span>0</span></div>
        <div className="stat-box">Rejected: <span>0</span></div>
        <div className="stat-box">Pending: <span>0</span></div>
      </div>
      <div className="productivity-utilization">
        <div className="gauge">
          <h3>Productivity</h3>
          <div className="gauge-meter">60%</div>
        </div>
        <div className="gauge">
          <h3>Utilization</h3>
          <div className="gauge-meter">No data</div>
        </div>
      </div>
      <div className="task-table">
        <h3>Outstanding Cases (4 SLA)</h3>
        <table>
          <thead>
            <tr>
              <th>Priority</th>
              <th>Case ID</th>
              <th>Received Date</th>
              <th>Target Date</th>
              <th>Stage</th>
              <th>Status</th>
              <th>Unique ID</th>
              <th>Parent Case ID</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.priority}</td>
                <td>{task.id}</td>
                <td>{task.receivedDate}</td>
                <td>{task.targetDate}</td>
                <td>{task.stage}</td>
                <td>{task.status}</td>
                <td>{task.uniqueId}</td>
                <td>{task.parentCaseId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
