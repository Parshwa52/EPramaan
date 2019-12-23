/*const fs = require('fs');
const child_process = require('child_process');

   var workerProcess = child_process.exec('node sendemail.js',
      function (error, stdout, stderr) {
         if (error) {
            console.log(error.stack);
            console.log('Error code: '+error.code);
            console.log('Signal received: '+error.signal);
         }
         console.log('stdout: ' + stdout);
         console.log('stderr: ' + stderr);
      });
      workerProcess.on('exit', function (code) {
      console.log('Child process exited with exit code '+code);
   });*/
   var i;
 for (i = 0; i < 5; i++) {
   console.log(i);
 }
