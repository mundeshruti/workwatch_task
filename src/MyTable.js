import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Paper,
  Menu,
  MenuItem,
  Card,
} from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import TimerIcon from "@mui/icons-material/Timer";
import HighPriorityIcon from "@mui/icons-material/PriorityHigh";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const data = [
  {
    timer: true,
    priority: "p2",
    caseId: "C001",
    receivedDate: "2024-12-01",
    workType: "Type A",
    targetDate: "2024-12-15",
  },
  {
    timer: true,
    priority: "p1",
    caseId: "C002",
    receivedDate: "2024-12-02",
    workType: "Type B",
    targetDate: "2024-12-16",
  },
];

const MyTable = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCaseId, setSelectedCaseId] = useState(null);

  const handleMenuOpen = (event, caseId) => {
    setAnchorEl(event.currentTarget);
    setSelectedCaseId(caseId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedCaseId(null);
  };

  const handleAction = (action) => {
    alert(`${action} selected for Case ID: ${selectedCaseId}`);
    handleMenuClose();
  };

  return (
    <Card elevation={false}>
    <TableContainer component={Paper} elevation={false}>
      <Table elevation={false}>
        <TableHead>
          <TableRow sx={{backgroundColor:"greenyellow"}}>
            <TableCell><TimerIcon/></TableCell>
            <TableCell><HighPriorityIcon /></TableCell>
            <TableCell>Case ID</TableCell>
            <TableCell>Received Date</TableCell>
            <TableCell>Work Type</TableCell>
            <TableCell>Target Date</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.timer && <CircleIcon fontSize="small" sx={{color:"orange"}}/>}</TableCell>
              <TableCell>{row.priority}</TableCell>
              <TableCell>{row.caseId}</TableCell>
              <TableCell>{row.receivedDate}</TableCell>
              <TableCell>{row.workType}</TableCell>
              <TableCell>{row.targetDate}</TableCell>
              <TableCell>
                <IconButton onClick={(event) => handleMenuOpen(event, row.caseId)}>
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={() => handleAction("View")}>View</MenuItem>
                  <MenuItem onClick={() => handleAction("Cut")}>Cut</MenuItem>
                  <MenuItem onClick={() => handleAction("Paste")}>Paste</MenuItem>
                </Menu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
      </Card>
  );
};

export default MyTable;
