export const nodes = [
    { id: 'A', group: 1, x: 100, y: 100 },
    { id: 'B', group: 1, x: 100, y: 150 },
    { id: 'C', group: 1, x: 100, y: 200 },
    { id: 'D', group: 1, x: 100, y: 250 },
    { id: 'E', group: 1, x: 100, y: 300 },
    { id: 'F', group: 2, x: 200, y: 100 },
    { id: 'G', group: 2, x: 200, y: 150 },
    { id: 'H', group: 2, x: 200, y: 200 },
    { id: 'I', group: 2, x: 200, y: 250 },
    { id: 'J', group: 2, x: 200, y: 300 },
    { id: 'K', group: 3, x: 300, y: 100 },
    { id: 'L', group: 3, x: 300, y: 150 },
    { id: 'M', group: 3, x: 300, y: 200 },
    { id: 'N', group: 3, x: 300, y: 250 },
    { id: 'O', group: 3, x: 300, y: 300 },
];

// random combination between groups
export const links = [
    { source: 'A', target: 'F' },
    { source: 'B', target: 'G' },
    { source: 'A', target: 'H' },
    { source: 'D', target: 'I' },
    { source: 'B', target: 'J' },
    { source: 'F', target: 'K' },
    { source: 'H', target: 'L' },
    { source: 'H', target: 'M' },
    { source: 'H', target: 'N' },
    { source: 'J', target: 'O' }
];

