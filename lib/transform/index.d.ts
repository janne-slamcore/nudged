export namespace SINGULAR {
    let a: number;
    let b: number;
    let x: number;
    let y: number;
}
export namespace IDENTITY {
    let a_1: number;
    export { a_1 as a };
    let b_1: number;
    export { b_1 as b };
    let x_1: number;
    export { x_1 as x };
    let y_1: number;
    export { y_1 as y };
}
export namespace ROT45 {
    export { isqrt2 as a };
    export { isqrt2 as b };
    let x_2: number;
    export { x_2 as x };
    let y_2: number;
    export { y_2 as y };
}
export namespace ROT90 {
    let a_2: number;
    export { a_2 as a };
    let b_2: number;
    export { b_2 as b };
    let x_3: number;
    export { x_3 as x };
    let y_3: number;
    export { y_3 as y };
}
export namespace ROT180 {
    let a_3: number;
    export { a_3 as a };
    let b_3: number;
    export { b_3 as b };
    let x_4: number;
    export { x_4 as x };
    let y_4: number;
    export { y_4 as y };
}
export namespace ROT270 {
    let a_4: number;
    export { a_4 as a };
    let b_4: number;
    export { b_4 as b };
    let x_5: number;
    export { x_5 as x };
    let y_5: number;
    export { y_5 as y };
}
export namespace HALF {
    let a_5: number;
    export { a_5 as a };
    let b_5: number;
    export { b_5 as b };
    let x_6: number;
    export { x_6 as x };
    let y_6: number;
    export { y_6 as y };
}
export namespace X2 {
    let a_6: number;
    export { a_6 as a };
    let b_6: number;
    export { b_6 as b };
    let x_7: number;
    export { x_7 as x };
    let y_7: number;
    export { y_7 as y };
}
export const almostEqual: (tr: any, ts: any, tolerance: any) => boolean;
export const compose: (tr: any, ts: any) => {
    a: number;
    b: number;
    x: any;
    y: any;
};
export const create: (a: any, b: any, x: any, y: any) => {
    a: any;
    b: any;
    x: any;
    y: any;
};
export const equal: (tr: any, ts: any) => boolean;
export const fromArray: (arrtr: any) => {
    a: any;
    b: any;
    x: any;
    y: any;
};
export const fromPolar: (center: any, scale: any, rotation: any) => {
    a: number;
    b: number;
    x: number;
    y: number;
};
export const fromRotation: (center: any, radians: any) => {
    a: number;
    b: number;
    x: any;
    y: any;
};
export const fromScale: (center: any, multiplier: any) => {
    a: any;
    b: number;
    x: number;
    y: number;
};
export const fromString: (str: any) => {
    a: any;
    b: any;
    x: any;
    y: any;
};
export const fromTranslation: (p: any) => {
    a: number;
    b: number;
    x: any;
    y: any;
};
export const getRotation: (tr: any) => number;
export const getScale: (tr: any) => number;
export const getTranslation: (tr: any) => {
    x: any;
    y: any;
};
export { compose as multiply };
export const inverse: (tr: any) => {
    a: number;
    b: number;
    x: number;
    y: number;
};
export const rotateBy: (tr: any, center: any, radians: any) => {
    a: number;
    b: number;
    x: any;
    y: any;
};
export const rotateTo: (tr: any, center: any, radians: any) => {
    a: number;
    b: number;
    x: any;
    y: any;
};
export const scaleBy: (tr: any, center: any, multiplier: any) => {
    a: number;
    b: number;
    x: number;
    y: number;
};
export const scaleTo: (tr: any, center: any, scale: any) => {
    a: number;
    b: number;
    x: number;
    y: number;
};
export const toArray: (tr: any) => any[];
export const toMatrix: (tr: any) => {
    a: any;
    b: any;
    c: number;
    d: any;
    e: any;
    f: any;
};
export const toString: (tr: any) => string;
export const translateBy: (tr: any, vec: any) => {
    a: any;
    b: any;
    x: any;
    y: any;
};
export const translateTo: (tr: any, point: any) => {
    a: any;
    b: any;
    x: any;
    y: any;
};
export const validate: (tr: any) => boolean;
declare const isqrt2: number;
