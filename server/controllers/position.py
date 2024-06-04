from flask import Blueprint, jsonify, request
from models import User

from db import mongo

position_controller = Blueprint('position_controller', __name__, url_prefix='/position')

@position_controller.route('/', methods=['POST', 'GET'])
def position():
    # check type of method is 
    if request.method == 'POST':
        return insert_user()
    elif request.method == 'GET':
        return get_all()
    else:
        return jsonify({"error": "Method not allowed"}), 405
    

def get_all():
    try:
        users = mongo.db.users.find()
        users_data = [{**user, "_id": str(user["_id"])} for user in users]
        
        return jsonify([User(**user_data).dict() for user_data in users_data]), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400


def insert_user():
    try:
        user = User(**request.json)
        # Aquí puedes insertar `user` en tu base de datos
        mongo.db.users.insert_one(user.dict())
        
        return jsonify(user.dict()), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@position_controller.route('/get')
def get_position():
    return "Este es el endpoint 1"
