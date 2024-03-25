const pointTyping = require('../point/types') // eslint-disable-line
/**
 * @param {pointTyping.Point} p
 * @returns {[number, number]}
 */
module.exports = (p) => {
  // Represent a point { x, y } in two-element array [x, y]
  //
  // Parameters
  //   p
  //     a point
  //
  // Return
  //   an array [x, y]
  //
  return [p.x, p.y]
}
