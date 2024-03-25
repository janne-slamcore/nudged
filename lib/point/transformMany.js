const transform = require('./transform')

const pointTyping = require('../point/types') // eslint-disable-line
const transformTyping = require('../transform/types') // eslint-disable-line
/**
 * @param {pointTyping.Point[]} points
 * @param {transformTyping.Transform} tr
 * @returns {pointTyping.Point[]}
 */
module.exports = (points, tr) => {
  // Transform an array of points
  //
  // Parameters
  //   points
  //     an array of points
  //   tr
  //     a transform
  //
  // Return
  //   an array of points, transformed
  //
  // Example
  //   > const tr = nudged.transform.ROT90
  //   > const ps = [{ x: 1, y: 0}, { x: 0, y: 1 }]
  //   > nudged.point.transformMany(ps, tr)
  //   [{ x: 0, y: 1 }, { x: -1, y: 0 }]
  //

  // We generally avoid dynamic type checking but here
  // a single point instead of an array would
  // yield a vague { x: NaN, y: NaN } without error.
  if (!Array.isArray(points)) {
    const type = typeof points
    const msg = 'Expected an array but saw ' + type + ' instead.'
    throw TypeError(msg)
  }

  const ps = []
  for (let i = 0; i < points.length; i += 1) {
    ps.push(transform(points[i], tr))
  }

  return ps
}
