import { ChartJSNodeCanvas } from 'chartjs-node-canvas';
import chartjsPluginDatalabels from 'chartjs-plugin-datalabels';

const width = 1000;
const height = 400;

const bigCanvasRenderService = new ChartJSNodeCanvas({ width, height, chartCallback: (chartJS) => {
	chartJS.register(chartjsPluginDatalabels);
}});

const backgroundColor = {
	id: 'backgroundColor',
	beforeDraw: (chart: any) => {
		const ctx = chart.canvas.getContext('2d');
		ctx.save();
		ctx.globalCompositeOperation = 'destination-over';
		ctx.fillStyle = 'white';
		ctx.fillRect(0, 0, chart.width, chart.height);
		ctx.restore();
	}
}

const options = {
	maintainAspectRatio: false,
	animation: {
		duration: 0
	},
	scales: {
		yAxes: [
			{
				ticks: {
					display: true,
					fontColor: 'black',
					fontStyle: 'bold',
					beginAtZero: true,
					maxTicksLimit: 5,
					padding: 20
				},
				gridLines: {
					drawTicks: true,
					display: true
				}
			}
		],
		xAxes: [
			{
				gridLines: {
					drawTicks: true,
					display: true
				},
				ticks: {
					display: true,
					padding: 20,
					fontColor: 'black',
					fontStyle: 'bold'
				}
			}
		]
	},
	plugins: {
		legend: {
			display: false
		},
		chartjsPluginDatalabels: {
			display: function (context: { dataIndex: number; dataset: any }) {
				// Always show first and last value
				if (context.dataIndex === 0 || context.dataIndex === context.dataset.data.length - 1) {
					return true;
				}
				// Show value if either previous or next value is
				// different and if the value is not zero
				return (
					context.dataset.data[context.dataIndex] !== 0 &&
					(context.dataset.data[context.dataIndex] !== context.dataset.data[context.dataIndex - 1] ||
						context.dataset.data[context.dataIndex] !== context.dataset.data[context.dataIndex + 1])
				);
			}
		}
	}
};

export const renderChart = (type: any, data: any) => {
	const configuration: any = {
		type: type,
		data: data,
		options: options,
		plugins: [backgroundColor]
	}
	return bigCanvasRenderService.renderToBuffer(configuration);
};