from flask import Flask, request, jsonify
from pymongo import MongoClient
from datetime import datetime, timedelta
from apscheduler.schedulers.background import BackgroundScheduler
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
# Configurar la conexión a MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['emojipositiondb']
collection = db['positions']

# Función para eliminar posiciones antiguas
def delete_old_positions():
    threshold = datetime.utcnow() - timedelta(seconds=20)
    result = collection.delete_many({'timestamp': {'$lt': threshold}})
    print(f"Deleted {result.deleted_count} old positions")

# Configurar el scheduler
scheduler = BackgroundScheduler()
scheduler.add_job(delete_old_positions, 'interval', seconds=20)
scheduler.start()

@app.route('/saveposition', methods=['POST'])
def save_position():
    try:
        data = request.json
        user_id = data['userId']
        latitude = data['latitude']
        longitude = data['longitude']
        emoji_id = data['emojiId']
        timestamp = datetime.utcnow()

        # Crear el documento para insertar en MongoDB
        document = {
            'userId': user_id,
            'latitude': latitude,
            'longitude': longitude,
            'emojiId': emoji_id,
            'timestamp': timestamp
        }

        # Insertar el documento en la colección
        collection.update_one(
            {'userId': user_id},  # Condición para actualizar (por ejemplo, el mismo userId)
            {'$set': document},   # Datos a actualizar
            upsert=True           # Insertar si no existe
        )

        return jsonify({'message': 'Position saved successfully!'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route('/getpositions', methods=['GET'])
def get_positions():
    try:
        # Obtener todos los documentos de la colección
        positions = list(collection.find({}, {'_id': False}))
        return jsonify(positions), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    try:
        app.run(debug=True)
    except (KeyboardInterrupt, SystemExit):
        scheduler.shutdown()