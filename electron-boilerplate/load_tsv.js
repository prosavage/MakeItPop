const csv = require('csv-parser');
const fs = require('fs');
var index = require('./index.js');
module.exports = (filename) => {
    
    var data = "<tr>";
    let header = ['CHROMOSOME_NAME', 'START_POSITION', 'END_POSITION', 'REFERENCE', 'ALTERNATE', 'REFERENCE_READS', 'ALTERNATE_READS'];

    for (x in header) {
        data += "<th>" + header[x] + "</th>";
    }    
    data += "</tr>"

    fs.createReadStream(filename)
    .pipe(csv ({
        headers: header,
        separator: '\t'
    }))
    .on('data', (row) => {
        //console.log(row);
        data += "<tr>";

        for (x in row) {
          data += "<th>" + row[x] + "</th>";
        }
        data += "</tr>"
    })    
    .on('end', () => {
        console.log('CSV file successfully processed');
        index.UpdateData(data);
    });
}