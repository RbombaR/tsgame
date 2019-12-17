const rows = 5;
const columns = 4;

interface Item {
    node?: HTMLElement;
    className: string;
}

export const playArea: Item[][] = Array(rows)
    .fill(0)
    .map(() => Array(columns)
        .fill(0)
        .map(() => ({
            className: Math.random() > 0.5 ? 'box' : 'box red'
        })));

