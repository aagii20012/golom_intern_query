from flask import Flask, json,jsonify
import psycopg2

app= Flask(__name__)

@app.route("/members")
def members():
    conn=psycopg2.connect(
        host='localhost',
        database='test',
        user='postgres',
        password='99201012')
    cur=conn.cursor()

    cur.execute("select * from testtable")
    ruv=cur.fetchall()

    return  jsonify(ruv)

    cur.close()

    conn.close()

if __name__ =="__main__":
    app.run(debug=True)