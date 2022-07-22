<h1>Mice Project Dev. Notes</h1>

[Markdown Utilities](../../doc/utilities.md)

[Build a react firebase application](https://www.youtube.com/watch?v=VqgTr-nd7Cg)

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
* [Load data from DB, return MiceList](../src/components/Mice.js)
* [use MUIDataTable display mice list with filter, search, print, ...](../src/components/MiceList.js)
[Document about MUIDataTable](https://www.npmjs.com/package/mui-datatables)

* [We may not need this function AddMouse, instead using pair](../src/components/mice/AddMouse.js)

🔔⚡️ **Issue:**

```dos
SelectInput.js:444 
        
       MUI: You have provided an out-of-range value `undefined` for the select (name="cageID") component.
Consider providing a value that matches one of the available options or ''.
The available values are `A06`, `A08`, `A11`, `A03`, `A12`, `WB4`.
```

✔️😄 **Solution:** assign a default value.

```js Select.js
<Dropdown name="cageID" label="Cage ID" value={availableCages[0]} options={availableCages} />&nbsp;
```

## Mice
```mermaid
erDiagram
MICE{
text-PK id
text msid
text gender
text geno
date birthdate
text ear
text mom
text dad
text cage
text usage
text date
}
```

## Actions

```mermaid
erDiagram
ACTION{
text id
date action_date
text from_cage
text to_cage
text msid
text reason
text notes
text executed_by
text ear
text tail
}
```

The action table will be used to record action on daily bases.

## Cage

```mermaid
 erDiagram
    CAGE ||--o{ MOUSE : contains
    CAGE {
        text id
        text cageid
        text type
        text mouse1id
        text mouse2id
        text mouse3id
        text mouse4id
        text mouse5id
        int count
        date movein1
        date movein2
        date movein3
        date movein4
        date movein5
        text geno_type
        date birthdate
    }
    MOUSE {
        text id
        text msid
        text gender
        text geno
        text ear
        text mom
        text dad
        date birthdate
        text cageid
        text usage
        text date
    }
```

Where the possible values of Cage.type are
1. pair(breeding)
2. male
3. female 

the Cage.birthdate only for breeding cage.

## pair operation

```mermaid
graph LR
Male[("Male Mice")]
Female[("Female Mice")]
Pair[Pair<br>Move couple<br>to new Cage]
Cage[(New Cage<br>breeding<br>21 days reminder<br>New Born)]
WEAN[Wean]

Male --> Pair
Female-->Pair
Pair-->Cage
Cage--21 days-->WEAN
WEAN-->Male_new[(Male)]
WEAN-->Female_new[(Female)]

classDef db fill:#aaafb0,stroke:#1a404a,stroke-width:2px;
classDef js fill:#73dbf7,stroke:#194652,stroke-width:2px;

class WEAN,Pair js
class Male,Female,Born,Cage db

```

![](images/cageManage.jpg)

## Update cages on action

It is possible that there already some mice in the same cage.

```mermaid
graph LR
ACTION(Action)
BREEDING[Breeding]
WEAN[Wean]
TRANS[Transfer]

ACTION --> BREEDING & WEAN & TRANS
```

```mermaid
graph LR

FROM[From cage]
TO[To cage]
MOUSE[Mouse]

FROM --> MOUSE --> TO
```

```mermaid
graph TB

LOOP(loop)
GET[Get mouse<br>from source Cage]
EXIST{empty space?}
UPDATE[Update mouse id<br>in distination cage<br>update msid & move in date]
END[Terminated]

LOOP --> GET
GET --> EXIST
EXIST--True-->UPDATE --> LOOP
EXIST--False-->END

```