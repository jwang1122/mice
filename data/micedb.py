import sqlite3
from sqlite3 import Error
from pprint import pprint
import uuid
from datetime import datetime

class MiceDB:
    def __init__(self, dbname, url=None):
        self.dbname = dbname
        self.url = url

    def getMiceDB(self):
        self.conn = MiceDB.create_connection(self.dbname)
        c = self.conn.cursor()
        return c

    # Retrieve All
    def getMice(self):
        db = self.getMiceDB()
        MiceList = []
        try:
            for row in db.execute('select * from mice'):
                Mouse = self.getMouseFromList(row)
                MiceList.append(Mouse)
        except Exception as e:
            print("micedb-26:", e)

        return MiceList

    # Create One
    def create(self, mouse):
        """
        Create a mouse in database
        """
        print(mouse)
        db = self.getMiceDB()
        value = self.getValueFromMouse(mouse)
        db.execute('INSERT INTO mice VALUES (?,?,?,?,?,?,?,?,?,?,?,?)', value)
        self.conn.commit()
        return mouse.get('id')

    # Retrieve one
    def getMouse(self, id):
        """
        Retrieve a mouse from database by id
        """
        db = self.getMiceDB()
        mouse=None
        try:
            value = (id,)
            db.execute('select * from mice where id=?',value)
            mouse = self.getMouseFromList(db.fetchone())
        except Exception as e:
            print(e)
        return mouse

    # Update
    def update(self, id, mouse):
        print(mouse)
        """
        Update one record in database
        """
        sql = "update mice set cage='" + mouse['cage']+"',user='"+mouse['user']+"',date='"+mouse['date']+"',type='"+mouse['type']+"' where id='"+id+"'"
        db = self.getMiceDB()
        db.execute(sql)
        self.conn.commit()
        # self.delete(id)
        # self.create(mouse)
        return id

    # Delete
    def delete(self, mouse_id):
        """
        Delete a mouse by id
        """
        mouse = self.getMouse(mouse_id)
        db = self.getMiceDB()
        t = (mouse_id,)
        db.execute('delete from mice where id=?',t)
        self.conn.commit()
        return mouse
        
    def getMouseFromList(self, row):
        mouse = {
            "id": row[0],
            "msid": row[1],
            "gender": row[2],
            "geno": row[3],
            "dob": row[4],
            "ear": row[5],
            "mom": row[6],
            "dad": row[7],
            "cage": row[8],
            "user": row[9],
            "date": row[10],
            "type": row[11],
        }
        return mouse

    def getValueFromMouse(self, mouse):
        value = []
        value.append(uuid.uuid4().hex)
        value.append(mouse['msid'])
        value.append(mouse['gender'])
        value.append(mouse['geno'])
        value.append(mouse['dob'])
        value.append(mouse['ear'])
        value.append(mouse['mom'])
        value.append(mouse['dad'])
        value.append(mouse['cage'])
        value.append(mouse['user'])
        value.append(mouse['date'])
        value.append(mouse['type'])
        return value

    @classmethod
    def create_connection(cls, db_file):
        """ create a database connection to a SQLite database """
        conn = None
        try:
            conn = sqlite3.connect(db_file)
            # print(sqlite3.version)
        except Error as e:
            print(e)
        return conn

    @classmethod
    def create_table(cls, conn, create_table_sql):
        """ create a table from the create_table_sql statement
        :param conn: Connection object
        :param create_table_sql: a CREATE TABLE statement
        :return:
        """
        try:
            c = conn.cursor()
            c.execute(create_table_sql)
        except Error as e:
            print(e)


if __name__ == '__main__':
    db = MiceDB("mice.db")
    # test create one
    # user = {
    #     "id":uuid.uuid4().hex,
    #     "name": '14" Wrentch',
    #     "age": 12
    # }
    # print(db.create(mouse))

    # test retrieve many
    mice = db.getMice()

    pprint(mice)

    print("Done.")
