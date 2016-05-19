var PythonShell = require('python-shell');

var options = {
};

PythonShell.run('python/helloworld.py', options, function (err, results) {
  if (err) throw err;
  // results is an array consisting of messages collected during execution
  console.log('results: %j', results);
});

