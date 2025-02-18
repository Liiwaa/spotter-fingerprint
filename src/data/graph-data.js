import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export const chartData = {
  labels: ['0', '30', '60', '90', '120'], // Days on x-axis
  datasets: [
    {
      label: 'Fingerprints',
      data: [50, 60, 75, 80, 85], // Fingerprint percentages
      borderColor: '#F84960', // rgb(248, 73, 96) in hex
      backgroundColor: 'rgba(248, 73, 96, 0.2)',
      fill: true,
    },
    {
      label: 'Competitors',
      data: [40, 50, 55, 60, 70], // Competitors percentages
      borderColor: '#008080', // rgb(0, 128, 128) in hex
      backgroundColor: 'rgba(0, 128, 128, 0.2)',
      fill: true,
    },
  ],
};

export const chartOptions = {
  responsive: true,
  scales: {
    x: {
      title: {
        display: true,
        text: 'Number of Days',
      },
    },
    y: {
      title: {
        display: false, // Remove the "Percentage" title
      },
      min: 0,  // Set min to 0 for better scale
      max: 100, // Set max to 100 for percentage scale
      ticks: {
        display: false, // Remove the numbers from the y-axis
      },
    },
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          const { datasetIndex, raw } = tooltipItem;
          const label = tooltipItem.dataset.label || '';
          return `${label}: ${raw}%`;
        },
        afterLabel: function (tooltipItem) {
          const { datasetIndex, raw } = tooltipItem;
          const fingerprintData = chartData.datasets[0].data[tooltipItem.dataIndex];
          const competitorsData = chartData.datasets[1].data[tooltipItem.dataIndex];
          return `Fingerprints: ${fingerprintData}% | Competitors: ${competitorsData}%`;
        },
      },
    },
  },
};
