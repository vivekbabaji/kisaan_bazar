import datetime
from flask import Blueprint, request, jsonify, render_template
from backend.models import db, Customer, Farmer, Vegetable

routes = Blueprint('routes', __name__)


def json_response(success, data=None, error=None, status=200):
    payload = {'success': success}
    if data is not None:
        payload['data'] = data
    if error:
        payload['error'] = error
    return jsonify(payload), status


def seed_dummy_data():
    if Vegetable.query.first():
        return

    farmers_info = [
        {'name': 'Ramesh Singh', 'email': 'ramesh@example.com', 'password': 'password', 'location': 'Meerut, UP'},
        {'name': 'Sita Devi', 'email': 'sita@example.com', 'password': 'password', 'location': 'Mathura, UP'},
        {'name': 'Mahesh Kumar', 'email': 'mahesh@example.com', 'password': 'password', 'location': 'Agra, UP'},
        {'name': 'Anita', 'email': 'anita@example.com', 'password': 'password', 'location': 'Lucknow, UP'},
        {'name': 'Kamla Devi', 'email': 'kamla@example.com', 'password': 'password', 'location': 'Etah, UP'}
    ]

    for farmer_info in farmers_info:
        farmer = Farmer.query.filter_by(email=farmer_info['email']).first()
        if not farmer:
            farmer = Farmer(
                name=farmer_info['name'],
                email=farmer_info['email'],
                password=farmer_info['password'],
                location=farmer_info['location']
            )
            db.session.add(farmer)
    db.session.commit()

    vegetables_info = [
        {
            'name': 'Tomato',
            'breed': 'Roma',
            'description': 'Fresh Roma tomatoes, perfect for curries and salads.',
            'location': 'Meerut, UP',
            'upload_date': '2026-05-19',
            'price': 28,
            'quantity': 100,
            'farmer': 'Ramesh Singh'
        },
        {
            'name': 'Okra',
            'breed': 'Local',
            'description': 'Tender okra picked this morning; ideal for bhindi fry.',
            'location': 'Mathura, UP',
            'upload_date': '2026-05-18',
            'price': 42,
            'quantity': 80,
            'farmer': 'Sita Devi'
        },
        {
            'name': 'Potato',
            'breed': 'Kufri',
            'description': 'Clean, washed potatoes with excellent shelf life.',
            'location': 'Agra, UP',
            'upload_date': '2026-05-17',
            'price': 24,
            'quantity': 250,
            'farmer': 'Mahesh Kumar'
        },
        {
            'name': 'Spinach',
            'breed': 'Palak',
            'description': 'Fresh spinach, harvested hours ago for maximum nutrition.',
            'location': 'Lucknow, UP',
            'upload_date': '2026-05-19',
            'price': 26,
            'quantity': 65,
            'farmer': 'Anita'
        },
        {
            'name': 'Chili',
            'breed': 'Long Green',
            'description': 'Hot and crisp green chilies for your daily cooking.',
            'location': 'Etah, UP',
            'upload_date': '2026-05-20',
            'price': 62,
            'quantity': 30,
            'farmer': 'Kamla Devi'
        }
    ]

    for veg_info in vegetables_info:
        farmer = Farmer.query.filter_by(name=veg_info['farmer']).first()
        if farmer:
            vegetable = Vegetable(
                name=veg_info['name'],
                breed=veg_info['breed'],
                description=veg_info['description'],
                location=veg_info['location'],
                upload_date=datetime.datetime.strptime(veg_info['upload_date'], '%Y-%m-%d').date(),
                price=veg_info['price'],
                quantity=veg_info['quantity'],
                farmer_id=farmer.id
            )
            db.session.add(vegetable)
    db.session.commit()


@routes.route('/')
def home():
    return render_template('index.html')


@routes.route('/api/customers', methods=['GET'])
def list_customers():
    customers = [customer.to_dict() for customer in Customer.query.all()]
    return json_response(True, customers)


@routes.route('/api/farmers', methods=['GET'])
def list_farmers():
    farmers = [farmer.to_dict() for farmer in Farmer.query.all()]
    return json_response(True, farmers)


@routes.route('/api/farmers/<int:farmer_id>', methods=['GET'])
def get_farmer(farmer_id):
    farmer = Farmer.query.get(farmer_id)
    if not farmer:
        return json_response(False, error='Farmer not found', status=404)
    return json_response(True, farmer.to_dict())


@routes.route('/api/farmers/<int:farmer_id>/vegetables', methods=['GET'])
def get_farmer_vegetables(farmer_id):
    farmer = Farmer.query.get(farmer_id)
    if not farmer:
        return json_response(False, error='Farmer not found', status=404)
    vegetables = [vegetable.to_dict() for vegetable in Vegetable.query.filter_by(farmer_id=farmer.id).all()]
    return json_response(True, vegetables)


@routes.route('/api/customers/<int:customer_id>', methods=['GET'])
def get_customer(customer_id):
    customer = Customer.query.get(customer_id)
    if not customer:
        return json_response(False, error='Customer not found', status=404)
    return json_response(True, customer.to_dict())


