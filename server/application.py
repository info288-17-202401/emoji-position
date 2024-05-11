from flask import Flask, jsonify
from controllers.controller1 import controller1
from controllers.controller2 import controller2

app = Flask(__name__)
app.register_blueprint(controller1)
app.register_blueprint(controller2)

@app.route('/')
def home():
    routes = []
    for rule in app.url_map.iter_rules():
        routes.append(str(rule))
    return jsonify(routes)

if __name__ == '__main__':
    app.run(debug=True)