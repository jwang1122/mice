import sqlite3
from sqlite3 import Error
from pprint import pprint
import uuid
from datetime import date, datetime
import logging

log_format = '%(asctime)s %(levelname)s [%(name)s] - %(message)s::%(filename)s::%(lineno)d'
logging.basicConfig(filename='mylogs.log', filemode='w', level=logging.INFO, format=log_format)
logger = logging.getLogger('MICEDB')

miceFields = (
    'msid', 'gender', 'geno', 'dob',
    'ear', 'mom', 'dad', 'cage',
    'usage', 'date', 'type'
    )

usedFields = (
    'msid', 'gender', 'geno', 'birthdate',
    'ear', 'mom', 'dad', 'cage',
    'notes', 'termination', 'type'
    )

cageFields = (
    'cageid', 'type', 'mouse1id', 'mouse2id',
    'mouse3id', 'mouse4id', 'mouse5id', 'count','geno_type',
    'movein1', 'movein2', 'movein3','movein4','movein5','notes','birthdate'
    )

breedingFields = (
    'type', 'dob', 'cage', 'born',
    'mom', 'dad'
    )

actionFields = (
    'date','msid','from_cage','to_cage','gender',
    'tail','reason','notes','executed_by'
    )

class MiceDB:
    def __init__(self, dbname, url=None):
        self.dbname = dbname
        self.url = url

    def getMiceDB(self):
        self.conn = MiceDB.create_connection(self.dbname)
        c = self.conn.cursor()
        return c

    # Retrieve All mice
    def getMice(self):
        db = self.getMiceDB()
        miceList = []
        try:
            for row in db.execute('SELECT * FROM mice'):
                mouse = self.getMouseFromList(row)
                miceList.append(mouse)
        except Exception as e:
            logger.critical(e)

        return miceList

    # Retrieve All used mice
    def getUsedMice(self):
        db = self.getMiceDB()
        miceList = []
        try:
            for row in db.execute('SELECT * FROM used'):
                mouse = self.getUsedFromList(row)
                miceList.append(mouse)
        except Exception as e:
            logger.critical(e)

        return miceList

    # Retrieve All cages
    def getCages(self):
        db = self.getMiceDB()
        cageList = []
        try:
            sql= 'SELECT * FROM cages'
            logger.info(sql)
            for row in db.execute(sql):
                cage = self.getCageFromList(row)
                cageList.append(cage)
        except Exception as e:
            logger.critical(e)

        return cageList

    # Retrieve All actions
    def getActions(self):
        db = self.getMiceDB()
        actionList = []
        try:
            sql = 'SELECT * FROM actions'
            logger.info(sql)
            for row in db.execute(sql):
                action = self.getActionFromList(row)
                actionList.append(action)
        except Exception as e:
            logger.critical(e)

        return actionList

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

    # get max mouseid
    def get_max_msid(self) -> int:
        db = self.getMiceDB()
        sql = 'SELECT max_A FROM maxid'
        logger.info(sql)
        db.execute(sql)
        max = db.fetchone()[0]
        sql = f'UPDATE maxid SET max_A={max+1}'
        logger.info(sql)
        db.execute(sql)
        self.conn.commit()
        return max

    def getAvailableCages(self, count=0):
        db = self.getMiceDB()
        cageList = []
        try:
            sql = f'SELECT cageid, "-", count FROM cages where count<={count}'
            logger.info(sql)
            for row in db.execute(sql):
                cageList.append(row)
        except Exception as e:
            logger.critical(e)

        return cageList

    # Retrieve All actions
    def getGreedings(self):
        db = self.getMiceDB()
        cageList = []
        try:
            sql = "SELECT * FROM cages where type='pair'"
            logger.info(sql)
            for row in db.execute(sql):
                cage = self.getCageFromList(row)
                cageList.append(cage)
        except Exception as e:
            logger.critical(e)

        return cageList

    def getCageById(self, cageid):
        db = self.getMiceDB()
        sql = f"SELECT * from cages where cageid='{cageid}'"
        logger.info(sql)
        db.execute(sql)
        cage = self.getCageFromList(db.fetchone())
        # print("micedb-168:", cage)
        return cage

    # Create One
    def create(self, mouse):
        """
        Create a mouse in database
        """
        # print(mouse)
        db = self.getMiceDB()
        value = self.getValueFromMouse(mouse)
        sql = f"INSERT INTO mice VALUES (?{',?'*len(miceFields)})"
        logger.info(sql)
        db.execute(sql, value)
        self.conn.commit()
        return mouse.get('id')

    # Create One
    def create_cage(self, cage):
        """
        Create a mouse in database
        """
        # print(cage)
        db = self.getMiceDB()
        id = uuid.uuid4().hex
        cageid = cage['cageid']
        sql = f"INSERT INTO cages (id, cageid, count) VALUES (?, ?, 0)", (id, cageid)
        logger.info(sql)
        db.execute(sql)
        self.conn.commit()
        return cage.get('id')

    # Create action
    def create_action(self, action):
        """
        Create a action in database
        """
        db = self.getMiceDB()
        id = uuid.uuid4().hex
        date = datetime.today().strftime('%Y-%m-%d')
        msid = action['msid']
        from_cage = action['from_cage']
        to_cage = action['to_cage']
        gender = action['gender']
        reason = action['reason']
        sql = f"INSERT INTO actions (id, date, msid, from_cage, to_cage, gender, reason) VALUES (?, ?, ?, ?, ?, ?, ?)"
        logger.info(sql)
        db.execute(sql,(id, date, msid, from_cage,to_cage, gender, reason))
        self.conn.commit()
        self.update_mice_cage(action)
        return id

    def create_wean_action(self, wean, mouse):
        action = {
            'id':uuid.uuid4().hex,
            'date':datetime.today().strftime('%Y-%m-%d'),
            'msid':mouse['msid'],
            'from_cage':wean['from_cage'],
            'to_cage':wean['to_cage'],
            'gender':'',
            'tail':'',
            'reason':wean['reason'],
            'notes':'',
            'executed_by':'',
        }
        self.create_action(action)
        self.update_wean_cage(action)

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

    def insertToMiceTable(self, mouse):
        """
        Create a mouse in database
        """
        db = self.getMiceDB()
        mouse['gender'] = ''
        mouse['geno'] = ''
        mouse['ear'] = ''
        mouse['usage'] = ''
        mouse['date'] = ''
        self.create(mouse)

    def update_wean_cage(self, action):
        print("micedb-203:", action)
        cage = self.getCageById(action['to_cage'])
        print("mice-264:", cage)

    def update_mice_cage(self, action):
        # print("micedb:line-120",action)
        db = self.getMiceDB()
        sql = f"UPDATE mice set cage='{action['to_cage']}' where id='{action['id']}'"
        logger.info(sql)
        db.execute(sql)
        self.conn.commit()
        today = datetime.today().strftime('%Y-%m-%d')
        if(action['gender']=='M'):
            sql = f"UPDATE cages set type='pair', mouse1id='{action['msid']}', count=2, movein1='{today}' where cageid='{action['to_cage']}'"
        if(action['gender']=='F'):
            sql = f"UPDATE cages set type='pair', mouse2id='{action['msid']}', count=2, movein2='{today}' where cageid='{action['to_cage']}'"
        db.execute(sql)
        self.conn.commit()
    
    # Update mice
    def update (self, id, mouse):
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

    # Update cages
    def update_cages (self, id, cage):
        """
        Update one record in database
        """
        sql = f"""
        UPDATE cages SET
        movein1='{cage['movein1']}',
        movein2='{cage['movein2']}',
        movein3='{cage['movein3']}',
        movein4='{cage['movein4']}',
        movein5='{cage['movein5']}',
        notes='{cage['notes']}',
        birthdate='{cage['birthdate']}'
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

    def getUsedFromList(self, row):
        mouse = {"id": row[0]}
        for i, field in enumerate(usedFields, 1):
            mouse[field] = row[i]
        return mouse

    def getCageFromList(self, row):
        cage = {"id": row[0]}
        for i, field in enumerate(cageFields, 1):
            cage[field] = row[i]
        return cage

    def getActionFromList(self, row):
        action = {"id": row[0]}
        for i, field in enumerate(actionFields, 1):
            action[field] = row[i]

        return action

    def getValueFromMouse(self, mouse):
        value = [uuid.uuid4().hex]
        for field in miceFields:
            value.append(mouse[field])
        return value

    def getValueFromCage(self, cage):
        value = [uuid.uuid4().hex]
        for field in cageFields:
            value.append(cage[field])
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
    # mice = db.getMice()
    # pprint(mice)
    # cageids = db.getAvailableCages(0)
    # print(cageids)
    # wean = {'dad': '2827', 'mom': '2833', 'birthdate': '2022-07-12', 'from_cage': 'J16', 'to_cage': 'EA15+++', 'count': '3', 'reason': 'wean'}    
    # db.create_wean(wean)
    
    action = {'id': '5340acf3983a4520bb8fc16bc464cd41', 'date': '2022-07-23', 'msid': '1193', 'from_cage': 'J16', 'to_cage': 'A01', 'gender': '', 'tail': '', 'reason': 'wean', 'notes': '', 'executed_by': ''}
    db.update_wean_cage(action)

    print("Done.")
