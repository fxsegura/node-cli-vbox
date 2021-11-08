var virtualbox = require('virtualbox');
function stop (vm) {
    virtualbox.poweroff(String(vm), function poweroff_callback(error) {
        if (error) throw error;
        console.log('Virtual Machine has been powered off!');
    });
}
module.exports = stop