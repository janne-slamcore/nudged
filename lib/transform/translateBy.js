/**
 * @typedef {{x: number, y: number}} Vector
 */

const transformTyping = require('../transform/types') // eslint-disable-line
/**
 * @param {transformTyping.Transform} tr
 * @param {Vector} vec
 * @returns {transformTyping.Transform}
 */
module.exports = function (tr, vec) {
  // Modify transformation so that its image
  // is translated by the given vector.
  // Scale and rotation are kept intact.
  // In other words the resulting transform
  // first applies the given tr and
  // applies an additional translation defined by the given vector.
  //
  // Parameters
  //   tr
  //     a transform
  //   vec
  //     a vector { x, y }
  //
  // Return
  //   a transform
  //
  return {
    a: tr.a,
    b: tr.b,
    x: tr.x + vec.x,
    y: tr.y + vec.y
  }
}
