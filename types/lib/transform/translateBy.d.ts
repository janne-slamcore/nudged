declare namespace _exports {
    export { Vector };
}
declare function _exports(tr: transformTyping.Transform, vec: Vector): transformTyping.Transform;
export = _exports;
type Vector = {
    x: number;
    y: number;
};
import transformTyping = require("../transform/types");
