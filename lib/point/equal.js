const pointTyping = require('../point/types') // eslint-disable-line
/**
 * @param {pointTyping.Point} p
 * @param {pointTyping.Point} q
 * @returns {boolean}
 */
module.exports = (p, q) => {
  // Thest if the coordinates of two points are strictly equal.
  //
  // Parameters:
  //   p
  //     a point
  //   q
  //     a point
  //
  // Return
  //   a boolean
  //
  return (p.x === q.x && p.y === q.y)
}
