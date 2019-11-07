const faker = require('faker');

const fs = require('fs');

const columnCount = 100;
const rowCount = 10 * 1000;

const gridDataSize = `${columnCount}x${rowCount}`;
const gridDataFileName = `./grid-data/${gridDataSize}_gridData.json`;

console.log('---------------------------------');
console.log('Column defs generation started...');

let columnDefs = [];

for (let i = 1; i <= columnCount; i++) {
    const columnDef = {
        headerName: `HeaderName_${i}`,
        field: `HeaderField_${i}`
    };

    columnDefs.push(columnDef);
}

console.log('Column defs generation finished!');
console.log('---------------------------------');
console.log('Row data generation started...');

try {
    fs.unlinkSync(gridDataFileName);
    console.log(`'${gridDataFileName}' file was deleted!`);
}
catch(error) {
    console.warn(`'${gridDataFileName}' file deletion was skipped: '${error}'`);
}

const griDataFileStream = fs.createWriteStream(gridDataFileName, {flags:'a'});

let rowsData = [];

for (let i = 1; i <= rowCount; i++) {
    let rowData = {};

    columnDefs.forEach(columnDef => {
        rowData[columnDef.field] = faker.lorem.words(Math.random() * 10);
    }); 

    rowsData.push(rowData);
}

const gridData = {
    columnDefs: columnDefs,
    rowData: rowsData
}

griDataFileStream.write(JSON.stringify(gridData, null, 4));

griDataFileStream.end();

console.log('Row data generation finished!');
console.log('---------------------------------');