
import csv
import copy
import os
import re
import sys
import uuid

import eventlet
eventlet.monkey_patch(all=False, socket=True, select=True)

csv.field_size_limit(1000000000)

from pyparsing import alphanums, QuotedString, Word, delimitedList, \
OneOrMore, LineEnd

from couchdbkit import Database


PROPS = (
    "id",
    "Url",
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


re_csv = re.compile(r'''
    \s*                # Any whitespace.
    (                  # Start capturing here.
      [^,"']+?         # Either a series of non-comma non-quote characters.
      |                # OR
      "(?:             # A double-quote followed by a string of characters...
          [^"\\]|\\.   # That are either non-quotes or escaped...
       )*              # ...repeated any number of times.
      "                # Followed by a closing double-quote.
      |                # OR
      '(?:[^'\\]|\\.)*'# Same as above, for single quotes.
    )                  # Done capturing.
    \s*                # Allow arbitrary space before the comma.
    (?:,|$)            # Followed by a comma or the end of a string.
    ''', re.VERBOSE)


re_csv2 = re.compile(r'''
    ^(?:    # Capture from the start.
      # Below is the same regex as above, but condensed.
      # One tiny modification is that it allows empty values
      # The first plus is replaced by an asterisk.
      \s*([^,"']*?|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')\s*(?:,|$)
    )*$    # And don't stop until the end.
    ''', re.VERBOSE)

def parse_csv(fname):
    in_quote = False
    line = ""
    field = ""
    last = ""
    with open(fname, "rU") as f:
        while True:
            fline = f.readline()
            if not fline:
                break 
            line += fline
            
            m = re_csv2.match(line)
            if m:
                yield re_csv.findall(line)
                line = ""

def main(dburi, fname):
    db = Database(dburi, create=True)

    pool = eventlet.GreenPool()
    sys.stdout.write("Starting conversion...\r")
    docs = []
    nb = 0
    for row in parse_csv(fname):
        if nb == 0: #first line
            nb += 1
            continue
        if len(row) != 34:
            continue

        print "%s doc processed" % nb
        doc = {}
        for idx, name in enumerate(PROPS):
            value = row[idx]
            
            if value.startswith('"'):
                value = value[1:]
            if value.endswith('"'):
                value = value[:-1]
           
            if name != "_id":
                try:
                    value = int(value)
                except ValueError:
                    pass
            else:
                value = str(value)

            if value == "<null value>":
                value = ""

            doc[name] = value

        if len(docs) == 500:
            print "Sending to CouchDb"
            pool.spawn_n(save_docs, db, copy.copy(docs))
            eventlet.sleep(1)
            docs = []
        docs.append(doc)
        nb += 1
    
    if docs: # send last docs
        print "Sending to CouchDb"
        pool.spawn_n(save_docs, db, copy.copy(docs))
        eventlet.sleep(0)

    pool.waitall()
    print "\ndone."

if __name__ == "__main__":
    args = sys.argv[1:]
    if len(args) < 2:
        print >>sys.stderr, "command is: convert.py dburi fname"
        sys.exit(1)
    
    dburi = args[0]
    fname = os.path.normpath(os.path.join(os.getcwd(), args[1]))
    main(dburi, fname)
