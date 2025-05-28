import CancelIcon from '@mui/icons-material/Cancel';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import SearchIcon from '@mui/icons-material/Search';
import { Divider, InputAdornment, Menu, MenuItem, TextField, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ExportCsv, QuickFilter, QuickFilterClear, QuickFilterControl, QuickFilterTrigger, ToolbarButton } from '@mui/x-data-grid';
import React from 'react';

const StyledQuickFilter = styled(QuickFilter)({
    display: 'grid',
    alignItems: 'center',
});

const StyledToolbarButton = styled(ToolbarButton)(({ theme, ownerState }) => ({
    gridArea: '1 / 1',
    width: 'min-content',
    height: 'min-content',
    zIndex: 1,
    opacity: ownerState.expanded ? 0 : 1,
    pointerEvents: ownerState.expanded ? 'none' : 'auto',
    transition: theme.transitions.create(['opacity']),
}));

const StyledTextField = styled(TextField)(({ theme, ownerState }) => ({
    gridArea: '1 / 1',
    overflowX: 'clip',
    width: ownerState.expanded ? 260 : 'var(--trigger-width)',
    opacity: ownerState.expanded ? 1 : 0,
    transition: theme.transitions.create(['width', 'opacity']),
}));

export default function ToolbarDatagrid() {
    const [exportMenuOpen, setExportMenuOpen] = React.useState(false);
    const exportMenuTriggerRef = React.useRef(null);
    return (
        <>
            <Divider orientation="vertical" variant="middle" flexItem sx={{ mx: 0.5 }} /><Tooltip title="Export">
                <ToolbarButton ref={exportMenuTriggerRef} id="export-menu-trigger" aria-controls="export-menu" aria-haspopup="true" aria-expanded={exportMenuOpen ? 'true' : undefined} onClick={() => setExportMenuOpen(true)}>
                    <FileDownloadIcon fontSize="small" />
                </ToolbarButton>
            </Tooltip>
            <Menu id="export-menu" anchorEl={exportMenuTriggerRef.current} open={exportMenuOpen} onClose={() => setExportMenuOpen(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} transformOrigin={{ vertical: 'top', horizontal: 'right' }} slotProps={{ list: { 'aria-labelledby': 'export-menu-trigger', }, }}>
                <ExportCsv render={<MenuItem />} onClick={() => setExportMenuOpen(false)}> Download as CSV </ExportCsv>
                {/*  getColumnsToExport={(columns) => columns.filter(col => col.field !== 'Action')}> */}
            </Menu>
            <StyledQuickFilter>
                <QuickFilterTrigger render={(triggerProps, state) => (
                    <Tooltip title="Search" enterDelay={0}>
                        <StyledToolbarButton {...triggerProps} ownerState={{ expanded: state.expanded }} color="default" aria-disabled={state.expanded}>
                            <SearchIcon fontSize="small" />
                        </StyledToolbarButton>
                    </Tooltip>
                )} />
                <QuickFilterControl render={({ ref, ...controlProps }, state) => (
                    <StyledTextField {...controlProps} ownerState={{ expanded: state.expanded }} inputRef={ref} aria-label="Search" placeholder="Search..." size="small"
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start"> <SearchIcon fontSize="small" /> </InputAdornment>),
                                endAdornment: state.value ? (
                                    <InputAdornment position="end"> <QuickFilterClear edge="end" size="small" aria-label="Clear search" material={{ sx: { marginRight: -0.75 } }}><CancelIcon fontSize="small" /></QuickFilterClear></InputAdornment>
                                ) : null,
                                ...controlProps.slotProps?.input,
                            },
                            ...controlProps.slotProps,
                        }} />
                )} />
            </StyledQuickFilter>
        </>
    )
}
