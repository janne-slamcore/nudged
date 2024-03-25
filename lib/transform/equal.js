const transformTyping = require('../transform/types') // eslint-disable-line
/**
 * @param {transformTyping.Transform} tr
 * @param {transformTyping.Transform} ts
 * @returns {boolean}
 */
module.exports = function (tr, ts) {
  // Are transforms equal?
  // Tests that the elements of the transforms are strictly equal.
  // For loose equality see [almostEqual](#nudgedtransformalmostequal).
  //
  // Parameters:
  //   tr
  //     a transform
  //   ts
  //     a transform
  //
  // Return
  //   a boolean
  //
  return (tr.a === ts.a && tr.b === ts.b &&
    tr.x === ts.x && tr.y === ts.y)
}
