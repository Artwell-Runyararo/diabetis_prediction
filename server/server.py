from flask import Flask, request, jsonify
import util
import json
from flask_cors import CORS, cross_origin
app = Flask(__name__)

CORS(app)
cors = CORS(app, resources={
    r"*":{
        "origins": "http://localhost:5173/"
    }
})
app.config['CORS HEADERS'] = 'Content-Type'

# Hit http point here API
@cross_origin()
@app.route('/predict_diabeties',  methods=['POST', 'GET'])
def predict_diabeties():

    data = json.loads(request.data) # Load the request from the user and store in the variable "data"
    print("Data from frontend:",data)
      
    pregnancies = float(data['pregnancies'])
    glucose = float(data['glucose'])
    diastolic = float(data['diastolic'])
    trieps = float(data['trieps'])
    insulin = float(data['insulin'])
    bmi = float(data['bmi'])
    dpf = float(data['dpf'])
    age = int(data['age'])

    response = jsonify({
        'estimated_value': util.get_estimated_diabeties(pregnancies,glucose,diastolic,trieps,insulin,bmi,dpf,age)
    })
    print("Data from Flask Response:",response.data)
    response.headers.add('Access-Control-Allow-Origin','*')

    return response.data


if __name__== "__main__":
    print("Starting Python Flask Server ...")
    util.load_saved_artifacts()
    app.run()