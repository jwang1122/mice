<h1>Mice Project Development Notes</h1>

## Start the application

1. start database service server

```dos
(env) C:\Users\12818\workspace\mice>cd data
(env) C:\Users\12818\workspace\mice\data>python miceApp.py
```
2. start react web application server

```dos

```

## build react package

* to rebuild node_modules
1. delete node_modeles
2. delete package-lock.json
3. modify package.json to

```json
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-pdf": "^5.7.2"
  },
```
4. install the following modules

```dos
✔️😄 npm install datatables
✔️😄 npm install @mui/material 
✔️😄 npm install @emotion/react 
✔️😄 npm install @emotion/styled
✔️😄 npm install @mui/icons-material
✔️😄 npm install @mui/x-data-grid
✔️😄 npm install react-router-dom
✔️😄 npm install mui-datatables
```
✔️😢 npm install react-scripts (<span style="color:red">6 high</span> severity vulnerabilities)

## Generate pdf report

```
pip install fpdf2
```
* [Understand fpdf.text()](pdf/pdf1.py)
* [Understand fpdf.cell()](pdf/pdf2.py)