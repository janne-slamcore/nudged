export const almostEqual: (p: any, q: any, tolerance: any) => boolean;
export const create: (x: any, y: any) => {
    x: any;
    y: any;
};
export const distance: (p: any, q: any) => number;
export const equal: (p: any, q: any) => boolean;
export const fromArray: (arrp: any) => {
    x: any;
    y: any;
};
export const offset: (p: any, dx: any, dy: any) => {
    x: any;
    y: any;
};
export const polarOffset: (p: any, distance: any, angle: any) => {
    x: any;
    y: any;
};
export const toArray: (p: any) => any[];
export const transform: (p: any, tr: any) => {
    x: any;
    y: any;
};
export const transformMany: (points: any, tr: any) => {
    x: any;
    y: any;
}[];
export const validate: (p: any) => boolean;
