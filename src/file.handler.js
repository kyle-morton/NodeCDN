const fs = require('fs'),
      path = require('path');

module.exports = class FileHandler {

    /**
     * reads file if found, otherwise 404
     * @param {*} filePath 
     * @param {*} response 
     */
    ReadFile(filePath, response, counter) {
        fs.exists(filePath, exists => {
            if (exists) {           
                response.sendFile(filePath); 
                console.log('request ' + counter + ' finished at: ' + new Date());
            }else {
                response.status(404).send('Not found');
            }
        });
    }

    GetPath(type, version, file) {
        return path.join(__dirname, '..', 'assets', type, version, file);
    }

};