var virtualbox = require('virtualbox');
function list () {
    virtualbox.list(function list_callback(machines, error) {
        if (error) throw error;
        // Act on machines
      });
}
module.exports = list