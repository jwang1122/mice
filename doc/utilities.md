<h1>Markdown Document Utilities</h1>

## references
* [Color Picker](https://www.webfx.com/web-design/color-picker/)
* [favorite icon website](https://www.webfx.com/tools/emoji-cheat-sheet/)

- [references](#references)
- [Notations](#notations)
- [Useful Icons](#useful-icons)
- [Change image size](#change-image-size)
- [Sample File Structure:](#sample-file-structure)
- [Sample Mermaid Graph Diagram](#sample-mermaid-graph-diagram)
- [Simple Mermaid Relational Diagram](#simple-mermaid-relational-diagram)
- [Simple Mermaid Class Diagram](#simple-mermaid-class-diagram)
- [汉语拼音韵母声号](#汉语拼音韵母声号)
- [Fast way to learn something new:](#fast-way-to-learn-something-new)
- [math symbols](#math-symbols)

## Notations
🔑😄 **Knowlodge Base**
📝✏️ **Source Code**
❌⚡️ **Mistake:**
👌💡 **Reasong:**
✔️😄 **Solution:**
👍😄 **Conclusion**
👎😢 **Problem:**
🔨📐 **Homeworks:**
🔔⚡️ **Issue:**

## Useful Icons

❓>✔️ 📌❗️ 👍😄 👎😱 👎😢❌✔️😄 💡👉 🔔⚡️ 🔒🔑🔥⚡️ ☝️👌
✏️📄✂️♻️ ➡️
📝🔍🔨☝️😢👇👈😢👉👍👎👌👊⭐️👎😢🌎💾🗑🐛📒⚠️📐🛠🎯✉️☎️

:hammer:
:department_store:
:gear:

- [references](#references)
- [Notations](#notations)
- [Useful Icons](#useful-icons)
- [Change image size](#change-image-size)
- [Sample File Structure:](#sample-file-structure)
- [Sample Mermaid Graph Diagram](#sample-mermaid-graph-diagram)
- [Simple Mermaid Relational Diagram](#simple-mermaid-relational-diagram)
- [Simple Mermaid Class Diagram](#simple-mermaid-class-diagram)
- [汉语拼音韵母声号](#汉语拼音韵母声号)
- [Fast way to learn something new:](#fast-way-to-learn-something-new)
- [math symbols](#math-symbols)


## Change image size
<img src="images/bug.png" width="32"/><img src="images/waiting.gif" width="32">

[](images/bug.png) [](images/waiting.gif)

## Sample File Structure:

```output
user
    ├── public/
    |       └── index.html
    ├── 🔥src/
    |       ├── components/
    |       |       └── UI/
    |       ├── index.js
    |       └── App.js
    ├── package.json
    └── 👉ReadMe.md
```

## Sample Mermaid Graph Diagram

😄Include frequently used mermaid diagram features below👇

```mermaid
graph TB

START((start))
END[end]
B[code block]
C(["fa:fa-align-left Round box<br>function(arguments)"])
IF{condition<br> block}
DB[("fa:fa-hammer database")]

START-->IF
IF--True-->DB-->END
IF--False-->B-->END

classDef start fill:#3cdf77,stroke:#1a6d38,stroke-width:2px,color:white;
classDef html fill:#F46624,stroke:#F46624,stroke-width:4px,color:white;
classDef js fill:#73dbf7,stroke:#194652,stroke-width:2px;
classDef if fill:#f2e589,stroke:black,stroke-width:2px;
classDef db fill:#aaafb0,stroke:#1a404a,stroke-width:2px;
classDef end1 fill:#f17168,stroke:#902a23,stroke-width:2px,color:white;

class START start
class B,D,E js
class IF if
class DB db
class END end1
```

## Simple Mermaid Relational Diagram

```mermaid
 erDiagram
    PROJECT ||--o{ TASK : contains
    PROJECT {
        int id
        string name
        date begineDate
        date endDate
    }
    TASK {
        int id
        string name
        date beginDate
        date endDate
    }
```

## Simple Mermaid Class Diagram

```mermaid
classDiagram
direction RL

class Occupation{
  Occupation: +getOccupation() String
}
<<interface>> Occupation

class Person{
  #name: String
  #ssn: String
  #age: int
  #gender: String
}
<<abstract>> Person

Occupation <|-- Person
Person <|-- Teacher
Person <|-- Doctor
Person <|-- Developer
```

## 汉语拼音韵母声号
第一声（阴平，或平调，¯）：
ā (ɑ̄) ē ī ō ū ǖ Ā Ē Ī Ō Ū Ǖ
第二声（阳平，或升调，ˊ）：
á (ɑ́) é í ó ú ǘ Á É Í Ó Ú Ǘ
第三声（上声，或上音，ˇ）：
ǎ (ɑ̌) ě ǐ ǒ ǔ ǚ Ǎ Ě Ǐ Ǒ Ǔ Ǚ
第四声（去声，或去音，ˋ）：
à (ɑ̀) è ì ò ù ǜ À È Ì Ò Ù Ǜ
轻声，不标符号：
a (ɑ) e i o u ü A E I O U Ü

## Fast way to learn something new:
  1. DIY (do it yourself);
  2. learn from mistake;
  3. repeat;
  4. take good note for future review;
  5. teach someone else.

## math symbols
|operator | LaTex Symbols |
|---------|---------------|
× | times
÷ | div
± | pm
° | degree
∞ | infty
ϕ | phi
Φ | Phi
θ | theta
α | alpha
β | beta
γ | gamma
δ | delta
μ | mu
π | pi
λ | lambda
ω | omega
⇒ | Rightarrow
⟹| Longrightarrow
⇓ | Downarrow
@ 
