/*
 * this is a proof-of concept that streams can be browserified
 */
var tr = require('emoji-stream')
const string = 'hello, my name is happy whale boat man!'
console.log(string)
tr.on('data', data=>console.log(data.toString()))

tr.write(string)
document.getElementById('result').innerHTML = string
