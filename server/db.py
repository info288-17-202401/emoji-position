from flask_pymongo import PyMongo
from pymongo.errors import PyMongoError
import os

mongo = PyMongo()

def init_app(app):
    # Configura la conexión a MongoDB
    app.config["MONGO_URI"] = os.getenv("MONGO_URI")
    mongo.init_app(app)

    # Verifica la conexión a MongoDB
    try:
        mongo.db.command("serverStatus")
        print("Connected to MongoDB successfully")
    except PyMongoError as e:
        print("Failed to connect to MongoDB", str(e))
        exit(1)
        