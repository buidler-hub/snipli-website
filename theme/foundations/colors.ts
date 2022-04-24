const colors = {
    black: '#0E0517',
    green: {
        500: '#52DE3C',
    },
    yellow: {
        500: '#E3C042',
    },
    red: {
        500: '#F45D5D',
    },
} as const;

export type Colors = typeof colors;
export default colors;
