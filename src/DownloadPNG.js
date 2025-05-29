import DownloadIcon from '@mui/icons-material/Download';
import { IconButton, Tooltip } from '@mui/material';
import html2canvas from 'html2canvas';

export default function DownloadPNG({ targetRef, filename = "chart" }) {
  const handleDownload = async () => {
    if (!targetRef?.current) return;

   const canvas = await html2canvas(targetRef.current, {
      backgroundColor: '#ffffff', 
      useCORS: true,
    });

    const link = document.createElement('a');
    link.download = `${filename}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <Tooltip title="Download as Image">
      <IconButton onClick={handleDownload}>
        <DownloadIcon />
      </IconButton>
    </Tooltip>
  );
}
