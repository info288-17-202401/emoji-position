from flask import Blueprint, jsonify, request
from db import mongo

from models import User

user_controller = Blueprint('user_controller', __name__, url_prefix='/user')

@user_controller.route('', methods=['POST', 'GET'])
def index():
    if request.method == 'POST':
        return post_user()
    elif request.method == 'GET':
        return get_users()
    else:
        return jsonify({"error": "Method not allowed"}), 405

def post_user():
    try:
        data = request.json
        sessionId = user['sessionId']
        
        if sessionId is None:
            return jsonify({"error": "sessionId is required"}), 400
        
        user = mongo.db.users.find_one({"sessionId": sessionId})
        if not user:
            user = User(**request.json)
            next_user_id = mongo.db.users.find_one(sort=[("userId", -1)])["userId"] + 1
            user.userId = next_user_id
            mongo.db.users.insert_one(user.dict())
            
            return jsonify({"user": user.dict(), "response": "inserted"}), 201
        else:
            if 'userId' in data and data['userId'] != user['userId']:
                return jsonify({"error": "userId cannot be changed"}), 400
            
            user = User(**user)
            
            res = mongo.db.users.update_one({"sessionId": sessionId}, {"$set": user.dict()})
            
            if res.modified_count == 0:
                return jsonify({"error": "User not found"}), 404
            
            return jsonify({"user": user.dict(), "response": "updated"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400
    

def get_users():
    try:
        users = mongo.db.users.find()
        users_data = [{**user, "_id": str(user["_id"])} for user in users]
        users = [User(**user_data).dict() for user_data in users_data]
        
        for user in users:
            user.pop("sessionId", None)
                    
        return jsonify(users), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400