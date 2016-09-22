const listView = require('./list-view.js')
const createElement = require('virtual-dom/create-element')

function render(state) {
  console.log('what is typeof state', typeof state)
  const tree = listView(state)
  const rootNode = createElement(tree)
  return rootNode
}

// THID FILE IS USELESSmodule.exports = render

/*
* When a file is run directly from Node.js, require.main is set to its module.
* That means that you can determine whether a file has been run directly by testing:
* require.main === module
*/
if (require.main === module) {
  // Test how this file works
  const tree = listView([1,2,3])
  const rootNode = createElement(tree)
  // just log out the root node
  console.log('rootNode', rootNode)
}
