import sqlite3
import uuid
import pandas as pd

miceDF = pd.read_csv('micelist.csv')

# print(miceDF)

# print(miceDF.columns)

conn = sqlite3.connect('mice.db')
c = conn.cursor()

sql = 'INSERT INTO mice VALUES (?,?,?,?,?,?,?,?,?,?,?)'

i=0
for data in miceDF.iloc:
    print(i, data['Ms ID'], data['Gender'], data['D.O.B'])
    i += 1
    c.execute(sql, (uuid.uuid4().hex, data['Ms ID'], data['Gender'], data['Geno'], data['D.O.B'], data['Ear'], data['Mom'], data['Dad'], data['Cage'], data['User'], data['Date']))
    conn.commit()

conn.close()

print("Done.")