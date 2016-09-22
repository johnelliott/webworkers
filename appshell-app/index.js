var work = require('webworkify')
var worker = work(require('./worker.js'))
const createElement = require('virtual-dom/create-element')

worker.addEventListener('message', function (e) {
  console.log('Worker sent: ', typeof e.data, e.data)

  //temp intercept the virtual thing
  var h = require("virtual-dom/h")
  var myNode = h("text")
  var rootNode = createElement(myNode)

  console.log('heres what we rendered', typeof rootNode, rootNode)
  document.body.appendChild(rootNode)
})

document.getElementById('doWork')
.addEventListener('click', function workClickHandler(e) {
  // hard-code a redux-style data payload to send when clicking do work
  var data = {
    action: "ADD",
    state: [1,2,3]
  }
  var message = JSON.stringify(data)
  worker.postMessage(data)
})

document.getElementById('stop')
.addEventListener('click', function stopClickHandler(e) {
  worker.terminate()
})
