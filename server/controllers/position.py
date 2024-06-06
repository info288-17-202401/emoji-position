from flask import Blueprint, jsonify, request
from models import User, Position, Location

from db import mongo

position_controller = Blueprint('position_controller', __name__, url_prefix='/position')

@position_controller.route('', methods=['POST', 'GET'])
def position():
    # check type of method is 
    if request.method == 'POST':
        return post_position()
    elif request.method == 'GET':
        return get_position()
    else:
        return jsonify({"error": "Method not allowed"}), 405
    

def get_position():
    try:
        users = mongo.db.users.find()
        response_users = []
        for user in users:
            position = mongo.db.positions.find_one({"userId": user["userId"]}, sort=[("timestamp", -1)])
            if position is not None:
                position_dict = {**Position(**position).dict(), "emojiId": user["emojiId"]}
                response_users.append(position_dict)
                
        return jsonify(response_users), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400


def post_position():
    try:
        data = request.json

        if "sessionId" in data:
            user = mongo.db.users.find_one({"sessionId": data["sessionId"]})
            if user is None:
                return jsonify({"error": "User not found"}), 404

            userId = user["userId"]
            position = {"userId": userId, "location": data["location"]}           
            position = Position(**position)
            
            mongo.db.positions.insert_one(position.dict())
            
            return jsonify(position.dict()), 201
            
        else:
            return jsonify({"error": "sessionId is required"}), 400
        
    except Exception as e:
        return jsonify({"error": str(e)}), 400
