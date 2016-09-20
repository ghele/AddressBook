from flask import Flask, render_template, request, jsonify
from flask.ext.triangle import Triangle
import json

app = Flask(__name__)
Triangle(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/addContact', methods=['GET', 'POST'])
def contactDataPost():
    try:
        json_data = request.json['contactData']
        return jsonify(status='OK', message='inserted successfully')

    except Exception, e:
        return jsonify(status='ERROR', message=str(e))

if __name__ == "__main__":
    app.run(
            host="127.0.0.1",
            debug=True,
            port=5500
            )
