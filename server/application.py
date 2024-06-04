from flask import Flask, jsonify, request

from controllers.position import position_controller
from controllers.controller2 import controller2
from bson.json_util import dumps
from dotenv import load_dotenv

from db import init_app

load_dotenv()

app = Flask(__name__)
init_app(app)

app.register_blueprint(position_controller)
app.register_blueprint(controller2)

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