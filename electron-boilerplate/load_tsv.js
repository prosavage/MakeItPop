const csv = require('csv-parser');
const fs = require('fs');
//const { ipcRenderer } = require('electron')

module.exports = (filename) => {
    
    var data = "";

    let names = ['CHROMOSOME_NAME', 'START_POSITION', 'END_POSITION', 'REFERENCE', 'ALTERNATE', 'REFERENCE_READS', 'ALTERNATE_READS'];
    fs.createReadStream(filename)
    .pipe(csv ({
        headers: names,
        separator: '\t'
    }))
    .on('data', (row) => {
        //console.log(row);

        data = "<tr>";
        for (x in row) {
          data += "<th>" + row[x].value + "</th>";
        }
        data += "</tr>"
        // Call sql stor
    })    
    .on('end', () => {
        console.log('CSV file successfully processed');
        return data;
        //ipcRenderer.send('asynchronous-message', 'ping')
    });
}