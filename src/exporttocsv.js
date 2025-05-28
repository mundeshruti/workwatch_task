function exportToCsv(columns, rows, fileName = 'data.csv') {
    // Filter out the 'Action' column
    const filteredColumns = columns.filter(col => col.field !== 'Action');
    const headers = filteredColumns.map(col => col.headerName || col.field).join(',');

    const data = rows.map(row =>
        filteredColumns.map(col => {
            const value = row[col.field];
            return typeof value === 'string' ? `"${value.replace(/"/g, '""')}"` : value;
        }).join(',')
    );

    const csvContent = [headers, ...data].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
