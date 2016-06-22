var worker = new Worker('worker.js')
worker.postMessage('ping')
worker.onmessage = function(e) {
  console.log(e.data)
}
