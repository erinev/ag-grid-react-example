const faker = require('faker');

const fs = require('fs');

const columnCount = 100;
const rowCount = 50 * 1000;

const gridDataSize = `${columnCount}x${rowCount}`;
const columnDefsFileName = `${gridDataSize}_columnDefs.json`;
const rowDataFileName = `${gridDataSize}_rowData.json`;

console.log('---------------------------------');
console.log('Column defs generation started...');

try {
    fs.unlinkSync(columnDefsFileName);
    console.log(`'${columnDefsFileName}' file was deleted!`);
}
catch(error) {
    console.warn(`'${columnDefsFileName}' file deletion was skipped: '${error}'`);
}

const columnDefsFileStream = fs.createWriteStream(columnDefsFileName, {flags:'a'});

let columnDefs = [];

for (let i = 1; i <= columnCount; i++) {
    const columnDef = {
        headerName: `HeaderName_${i}`,
        field: `HeaderField_${i}`
    };

    columnDefs.push(columnDef);
}

columnDefsFileStream.write(JSON.stringify(columnDefs, null, 4));

columnDefsFileStream.end();

console.log('Column defs generation finished!');
console.log('---------------------------------');
console.log('Row data generation started...');

try {
    fs.unlinkSync(rowDataFileName);
    console.log(`'${rowDataFileName}' file was deleted!`);
}
catch(error) {
    console.warn(`'${rowDataFileName}' file deletion was skipped: '${error}'`);
}

const rowDataFileStream = fs.createWriteStream(rowDataFileName, {flags:'a'});

let rowsData = [];

for (let i = 1; i <= rowCount; i++) {
    let rowData = {};

    columnDefs.forEach(columnDef => {
        rowData[columnDef.field] = faker.lorem.words(Math.random() * 10);
    }); 

    rowsData.push(rowData);
}

rowDataFileStream.write(JSON.stringify(rowsData, null, 4));

rowDataFileStream.end();

console.log('Row data generation finished!');
console.log('---------------------------------');