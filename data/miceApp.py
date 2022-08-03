"""
Supported Micro-Services (CRUD):
    * /: (GET)get all mice from database
    * /mice/<id> (GET): get specific user by given id
    * /mice (POST) + user body: create a new user
    * /mice/<id> (PUT) + user body: modify existing user
    * /mice/<id> (DELETE) : remove a user by given id
"""
from flask import Flask, jsonify, redirect, request, send_file
from flask_cors import CORS
from micedb import *
import uuid
import os 
from flask import send_from_directory     

# configuration
DEBUG = True

# instantiate the app
app = Flask(__name__)
CORS(app)
app.config.from_object(__name__)
db = MiceDB('mice.db')

@app.route('/favicon.ico') 
def favicon(): 
    return send_from_directory(os.path.join(app.root_path, 'static'), 'favicon.ico', mimetype='image/vnd.microsoft.icon')

@app.route('/', methods=['GET'])
def all_mice():
    response_object = {'status': 'success'}
    mice = db.getMice()
    response_object['mice'] = mice
    return jsonify(response_object)

@app.route('/cages', methods=['GET'])
def all_cages():
    response_object = {'status': 'success'}
    cages = db.getCages()
    response_object['cages'] = cages
    return jsonify(response_object)

@app.route('/used', methods=['GET'])
def all_used():
    response_object = {'status': 'success'}
    used = db.getUsedMice()
    response_object['mice'] = used
    return jsonify(response_object)
@app.route('/borns', methods=['GET'])
def all_borns():
    response_object = {'status': 'success'}
    borns = db.getBorns()
    response_object['borns'] = borns
    return jsonify(response_object)

@app.route('/users', methods=['GET'])
def all_users():
    response_object = {'status': 'success'}
    users = db.getUsers()
    response_object['users'] = users
    return jsonify(response_object)

@app.route('/availableCageIds/<count>', methods=['GET'])
def available_cageids(count):
    response_object = {'status': 'success'}
    cages = db.getAvailableCages(count)
    response_object['cages'] = cages
    return jsonify(response_object)

@app.route('/actions', methods=['GET'])
def all_actions():
    response_object = {'status': 'success'}
    actions = db.getActions()
    response_object['actions'] = actions
    return jsonify(response_object)

@app.route('/greeding', methods=['GET'])
def all_greedings():
    response_object = {'status': 'success'}
    cages = db.getGreedings()
    response_object['cages'] = cages
    return jsonify(response_object)

@app.route('/getreport', methods=['GET', 'POST'])
def get_pdf():
    post_data: dict = request.get_json()
    print("miceApp-74:",post_data)
    return send_file('geno.pdf', as_attachment=True)

@app.route('/user', methods=['POST'])
def create_user():
    response_object = {'status': 'success'}
    post_data: dict = request.get_json()
    user = {'id': uuid.uuid4().hex}
    for field in userFields:
        user[field] = post_data.get(field)
    id = db.create_user(user)
    response_object['message'] = 'mouse added!'
    return jsonify(response_object)


@app.route('/mice', methods=['POST'])
def create_mouse():
    response_object = {'status': 'success'}
    post_data: dict = request.get_json()
    mouse = {'id': uuid.uuid4().hex}
    for field in miceFields:
        mouse[field] = post_data.get(field)
    id = db.create(mouse)
    response_object['message'] = 'mouse added!'
    return jsonify(response_object)

@app.route('/wean', methods=['POST'])
def create_wean():
    response_object = {'status': 'success'}
    post_data = request.get_json()
    # print("miceApp-94:", post_data)
    db.create_wean(post_data)
    response_object['message'] = 'mouse added!'
    return jsonify(response_object)


@app.route('/cages', methods=['POST'])
def create_cage():
    response_object = {'status': 'success'}
    post_data: dict = request.get_json()
    cage = {'id': uuid.uuid4().hex, 'cageid':post_data.get('cageid')}
    id = db.create_cage(cage)
    response_object['message'] = 'new cage added!'
    return jsonify(response_object)

@app.route('/users/<id>', methods=['PUT'])
def update_user(id):
    response_object = {'status': 'success'}
    post_data = request.get_json()
    cage = {
        'status':post_data.get('status'),
        'type':post_data.get('type')
    }
    db.update_user(id, cage)
    response_object['message'] = 'user updated!'
    return jsonify(response_object)

