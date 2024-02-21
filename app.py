from flask import Flask, jsonify

app = Flask(__name__)

candidates = [
    {"name": "John Doe", "role": "President", "party": "Democratic Party"},
    {"name": "Jane Smith", "role": "Senator", "party": "Republican Party"},
    # Add more candidates as needed
]

@app.route('/candidates', methods=['GET'])
def get_candidates():
    return jsonify(candidates)

if __name__ == '__main__':
    app.run(debug=True)
