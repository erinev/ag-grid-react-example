const faker = require('faker');

const fs = require('fs');

const columnCount = 100;
const rowCount = 2 * 1000;
const wordsCountInResizableColumn = 200;
const maxWordsPerCellInOtherColumns = 30;


const gridDataSize = `${columnCount}x${rowCount}`;
const columnDefsFileName = `./grid-data/${gridDataSize}_columnDefs.json`;
const rowDataFileName = `./grid-data/${gridDataSize}_rowData.json`;

console.log('---------------------------------');
console.log('Column defs generation started...');

try {
    fs.unlinkSync(columnDefsFileName);
    console.log(`'${columnDefsFileName}' file was deleted!`);
}
catch(error) {
    console.warn(`'${columnDefsFileName}' file deletion was skipped: '${error}'`);
}

let columnDefs = [];

const firstColumnDef = {
    headerName: `RowNumber`,
    field: `RowNumberField`,
    width: 110,
    suppressSizeToFit: true
}
columnDefs.push(firstColumnDef);

for (let i = 1; i < columnCount; i++) {
    let columnDef = {};

    if (i === 1) {
        columnDef = {
            headerName: `Resizable_Header_${i}`,
            field: `ResizableHeaderField_${i}`,
            resizable: true,
            suppressSizeToFit: true
        };
    } else {
        columnDef = {
            headerName: `Static_Header_${i}`,
            field: `StaticHeaderField_${i}`,
            minWidth: 180
        };
    }

    columnDefs.push(columnDef);
}

const columnDefsFileStream = fs.createWriteStream(columnDefsFileName, {flags:'a'});
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

let rowsData = [];

for (let i = 1; i <= rowCount; i++) {
    let rowData = {};

    columnDefs.forEach((columnDef, index) => {
        if (index === 0) {
            rowData[columnDef.field] = `row_${i}`;
        } else if (index === 1) {
            rowData[columnDef.field] = faker.lorem.words(wordsCountInResizableColumn);
        } else {
            rowData[columnDef.field] = faker.lorem.words(Math.random() * maxWordsPerCellInOtherColumns);
        }
    }); 

    rowsData.push(rowData);
}

const rowData = {
    rowData: rowsData
}

const griDataFileStream = fs.createWriteStream(rowDataFileName, {flags:'a'});
griDataFileStream.write(JSON.stringify(rowData, null, 4));
griDataFileStream.end();

console.log('Row data generation finished!');
console.log('---------------------------------');