const transformTyping = require('../transform/types') // eslint-disable-line
const pointTyping = require('../point/types') // eslint-disable-line
/**
 * @param {transformTyping.Transform} tr
 * @param {pointTyping.Point} point
 * @returns {transformTyping.Transform}
 */
module.exports = function (tr, point) {
  // Modify transformation so that it maps { x: 0, y: 0 }
  // to the given point. The rotation and scale are kept intact.
  //
  // Parameters
  //   tr
  //     a transform
  //   point
  //     a point { x, y }
  //
  // Return
  //   a transform
  //
  return {
    a: tr.a,
    b: tr.b,
    x: point.x,
    y: point.y
  }
}
