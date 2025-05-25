import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
const rows = [
    { id: 1, name: "John Doe", age: 28 },
    { id: 2, name: "Jane Smith", age: 34 },
    { id: 3, name: "Alice Johnson", age: 22 },
     { id: 4, name: "John Doe", age: 28 },
    { id: 5, name: "Jane Smith", age: 34 },
    { id: 6, name: "Alice Johnson", age: 22 },
     { id: 7, name: "John Doe", age: 28 },
    { id: 9, name: "Jane Smith", age: 34 },
    { id: 8, name: "Alice Johnson", age: 22 }
    
];
const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "age", headerName: "Age", width: 200 }
];
export default function DataGridPremiumDemo() {
    return (
        <Box sx={{ height: 520, width: '50%', ml: 14, mb: 6 }}>
            <DataGrid rows={rows} columns={columns} columnHeaderHeight={40} rowHeight={40}
                label="DataGrid"
                disableRowSelectionOnClick disableColumnMenu disableColumnSorting disableColumnResize disableColumnFilter
                disablePivoting disableColumnPinning disableColumnSelector disableVirtualization
                showToolbar 
                initialState={{pagination: { paginationModel: { pageSize: 5 } }, }}
                pageSizeOptions={[5, 10, 25, { value: -1, label: 'All' }]}
            />
        </Box>
    );
}
