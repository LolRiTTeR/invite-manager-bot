type ChalkMessage = string | number;
type ChalkFn = (message: ChalkMessage) => string;

export type ChalkLike = {
	blue: ChalkFn;
	green: ChalkFn;
	gray: ChalkFn;
	yellow: ChalkFn;
};

const passthrough: ChalkFn = (message) => String(message);

const chalk: ChalkLike = {
	blue: passthrough,
	green: passthrough,
	gray: passthrough,
	yellow: passthrough
};

export default chalk;
