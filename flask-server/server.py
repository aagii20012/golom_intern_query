from flask import Flask, json,jsonify,request
from flask_restful import Resource,  Api
import psycopg2

app= Flask(__name__)
api = Api(app)

def connection():
    return psycopg2.connect(
        host='localhost',
        database='task1',
        user='postgres',
        password='alterego')

@app.route("/login", methods = ['GET','POST'])
def users():
    conn=connection()
    cur=conn.cursor()
    query="select * from users where username='"+request.json['userDom']['name']+"' and password='"+request.json['userDom']['pass']+"'"
    cur.execute(query)
    rv = cur.fetchall()
    if(len(rv)<=0):
        return jsonify("noting found")
    elif (len(rv)>1):
        return jsonify("many acc  found")
    elif (len(rv)==1):
        return jsonify(rv)

@app.route("/admin/users", methods = ['GET','POST'])
def reTurnAllUsers():
    conn=connection()
    cur=conn.cursor()
    query=""
    if(request.json['isAdmin']=="true"):
        query+="select * from users where isadmin = 1"
    else: query+="select * from users where isadmin = 0"
    cur.execute(query)
    rv = cur.fetchall()
    return jsonify(rv)

@app.route("/admin/edit", methods = ['GET','POST'])
def editUsers():
    conn=connection()
    cur=conn.cursor()
    query="select * from users where isadmin = 0"
    cur.execute(query)
    rv = cur.fetchall()
    return jsonify(rv)

        
    

if __name__ =="__main__":
    app.run(debug=True)