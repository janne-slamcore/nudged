export const SINGULAR: transformTyping.Transform;
export const IDENTITY: transformTyping.Transform;
export const ROT45: transformTyping.Transform;
export const ROT90: transformTyping.Transform;
export const ROT180: transformTyping.Transform;
export const ROT270: transformTyping.Transform;
export const HALF: transformTyping.Transform;
export const X2: transformTyping.Transform;
export const almostEqual: (tr: transformTyping.Transform, ts: transformTyping.Transform, tolerance?: number) => boolean;
export const compose: (tr: transformTyping.Transform, ts: transformTyping.Transform) => transformTyping.Transform;
export const create: (a: number, b: number, x: number, y: number) => transformTyping.Transform;
export const equal: (tr: transformTyping.Transform, ts: transformTyping.Transform) => boolean;
export const fromArray: (arrtr: [number, number, number, number]) => transformTyping.Transform;
export const fromPolar: (center: import("../point/types").Point, scale: number, rotation: number) => transformTyping.Transform;
export const fromRotation: (center: import("../point/types").Point, radians: number) => transformTyping.Transform;
export const fromScale: (center: import("../point/types").Point, multiplier: number) => transformTyping.Transform;
export const fromString: (str: string) => transformTyping.Transform;
export const fromTranslation: (p: import("../point/types").Point) => transformTyping.Transform;
export const getRotation: (tr: transformTyping.Transform) => number;
export const getScale: (tr: transformTyping.Transform) => number;
export const getTranslation: (tr: transformTyping.Transform) => import("../point/types").Point;
export { compose as multiply };
export const inverse: (tr: transformTyping.Transform) => transformTyping.Transform;
export const rotateBy: (tr: transformTyping.Transform, center: import("../point/types").Point, radians: number) => transformTyping.Transform;
export const rotateTo: (tr: transformTyping.Transform, center: import("../point/types").Point, radians: number) => transformTyping.Transform;
export const scaleBy: (tr: transformTyping.Transform, center: import("../point/types").Point, multiplier: number) => transformTyping.Transform;
export const scaleTo: (tr: transformTyping.Transform, center: import("../point/types").Point, scale: number) => transformTyping.Transform;
export const toArray: (tr: transformTyping.Transform) => [number, number, number, number];
export function toMatrix(tr: transformTyping.Transform): import("./toMatrix").Matrix;
export const toString: (tr: transformTyping.Transform) => string;
export function translateBy(tr: transformTyping.Transform, vec: import("./translateBy").Vector): transformTyping.Transform;
export const translateTo: (tr: transformTyping.Transform, point: import("../point/types").Point) => transformTyping.Transform;
export const validate: (tr: any) => boolean;
import transformTyping = require("../transform/types");
