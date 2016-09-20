from flask import Flask, render_template, request, jsonify
from flask.ext.triangle import Triangle
import json

app = Flask(__name__)
Triangle(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/addContact', methods=['POST'])
def contactDataPost():
    try:
        json_data = request.json["contactData"]
        firstName = json_data["firstName"]
        lastName = json_data["lastName"]
        email = json_data["email"]
        phoneNumber = json_data["phoneNumber"]
        address = json_data["address"]
        city = json_data["city"]
        country = json_data["country"]
        postalCode = json_data["postalCode"]

        return jsonify(status='OK', message=firstName)

    except Exception, e:
        return jsonify(status='ERROR', message=str(e))

if __name__ == "__main__":
    app.run(
            host="127.0.0.1",
            debug=True,
            port=5500
            )
