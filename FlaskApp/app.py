from flask import Flask, render_template, request, jsonify
from flask.ext.triangle import Triangle
from pymongo import MongoClient

import json

app = Flask(__name__)

client = MongoClient('localhost:27017')
db = client.ContactData

Triangle(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/contacts', methods=['GET'])
def contactDataGet():
    try:
        contactList = [];

        contacts = db.Contacts.find();
        print "OK"
        for contact in contacts:
            print contact
            contactItem = {
                    'firstName': contact['first name'],
                    'lastName': contact['last name'],
                    'email': contact['email'],
                    'phoneNumber': contact['phone number'],
                    'address': contact['address'],
                    'city': contact['city'],
                    'country': contact['country'],
                    'postalCode': contact['postal code']
            }
            contactList.append(contactItem)



    except Exception, e:
        return str(e)
    return json.dumps(contactList)

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

        db.Contacts.insert_one({
            'first name': firstName, 'last name': lastName, 'email': email, 'phone number': phoneNumber, 'address': address, 'city': city, 'country': country, 'postal code': postalCode
        })

        return jsonify(status='OK', message='Done!')

    except Exception, e:
        return jsonify(status='ERROR', message=str(e))

if __name__ == "__main__":
    app.run(
            host="127.0.0.1",
            debug=True,
            port=5500
            )
