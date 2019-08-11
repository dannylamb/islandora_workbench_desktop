// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const ipc = require('electron').ipcRenderer
const asyncMsgBtn = document.getElementById('sendSyncMsgBtn')

asyncMsgBtn.addEventListener('click', function () {
  ipc.send('asynchronous-message', '')
})

ipc.on('asynchronous-reply', function (event, arg) {
  document.getElementById('asyncReply').innerHTML = arg 
})
