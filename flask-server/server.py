from flask import Flask, json,jsonify,request
import psycopg2

app= Flask(__name__)

def querys(query):
        isFirst=True
        if(request.json['id']):
            isFirst=False
            query+=("where CAST(id as varchar(10)) like '%"+str(request.json['id']))+"%'"
        if(request.json['name']):
            if(isFirst):
                query+=" where LOWER(first_name) LIKE '%"+str(request.json['name'])+"%'"
                isFirst=False
            else:
                query+=" AND LOWER(first_name) LIKE '%"+str(request.json['name'])+"%'"
        return query
    
def connection(name,password):
    return psycopg2.connect(
        host='localhost',
        database='test',
        user=name,
        password=password)

@app.route("/members", methods = ['GET','POST'])
def members():
    #here mounting data requist
    conn=connection('postgres','99201012')
    cur=conn.cursor()
    if request.method == "POST":
        isFirst=True
        #return jsonify(request.json['id'],request.json['name'])
        query="select * from table1 "
        query=querys(query)
        cur.execute(query)
        ruv=cur.fetchall()
        cur.close()
        conn.close()
        return jsonify(ruv)
    else : 
        return  'welcome'
@app.route('/all',methods = ['GET','POST'])
def all():
    #here query search
    conn=connection('postgres','99201012')
    cur=conn.cursor()
    if request.method == "POST":
        query="select * from "
        server= int(request.json['server'])
        if(server==1):
            query+="table1"
        elif(server==2):
            query+="table2"
        query=querys(query)
        query+=" LIMIT 100"
        cur.execute(query)
        ruv=cur.fetchall()
        cur.close()
        conn.close()
        return jsonify(ruv)
    else : 
        return  'welcome'


if __name__ =="__main__":
    app.run(debug=True)