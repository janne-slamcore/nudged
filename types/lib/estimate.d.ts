declare namespace _exports {
    export { EstimatorParams };
}
declare function _exports(params: EstimatorParams): transformTyping.Transform;
export = _exports;
type EstimatorParams = {
    estimator: string;
    domain: pointTyping.Point[];
    range: pointTyping.Point[];
    center?: pointTyping.Point;
    angle?: number;
};
import transformTyping = require("./transform/types");
import pointTyping = require("./point/types");
