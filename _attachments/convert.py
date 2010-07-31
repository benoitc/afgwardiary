
import csv
import copy
import os
import sys
import uuid

import eventlet
eventlet.monkey_patch(all=False, socket=True, select=True)


from couchdbkit import Server


SERVER_URI = "http://127.0.0.1:5984"
DBNAME = "afgwar"

AFG_FILENAME = "afg.csv"

PROPS = (
    "_id",
    "Date", 
    "Type",
    "Category", 
    "TrackingNumber", 
    "Title", 
    "Summary",
    "Region", 
    "AttackOn", 
    "ComplexAttack", 
    "ReportingUnit", 
    "UnitName", 
    "TypeOfUnit", 
    "FriendlyWIA", 
    "FriendlyKIA", 
    "HostNationWIA", 
    "HostNationKIA", 
    "CivilianWIA", 
    "CivilianKIA", 
    "EnemyWIA", 
    "EnemyKIA", 
    "EnemyDetained", 
    "MGRS", 
    "Latitude", 
    "Longitude", 
    "OriginatorGroup", 
    "UpdatedByGroup", 
    "CCIR", 
    "Sigact", 
    "Affiliation", 
    "DColor", 
    "Classification"
)


def save_docs(db, docs):
    db.bulk_save(docs)

def main():
    s = Server(SERVER_URI)
    db = s.get_or_create_db(DBNAME)

    pool = eventlet.GreenPool()
    sys.stdout.write("Starting conversion...\r")
    with open(AFG_FILENAME) as f:
        afgReader = csv.reader(f, delimiter=",")

        docs = []
        c = "/"
        for row in afgReader:
            doc = {}
            for idx, name in enumerate(PROPS):
                doc[name] = row[idx]
       
            if len(docs) == 100:
                sys.stdout.write("Conversion in progress: %s \r" % c)
                if c == "/":
                    c = "\\"
                else:
                    c = "/"
                pool.spawn_n(save_docs, db, copy.copy(docs))
                eventlet.sleep(0.1)
                docs = []
            docs.append(doc)
    
    pool.waitall()
    print "\ndone."

if __name__ == "__main__":
    main()
