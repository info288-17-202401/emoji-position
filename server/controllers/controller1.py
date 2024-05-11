from flask import Blueprint, jsonify

controller1 = Blueprint('controller1', __name__)

@controller1.route('/endpoint1')
def endpoint1():
    return "Este es el endpoint 1"