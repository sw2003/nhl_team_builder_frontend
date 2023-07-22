from flask import Flask, request, jsonify
from helpers import getTeamData
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/api", methods=['GET'])
def hello_world():
    args = request.args
    teamname = args['teamname'] 


    arr = getTeamData(teamname)

    return jsonify(arr)


if __name__ == '__main__':
    app.run(debug=False, port=8000)