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