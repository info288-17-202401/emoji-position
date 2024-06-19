from flask import Flask, request, jsonify
from pymongo import MongoClient
from datetime import datetime, timedelta
from apscheduler.schedulers.background import BackgroundScheduler
from flask_cors import CORS
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

mongo_uri = os.environ.get('MONGO_URI')
db_name = os.environ.get('DB_NAME')
collection_name = os.environ.get('COLLECTION_NAME')

print(mongo_uri)

client = MongoClient(mongo_uri)
db = client[db_name]
collection = db[collection_name]

def delete_old_positions():
    threshold = datetime.utcnow() - timedelta(seconds=20)
    result = collection.delete_many({'timestamp': {'$lt': threshold}})
    print(f"Deleted {result.deleted_count} old positions")

scheduler = BackgroundScheduler()
scheduler.add_job(delete_old_positions, 'interval', seconds=20)
scheduler.start()

@app.route('/api/saveposition', methods=['POST'])
def save_position():
    try:
        data = request.json
        user_id = data['userId']
        latitude = data['latitude']
        longitude = data['longitude']
        emoji_id = data['emojiId']
        timestamp = datetime.utcnow()

        document = {
            'userId': user_id,
            'latitude': latitude,
            'longitude': longitude,
            'emojiId': emoji_id,
            'timestamp': timestamp
        }

        collection.update_one(
            {'userId': user_id}, 
            {'$set': document},
            upsert=True 
        )

        return jsonify({'message': 'Position saved successfully!'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route('/api/getpositions', methods=['GET'])
def get_positions():
    try:
        positions = list(collection.find({}, {'_id': False}))
        return jsonify(positions), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    port = os.environ.get('PORT2')
    if not port:
        port = 5002
    try:
        app.run(debug=True, port=port)
    except (KeyboardInterrupt, SystemExit):
        scheduler.shutdown()