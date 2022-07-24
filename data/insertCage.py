import sqlite3
import uuid
import pandas as pd

conn = sqlite3.connect('mice.db')
c = conn.cursor()

sql = "SELECT DISTINCT cage FROM mice order by cage"

cageids = []
for cageid in conn.execute(sql):
    if cageid[0]:
        cageids.append(cageid[0])

print(len(cageids))

cage_cols = ("id","cageid","mouse1id","mouse2id","mouse3id","mouse4id","mouse5id","count","type")
def insertCage(cageid, msids):
    sql = f"insert into cages {cage_cols} values (?{',?'*8})"
    # print(sql)
    type = 'pair'
    param = [uuid.uuid4().hex, cageid]
    count = 0
    gender=set()
    for msid in msids:
        if msid[0]:
            gender.add(msid[1])
            param.append(msid[0])
            count += 1
    for i in range(5-count):
        param.append(None)
    param.append(count)
    if len(gender)==1:
        param.append(gender.pop())
    if len(gender)==2:
        param.append("pair")
    gender.clear()
    print(param)
    conn.execute(sql, param)
    conn.commit()


for cageid in cageids:
    print(cageid)
    sql1 = f"Select msid, gender from mice where cage='{cageid}'"
    msids = list(conn.execute(sql1))
    if len(msids)>0:
        insertCage(cageid, msids)

conn.close()

print("Done.")
