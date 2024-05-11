from flask import Blueprint, jsonify

controller2 = Blueprint('controller2', __name__)

@controller2.route('/endpoint2')
def endpoint2():
    return "Este es el endpoint 2"