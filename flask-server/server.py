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
        isFirst=True
        #return jsonify(request.json['id'],request.json['name'])
        query="select * from testtable "
        if(request.json['id']):
            query+="where id = "+(request.json['id'])
        elif(request.json['name']):
            query+=" first_name like '%"+request.json['id']+"%'"
        cur.execute(query)
        colName=[desc[0] for desc in cur.description]
        print(colName)
        ruv=cur.fetchall()
        return jsonify(ruv)
    else : 
        return  'welcome'

    cur.close()

    conn.close()
@app.route('/all',methods = ['GET','POST'])
def all():
    conn=psycopg2.connect(
        host='localhost',
        database='test',
        user='postgres',
        password='99201012')
    cur=conn.cursor()
    if request.method == "POST":
        isFirst=True
        query="select * from "
        server= int(request.json['server'])
        if(server==1):
            query+="testtable"
        elif(server==2):
            query+="testtable2"
        elif(request.json['id']):
            isFirst=False
            query+=("where id = "+str(request.json['id']))
        if(request.json['name']):
            if(isFirst):
                query+=" where (first_name) LIKE '%"+str(request.json['name'])+"%'"
                isFirst=False
            else:
                query+=" AND first_name LIKE '%"+str(request.json['name'])+"%'"
        #return query
        #query="select * from testtable LIMIT 100"
        query+=" LIMIT 100"
        cur.execute(query)
        ruv=cur.fetchall()
        return jsonify(ruv)
    else : 
        return  'welcome'

if __name__ =="__main__":
    app.run(debug=True)