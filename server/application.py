from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from pymongo.errors import PyMongoError
from controllers.controller1 import controller1
from controllers.controller2 import controller2
from bson.json_util import dumps
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
app.register_blueprint(controller1)
app.register_blueprint(controller2)

# Configura la conexión a MongoDB
app.config["MONGO_URI"] = os.getenv("MONGO_URI")
mongo = PyMongo(app)

# Verifica la conexión a MongoDB
try:
    mongo.db.command("serverStatus")
    print("Connected to MongoDB successfully")
except PyMongoError as e:
    print("Failed to connect to MongoDB", str(e))
    exit(1)

@app.route('/data', methods=['POST'])
def add_data():
    data = request.get_json()
    mongo.db.myCollection.insert_one(data)
    return jsonify({"message": "Data added successfully"}), 201

@app.route('/data', methods=['GET'])
def get_data():
    data = mongo.db.myCollection.find()
    return dumps(data), 200

@app.route('/')
def home():
    routes = []
    for rule in app.url_map.iter_rules():
        routes.append(str(rule))
    return jsonify(routes)

if __name__ == '__main__':
    app.run(debug=True)