var virtualbox = require('virtualbox');
function importvm (vm) {
    virtualbox.vmImport('ova_file_path', options, function import_callback(error) {
        if (error) throw error;
        console.log('Virtual Machine was imported!');
      });
}
module.exports = importvm