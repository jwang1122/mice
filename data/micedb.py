import sqlite3
from sqlite3 import Error
from pprint import pprint
import uuid

miceFields = (
    'msid', 'gender', 'geno', 'dob',
    'ear', 'mom', 'dad', 'cage',
    'usage', 'date', 'type'
)
breedingFields = (
    'dob', 'cage', 'born',
    'mom', 'dad'
)


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
        db.execute(
            f"INSERT INTO mice VALUES (?{',?'*len(miceFields)})", value)
        self.conn.commit()
        return mouse.get('id')

    # Create Breeding
    def create_breeding(self, mouse):
        """
        Create a breeding in database
        """
        db = self.getMiceDB()
        value = self.getValueFromBreeding(mouse)
        db.execute(
            f"INSERT INTO breeding {('id',)+breedingFields} VALUES (?{',?'*len(breedingFields)})", value)
        self.conn.commit()
        self.insertToMiceTable(mouse)
        return mouse.get('id')

    # get max mouseid
    def get_max_msid(self) -> int:
        db = self.getMiceDB()
        db.execute('SELECT max_A FROM maxid')
        max = db.fetchone()[0]
        db.execute(f'UPDATE maxid SET max_A={max+1}')
        self.conn.commit()
        return max

    # Create Multiple

    def insertToMiceTable(self, mouse):
        """
        Create a mouse in database
        """
        db = self.getMiceDB()
        born = mouse.get('born')
        for _ in range(int(born)):
            mouse['id'] = uuid.uuid4().hex
            mouse['msid'] = self.get_max_msid()
            mouse['gender'] = ''
            mouse['geno'] = ''
            mouse['ear'] = ''
            mouse['usage'] = ''
            mouse['date'] = ''
            mouse['type'] = ''
            self.create(mouse)

    # Retrieve one
    def getMouse(self, id):
        """
        Retrieve a mouse from database by id
        """
        db = self.getMiceDB()
        mouse = None
        try:
            value = (id,)
            db.execute('SELECT * FROM mice WHERE id=?', value)
            mouse = self.getMouseFromList(db.fetchone())
        except Exception as e:
            print(e)
        return mouse

    # Update
    def update(self, id, mouse):
        """
        Update one record in database
        """
        sql = f"""
        UPDATE mice SET
        gender='{mouse['gender']}',
        geno='{mouse['geno']}',
        ear='{mouse['ear']}',
        cage='{mouse['cage']}',
        usage='{mouse['usage']}',
        date='{mouse['date']}',
        type='{mouse['type']}'
        where id='{id}'
        """
        db = self.getMiceDB()
        db.execute(sql)
        self.conn.commit()
        return id

    # Delete
    def delete(self, mouse_id):
        """
        Delete a mouse by id
        """
        mouse = self.getMouse(mouse_id)
        db = self.getMiceDB()
        db.execute('DELETE FROM mice WHERE id=?', (mouse_id,))
        self.conn.commit()
        return mouse

    def getMouseFromList(self, row):
        mouse = {"id": row[0]}
        for i, field in enumerate(miceFields, 1):
            mouse[field] = row[i]
        return mouse

    def getValueFromMouse(self, mouse):
        value = [uuid.uuid4().hex]
        for field in miceFields:
            value.append(mouse[field])
        return value

    def getValueFromBreeding(self, mouse):
        value = [uuid.uuid4().hex]
        for field in breedingFields:
            value.append(mouse[field])
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
