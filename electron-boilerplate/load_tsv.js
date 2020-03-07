const csv = require('csv-parser');
const fs = require('fs');

module.exports = (filename) => {
    fs.createReadStream(filename)

    .pipe(csv())
    .on('data', (row) => {
        console.log(row);
        // Call sql store
    })
    .on('end', () => {
        console.log('CSV file successfully processed');
    });
}

//module.exports.help = {
  //  name: 'load_tsv'
//}