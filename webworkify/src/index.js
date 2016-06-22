var work = require('webworkify')
var worker = work(require('./worker.js'))

worker.addEventListener('message', function (e) {
    console.log(e.data)
    document.getElementById('result').textContent += e.data
})

var but = document.getElementById('doWork')
but.addEventListener('click', function(e) {
  console.log(e)
  worker.postMessage('random')
})

document.getElementById('stop').addEventListener('click', function stop(e) {
  worker.terminate()
})