@app.route('/cages/<id>', methods=['PUT'])
def update_cage(id):
    response_object = {'status': 'success'}
    post_data = request.get_json()
    cage = {
        'movein1':post_data.get('movein1'),
        'movein2':post_data.get('movein2'),
        'movein3':post_data.get('movein3'),
        'movein4':post_data.get('movein4'),
        'movein5':post_data.get('movein5'),
        'birthdate':post_data.get('birthdate'),
        'notes':post_data.get('notes'),
    }
    db.update_cages(id, cage)
    response_object['message'] = 'new cage added!'
    return jsonify(response_object)
@app.route('/borns/<id>', methods=['PUT'])
def update_born(id):
    response_object = {'status': 'success'}
    post_data = request.get_json()
    born = {
        'birthdate':post_data.get('birthdate'),
        'males':post_data.get('males'),
        'females':post_data.get('females'),
        'notes':post_data.get('notes'),
        'plusplus':post_data.get('plusplus'),
        'plusminus':post_data.get('plusminus'),
        'minusminus':post_data.get('minusminus'),
        'born':post_data.get('born'),
        'deaths':post_data.get('deaths'),
        'type':post_data.get('type'),
    }
    db.update_born(id, born)
    response_object['message'] = 'new cage added!'
    return jsonify(response_object)

@app.route('/transfer/<id>', methods=['PUT'])
def update_transfer(id):
    response_object = {'status': 'success'}
    post_data = request.get_json()
    db.update_transfer(id, post_data)
    response_object['message'] = 'new transfer is updated!'
    return jsonify(response_object)

@app.route('/group', methods=['PUT'])
def update_groups():
    response_object = {'status': 'success'}
    post_data = request.get_json()
    db.update_groups(post_data)
    response_object['message'] = 'new cage added!'
    return jsonify(response_object)

@app.route('/remove', methods=['POST'])
def remove_mice():
    response_object = {'status': 'success'}
    post_data = request.get_json()
    # db.update_groups(post_data)
    print(post_data)
    data_len = len(post_data)
    if data_len > 0:
        for mouse in post_data:
            db.delete(mouse['id'])
            db.create_used(mouse)
    response_object['message'] = 'new cage added!'
    return jsonify(response_object)

@app.route('/get_user/<email>', methods=['GET'])
def get_user(email):
    response_object = {'status': 'success'}
    mouse = db.getUser(email)
    response_object['mouse'] = mouse
    return jsonify(response_object)

@app.route('/mice/<mouse_id>', methods=['GET'])
def retrieve_mouse(mouse_id):
    response_object = {'status': 'success'}
    mouse = db.getMouse(mouse_id)
    response_object['mouse'] = mouse
    return jsonify(response_object)


@app.route('/mice/<mouse_id>', methods=['DELETE'])
def delete_user(mouse_id):
    response_object = {'status': 'success'}
    id = db.delete(mouse_id)
    response_object['message'] = 'mouse deleted!'
    return jsonify(response_object)


@app.route('/mice/<mouse_id>', methods=['PUT'])
def update_used(mouse_id):
    response_object = {'status': 'success'}
    post_data: dict = request.get_json()
    mouse = {
        'msid': post_data.get('msid'),
        'gender': post_data.get('gender'),
        'geno': post_data.get('geno'),
        'ear': post_data.get('ear'),
        'mom': post_data.get('mom'),
        'dad': post_data.get('dad'),
        'cage': post_data.get('cage'),
        'usage': post_data.get('usage'),
        'date': post_data.get('date'),
        'type': post_data.get('type'),
    }
    db.update(mouse_id, mouse)
    response_object['message'] = 'mouse updated!'
    return jsonify(response_object)

@app.route('/pairs', methods=['POST'])
def create_pairs():
    response_object = {'status': 'success'}
    post_data: dict = request.get_json()
    # action = {
    #     'id':post_data.get('id'),
    #     'msid': post_data.get('msid'),
    #     'from_cage': post_data.get('from_cage'),
    #     'to_cage': post_data.get('to_cage'),
    #     'gender': post_data.get('gender'),
    #     'reason': post_data.get('reason'),
    # }
    # db.create_action(action)
    db.create_pair(post_data)
    response_object['message'] = 'mouse updated!'
    return jsonify(response_object)


if __name__ == '__main__':
    app.run(host="localhost", port=5000)
