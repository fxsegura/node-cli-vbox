var virtualbox = require('virtualbox');
function start (vm) {
    virtualbox.start(String(vm), function start_callback(error) {
        if (error) throw error;
        console.log(String(vm) + 'ha iniciado correctamente');
    });
}   
module.exports = start