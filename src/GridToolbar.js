import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Button, Typography } from '@mui/material';
import { DataGrid, Toolbar, } from '@mui/x-data-grid';
import ToolbarDatagrid from './ToolbarDatagrid';
import { useState } from 'react';
function CustomToolbar({ rows }) {
  return (
    <Toolbar>
      <Typography fontWeight="medium" sx={{ flex: 1, mx: 0.5 }}>Toolbar</Typography>
      <Button variant="contained" fontsize='small' disabled={rows.length > 0}>
        Pull work
      </Button>
      <ToolbarDatagrid />
    </Toolbar>
  );
}
export default function GridToolbar() {
    const columns = [
        { field: 'Action', headerName: 'Action', width: 90,  renderCell: (params) => (   <FiberManualRecordIcon color="primary" />), },
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'firstName', headerName: 'First name', width: 150 },
        { field: 'lastName', headerName: 'Last name', width: 150 },
        { field: 'age', headerName: 'Age', type: 'number', width: 110 },
        { field: 'fullName', headerName: 'Full name', width: 160 },
    ];
    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, fullName: 'Jon Snow' },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, fullName: 'Cersei Lannister' },
        // Add more rows
    ];
    return (
        <div style={{ height: 400, width: '100%', margin: 5 }}>
            <DataGrid rows={rows} columns={columns}
                slots={{ toolbar: () => <CustomToolbar rows={rows} /> }}
                showToolbar
            />
        </div>
    );
}
