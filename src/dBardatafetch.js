import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { BarChart } from '@mui/x-charts/BarChart';
import { useEffect, useRef, useState } from 'react';
import DownloadPNG from './DownloadPNG';

const COLORS = ['#6A5ACD', '#A9A9A9', '#BDB76B'];

export default function BarClick() {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const chartRef = useRef(null);

  // Fetch chart data from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/chart-data'); // Replace with your API endpoint
        const data = await res.json();

        // Transform to BarChart format
        const transformed = data.map((item, i) => ({
          id: `series-${i}`,
          data: item.values,
          label: item.label,
          stack: 'total',
          color: COLORS[i % COLORS.length],
          highlightScope: { highlight: 'item' },
        }));

        setSeries(transformed);
      } catch (err) {
        console.error('Failed to load chart data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const xAxisLabels = ['0', '3', '6', '9', '12']; // You can also get this from API

  if (loading) return <Box sx={{ m: 10 }}>Loading chart...</Box>;

  return (
    <Box sx={{ margin: 10 }}>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} sx={{ width: '100%' }}>
        <Box sx={{ position: 'relative', flexGrow: 1 }}>
          {/* Chart area (captured) */}
          <Box ref={chartRef}>
            <BarChart
              series={series}
              xAxis={[{ data: xAxisLabels, id: 'axis1' }]}
              height={400}
            />
          </Box>

          {/* Download button (not captured) */}
          <Box sx={{ position: 'absolute', top: 0, right: 0, zIndex: 10, m: 1 }}>
            <DownloadPNG targetRef={chartRef} filename="bar-chart" />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
