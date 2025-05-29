import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import * as React from 'react';

import { BarChart } from '@mui/x-charts/BarChart';
import DownloadPNG from './DownloadPNG';

// import { HighlightedCode } from '@mui/docs/HighlightedCode';

const barChartsParams = {
    series: [
        {
            id: 'series-1',
            data: [3, 4, 1, 6, 5],
            label: 'A',
            stack: 'total',
            highlightScope: {
                highlight: 'item',
            },
        },
        {
            id: 'series-2',
            data: [4, 3, 1, 5, 8],
            label: 'B',
            stack: 'total',
            highlightScope: {
                highlight: 'item',
            },
        },
        {
            id: 'series-3',
            data: [4, 2, 5, 4, 1],
            label: 'C',
            highlightScope: {
                highlight: 'item',
            },
        },
    ],
    xAxis: [{ data: ['0', '3', '6', '9', '12'], id: 'axis1' }],
    height: 400,
};

export default function BarClick() {
    const [itemData, setItemData] = React.useState();
    const [axisData, setAxisData] = React.useState();
    const chartRef = React.useRef(null);

    return (

        <>
            <Box sx={{ margin: 10 }}>
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={{ xs: 0, md: 4 }}
                    sx={{ width: '100%' }}
                >
                    <Box sx={{ position: 'relative', flexGrow: 1 }}>
                        {/* Chart Area: This is what will be captured */}
                        <Box ref={chartRef}>
                            <BarChart
                                {...barChartsParams}
                                onItemClick={(event, d) => setItemData(d)}
                                onAxisClick={(event, d) => setAxisData(d)}
                            />
                        </Box>

                        {/* Download Button: Positioned absolutely, OUTSIDE chartRef */}
                        <Box sx={{ position: 'absolute', top: 0, right: 0, zIndex: 10, m: 1 }}>
                            <DownloadPNG targetRef={chartRef} filename="bar-chart" />
                        </Box>
                    </Box>
                </Stack>
            </Box>
        </>
    );
}
