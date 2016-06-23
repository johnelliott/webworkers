var listView = require('./list-view.js')
module.exports = function(self) {
  self.addEventListener('message', function(e) {
    console.log('Worker data:', e.data)
    var payload = JSON.parse(e.data)
    self.postMessage(JSON.stringify(listView(payload.state)))
  })
}
