module.exports = function(self) {
  self.addEventListener('message', function(e) {
    console.log(e.data)
    self.postMessage(Math.random())
  })
}
