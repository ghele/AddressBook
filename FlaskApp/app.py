from flask import Flask, render_template
from flask.ext.triangle import Triangle

app = Flask(__name__)
Triangle(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/index', methods=['GET'])
def index1():
    a = "fv"
    return a

if __name__ == "__main__":
    app.run(
            host="127.0.0.1",
            debug=True,
            port=5500
            )
