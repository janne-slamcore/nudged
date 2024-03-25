const pointTyping = require('../point/types') // eslint-disable-line
/**
 * @param {number} x
 * @param {number} y
 * @returns {pointTyping.Point}
 */
module.exports = (x, y) => {
  // Create a point object.
  //
  // Parameters
  //   x
  //     a number
  //   y
  //     a number
  //
  // Return
  //   a point { x, y }
  //
  return {
    x: x,
    y: y
  }
}
