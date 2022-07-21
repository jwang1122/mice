import sqlite3
import uuid
import pandas as pd

miceDF = pd.read_csv('asmUsed.csv')

conn = sqlite3.connect('mice.db')
c = conn.cursor()

vals = 'msid', 'gender', 'geno', 'birthdate', 'ear', 'mom', 'dad', 'cage', 'notes', 'termination'

sql = f"INSERT INTO used VALUES (?{',?' * len(vals)}, ?)"

for i, data in enumerate(miceDF.iloc):
    param = [uuid.uuid4().hex]
    for s in vals:
        if data[s] is None:
            param.append(None)
            continue
        param.append(f"{data[s]}")
    param.append('asm')
    c.execute(sql, param)
    conn.commit()

conn.close()

print("Done.")
