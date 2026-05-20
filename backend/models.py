from flask_sqlalchemy import SQLAlchemy
from datetime import datetime


db = SQLAlchemy()


class Customer(db.Model):
    __tablename__ = 'customers'

    id = db.Column(db.Integer, primary_key=True)
    role = db.Column(db.String(20), nullable=False, default='customer')
    name = db.Column(db.String(140), nullable=False)
    email = db.Column(db.String(180), unique=True, nullable=False)
    password = db.Column(db.String(180), nullable=False)
    location = db.Column(db.String(140), nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            'id': self.id,
            'role': self.role,
            'name': self.name,
            'email': self.email,
            'location': self.location,
            'created_at': self.created_at.isoformat()
        }


class Farmer(db.Model):
    __tablename__ = 'farmers'

    id = db.Column(db.Integer, primary_key=True)
    role = db.Column(db.String(20), nullable=False, default='farmer')
    name = db.Column(db.String(140), nullable=False)
    email = db.Column(db.String(180), unique=True, nullable=True)
    password = db.Column(db.String(180), nullable=False)
    farm_name = db.Column(db.String(180), nullable=True)
    phone = db.Column(db.String(40), nullable=True)
    location = db.Column(db.String(140), nullable=True)
    crops = db.Column(db.String(255), nullable=True)
    farm_size = db.Column(db.String(80), nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    vegetables = db.relationship('Vegetable', back_populates='farmer', lazy=True)

    def to_dict(self):
        return {
            'id': self.id,
            'role': self.role,
            'name': self.name,
            'email': self.email,
            'farm_name': self.farm_name,
            'phone': self.phone,
            'location': self.location,
            'crops': self.crops,
            'farm_size': self.farm_size,
            'created_at': self.created_at.isoformat()
        }


class Vegetable(db.Model):
    __tablename__ = 'vegetables'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(140), nullable=False)
    breed = db.Column(db.String(120), nullable=True)
    description = db.Column(db.Text, nullable=True)
    location = db.Column(db.String(140), nullable=True)
    upload_date = db.Column(db.Date, nullable=False, default=datetime.utcnow)
    price = db.Column(db.Float, nullable=False)
    quantity = db.Column(db.Float, nullable=False)
    farmer_id = db.Column(db.Integer, db.ForeignKey('farmers.id'), nullable=False)

    farmer = db.relationship('Farmer', back_populates='vegetables')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'breed': self.breed,
            'description': self.description,
            'location': self.location,
            'upload_date': self.upload_date.isoformat(),
            'price': self.price,
            'quantity': self.quantity,
            'farmer': self.farmer.name if self.farmer else None,
            'farmer_id': self.farmer_id
        }
