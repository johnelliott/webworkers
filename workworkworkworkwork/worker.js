var tr = require('emoji-stream')

module.exports = function(self) {
  tr.on('data', data=>self.postMessage(data.toString()))
  self.addEventListener('message', function(e) {
    tr.write(e.data)
  })
}
