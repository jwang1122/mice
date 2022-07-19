<h1>Mice Project Dev. Notes</h1>

[Markdown Utilities](../../doc/utilities.md)

## Getting Started

### create a react project mice

```doc
C:\Users\12818\workspace\react-app>npx create-react-app mice
```

* in case we need create table ourselves
  
```sql
CREATE TABLE "mice" (
	"id"	TEXT NOT NULL,
	"MS_ID"	TEXT NOT NULL,
	"gender"	TEXT,
	"geno"	TEXT,
	"D.O.B"	DATE,
	"ear"	TEXT,
	"mom"	TEXT,
	"dad"	TEXT,
	"cage"	TEXT,
	"user"	TEXT,
	"date"	TEXT,
	PRIMARY KEY("id")
);
```
### File Structure

```dos 
mice
    ├── data/
    |       ├── Mice list-29210806.xls
    |       └── micelist.csv
    ├── doc/
    |       ├── mice.md (development notes)
    |       └── requirement.md 
    ├── public/
    |       └── index.html
    ├── 🔥src/
    |       ├── components/
    |       |       ├── UI/
    |       |       |   ├── Button.js
    |       |       |   ├── Input.js
    |       |       |   └── Card.js
    |       |       └── Mice/
    |       |           ├── AddMice.js
    |       |           ├── Mouse.js
    |       |           └── MiceList.js
    |       ├── index.js
    |       └── App.js
    ├── package.json
    └── 👉ReadMe.md
```

* Build Sqlite Database
* [Original data](../data/Mice%20list-20210806.xlsx)
* [Simplified csv data](../data/micelist.csv)

👎😢 **Issues**: date of birth change to number!

✔️😄 **Solution:**
> 1. highlight the data from original Excel spreadsheet; copy to clip board
> 2. past it to second line in new sheet with first(second) paste selection;
> 3. highlight colored fields ⟶ right-click ⟶ Format cells... ⟶ No Color ⟶ OK
> 4. add all column headers.

### create mice database
![](images/miceTable.png)

* [Python program to insert data to database](../data/insertMice.py)

## GUI Design

```mermaid
graph TB

INDEX(Index.js)
APP[App.js]
ADD[AddMouse.js]
LIST[MiceList.js]
Mouse[Mouse.js]
CARD[Card.js]
BUTT[Button.js]
Input[Input.js]

INDEX --> APP --> ADD & LIST
Mouse --> CARD
LIST --> Mouse & CARD
ADD --> BUTT & CARD & Input

classDef start fill:#3cdf77,stroke:#1a6d38,stroke-width:2px,color:white;
classDef html fill:#F46624,stroke:#F46624,stroke-width:4px,color:white;
classDef error fill:#f17168,stroke:#902a23,stroke-width:2px,color:black;
classDef js fill:#73dbf7,stroke:#194652,stroke-width:2px;

class INDEX start
class BUTT,CARD,Input html
class APP,LIST,ADD,Mouse js
```

* in order to use @Material Table, install the following modules

✔️😄 Good for "react": "^17.0.2",

```dos
✔️😄 npm install @mui/material 
✔️😄 npm install @emotion/react 
✔️😄 npm install @emotion/styled
✔️😄 npm install @mui/icons-material
✔️😄 npm install @mui/x-data-grid
✔️😄 npm install datatables
--legacy-peer-deps
```

* [Main entry](../src/App.js) 👉[modiry](index.js)
* [MouseList](../src/components/mice/MiceList.js)
* [AddMouse](../src/components/mice/AddMouse.js)