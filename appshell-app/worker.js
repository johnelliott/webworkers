var listView = require('./list-view.js')
module.exports = function(self) {
  self.addEventListener('message', function(e) {
    console.log('Worker recieved:', typeof e.data, e.data)
    //var payload = JSON.parse(e.data)
    //console.log('payload inside worker', payload)
    self.postMessage(JSON.stringify(listView(e.data.state)))
  })
}
