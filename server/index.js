// setting up express and socket.io
var express = require('express')
var app = express()
app.use(express.static('public'))

var http = require('http').Server(app)
var io = require('socket.io')(http)

// setting up diffsync's DataAdapter
var DiffSync    = require('diffsync')
var dataAdapter = new DiffSync.InMemoryDataAdapter()

// setting up the diffsync server
var diffSyncServer = new DiffSync.Server(dataAdapter, io)

// starting the http server
http.listen(4000, function(){
  console.log('ready to go')
})