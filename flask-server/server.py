from flask import Flask, json,jsonify,request
import psycopg2

app= Flask(__name__)

@app.route("/members", methods = ['GET','POST'])
def members():
    conn=psycopg2.connect(
        host='localhost',
        database='test',
        user='postgres',
        password='99201012')
    cur=conn.cursor()
    if request.method == "POST":
        #return jsonify(request.json['id'])
        query="select * from testtable where id = "+(request.json['id'])
        cur.execute(query)
        ruv=cur.fetchall()
        return jsonify(ruv)
    else : 
        return  'welcome'

    cur.close()

    conn.close()

if __name__ =="__main__":
    app.run(debug=True)