declare namespace _exports {
    export { Matrix };
}
declare function _exports(tr: transformTyping.Transform): Matrix;
export = _exports;
type Matrix = {
    a: number;
    b: number;
    c: number;
    d: number;
    e: number;
    f: number;
};
import transformTyping = require("../transform/types");
