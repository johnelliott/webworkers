var work = require('webworkify')
var worker = work(require('./worker.js'))

worker.addEventListener('message', function (e) {
  console.log('message from worker', e.data)
  document.getElementById('result').textContent += e.data
})

document.getElementById('doWork')
.addEventListener('click', function workClickHandler(e) {
  // hard-code a redux-style data payload to send when clicking do work
  var data = {
    action: "ADD",
    state: [1,2,3]
  }
  var message = JSON.stringify(data)
  worker.postMessage(message)
})

document.getElementById('stop')
.addEventListener('click', function stopClickHandler(e) {
  worker.terminate()
})
