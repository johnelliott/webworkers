var work = require('webworkify')
var worker = work(require('./worker.js'))

worker.addEventListener('message', function (e) {
    console.log(e.data)
    document.getElementById('result').textContent += e.data
})

var input = document.getElementById('input')
var but = document.getElementById('doWork')
but.addEventListener('click', function(e) {
  const mess = 'hello, my name is happy whale boat man!'
  worker.postMessage(input.value)
})

document.getElementById('stop').addEventListener('click', function stop(e) {
  worker.terminate()
})
