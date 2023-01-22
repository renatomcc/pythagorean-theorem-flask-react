from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS, cross_origin
from pt_calculator import perform_calculation

app = Flask(__name__)
CORS(app)

@app.route('/calculator', methods=['POST'])  
def calculator():
    square_one = request.json['square_one']
    square_two = request.json['square_two']

    result = perform_calculation(square_one, square_two)

    return jsonify(result)

@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == "__main__":
    app.run(debug=True)

app.run()