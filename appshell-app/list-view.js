// views
var h = require('virtual-dom/h')
var hyperx = require('hyperx')
var hx = hyperx(h)

/**
 * Creates a list item
 * @function
 * @param {value} state - The content (number, string etc.) in the item
 * @returns {virtual-node} in hyperscript style
 */
function item(state) {
  function onclick () {
    store.dispatch({ type: 'INCREMENT'})
  }
  return hx`<div id='root'><span>${state}</span><button onclick=${onclick}></button></div>`
}

/**
 * Creates a list
 * @function
 * @param {Array} state - The array of values to put in divs
 * @returns {virtual-node} in hyperscript style
 */
function list(state) {
  return hx`<div>${state.map(function (d) {
    return item(d)
  })}</div>`
}

/*
* When a file is run directly from Node.js, require.main is set to its module.
* That means that you can determine whether a file has been run directly by testing:
* require.main === module
*/
if (require.main === module) {
  // Test how this file works
  var list = list([1,2])
  console.log('list', list)
}

module.exports = list
