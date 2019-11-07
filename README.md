# ag-grid React Performance Example with bigger data sets

## How to run

Steps:

- run `npm install`
- run `npm install -g json-server`
- open terminal in ./grid-data directory and run: `json-server 100x2000_rowData.json --watch --read-only true`
- open another terminal in root directory and run: `npm start`
- navigate to `http://localhost:8080`

## How to regenerate grid-data jsons

Steps:

- Alter `gridDataGenerator.js` file with needed changes (different column count, different row count, etc)
- open new terminal and run: `node gridDataGenerator.js`
- If row count or column count was changed you need to re-run json server: `json-server {ColumnCount}x{RowCount}_rowData.json --watch --read-only true`