@routes.route('/api/vegetables', methods=['GET'])
def list_vegetables():
    seed_dummy_data()
    vegetables = [vegetable.to_dict() for vegetable in Vegetable.query.all()]
    return json_response(True, vegetables)


@routes.route('/api/vegetables', methods=['POST'])
def create_vegetable():
    data = request.get_json() or {}
    required = ['name', 'price', 'quantity']
    if not all(data.get(field) for field in required):
        return json_response(False, error='Missing required vegetable fields', status=400)

    farmer = None
    if data.get('farmer_id'):
        farmer = Farmer.query.get(int(data.get('farmer_id')))
    elif data.get('farmer'):
        farmer = Farmer.query.filter_by(name=data.get('farmer')).first()

    if not farmer:
        return json_response(False, error='Farmer not found for upload', status=404)

    vegetable = Vegetable(
        name=data.get('name'),
        breed=data.get('breed'),
        description=data.get('description'),
        location=data.get('location'),
        upload_date=datetime.datetime.fromisoformat(data.get('upload_date')).date() if data.get('upload_date') else datetime.datetime.utcnow().date(),
        price=float(data.get('price')),
        quantity=float(data.get('quantity')),
        farmer_id=farmer.id
    )
    db.session.add(vegetable)
    db.session.commit()

    return json_response(True, vegetable.to_dict(), status=201)


@routes.route('/signup', methods=['POST'])
def signup():
    data = request.get_json() or {}
    role = data.get('role')
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')

    if not name or not email or not password:
        return json_response(False, error='Name, email, and password are required', status=400)

    existing_customer = Customer.query.filter_by(email=email).first()
    existing_farmer = Farmer.query.filter_by(email=email).first()
    if existing_customer or existing_farmer:
        return json_response(False, error='Email is already registered', status=409)

    if role == 'farmer':
        farmer = Farmer(
            name=name,
            email=email,
            password=password,
            farm_name=data.get('farmName'),
            phone=data.get('phone'),
            location=data.get('location'),
            crops=data.get('crops'),
            farm_size=data.get('farmSize')
        )
        db.session.add(farmer)
        db.session.commit()
        return json_response(True, farmer.to_dict(), status=201)

    customer = Customer(
        name=name,
        email=email,
        password=password,
        location=data.get('location')
    )
    db.session.add(customer)
    db.session.commit()
    return json_response(True, customer.to_dict(), status=201)


@routes.route('/api/signup-customer', methods=['POST'])
def signup_customer():
    data = request.get_json() or {}
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')

    if not name or not email or not password:
        return json_response(False, error='Name, email, and password are required', status=400)

    existing_customer = Customer.query.filter_by(email=email).first()
    existing_farmer = Farmer.query.filter_by(email=email).first()
    if existing_customer or existing_farmer:
        return json_response(False, error='Email is already registered', status=409)

    customer = Customer(
        name=name,
        email=email,
        password=password,
        location=data.get('location')
    )
    db.session.add(customer)
    db.session.commit()
    return json_response(True, customer.to_dict(), status=201)


@routes.route('/api/signup-farmer', methods=['POST'])
def signup_farmer():
    data = request.get_json() or {}
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')

    if not name or not email or not password:
        return json_response(False, error='Name, email, and password are required', status=400)

    existing_farmer = Farmer.query.filter_by(email=email).first()
    if existing_farmer:
        return json_response(False, error='Email is already registered for a farmer', status=409)

    farmer = Farmer(
        name=name,
        email=email,
        password=password,
        farm_name=data.get('farmName'),
        phone=data.get('phone'),
        location=data.get('location'),
        crops=data.get('crops'),
        farm_size=data.get('farmSize')
    )
    db.session.add(farmer)
    db.session.commit()
    return json_response(True, farmer.to_dict(), status=201)


@routes.route('/login', methods=['POST'])
def login():
    data = request.get_json() or {}
    email = data.get('email')
    password = data.get('password')
    username = data.get('username')

    if username and password:
        if username == 'admin' and password == '1234':
            return json_response(True, {'role': 'admin', 'name': 'Admin User'})
        farmer = Farmer.query.filter_by(name=username, password=password).first()
        if farmer:
            return json_response(True, {'role': 'farmer', 'id': farmer.id, 'name': farmer.name, 'role': farmer.role})
        customer = Customer.query.filter_by(name=username, password=password).first()
        if customer:
            return json_response(True, {'role': 'customer', 'id': customer.id, 'name': customer.name, 'role': customer.role})
        return json_response(False, error='Invalid username or password', status=401)

    if not email or not password:
        return json_response(False, error='Email and password are required', status=400)

    customer = Customer.query.filter_by(email=email, password=password).first()
    if customer:
        return json_response(True, {'role': 'customer', 'id': customer.id, 'name': customer.name})

    farmer = Farmer.query.filter_by(email=email, password=password).first()
    if farmer:
        return json_response(True, {'role': 'farmer', 'id': farmer.id, 'name': farmer.name})

    return json_response(False, error='Invalid credentials', status=401)
