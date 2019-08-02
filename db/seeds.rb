# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Site.delete_all

    u0 = User.create!(email: 'yasu@gmail.com',
            fname: 'yasodha',
            lname: 'bhattarai',
            password: 'password',
            zip_code: 1234
    )

user1 = User.create!(
    password: '123456',
    fname: 'ram',
    lname: 'bhattarai',
    zip_code: 11363,
    email: 'ram@ram.com'
)

user2 = User.create!(
    password: '123456',
    fname: 'Buba',
    lname: 'Aama',
    zip_code: 11363,
    email: 'aama@buba.com'
)

user3 = User.create!(
    password: '123456',
    fname: 'radheswori',
    lname: 'shrestha',
    zip_code: 11363,
    email: 'radhe@radhe.com'
)

user4 = User.create!(
    password: '123456',
    fname: 'Basudev',
    lname: 'bhattarai',
    zip_code: 07101,
    email: 'basu@basu.com'
)


site1 = Site.create!(
    "host_id": user1.id,
    "title": "Mountain calling",
    "body": "mountains are calling you. They want you to be there.",
    "cost": 100,
    "pet_allow": true,
    "guest_num": 4,
    "lat": 40.73061,
    "log": -73.935242,
    "campfire": true,
    "tent": false,
    "spots": 1,
    "parking": false,
    "toilet": false,
    "shower_room": false,
    "hiking": true,
    "biking": true,
    "wildlife": true,
    "rafting": true,
    "wifi": true
)
site2 = Site.create!(
    "host_id": user1.id,
    "title": "Mountain calling",
    "body": "mountains are calling you. They want you to be there.",
    "cost": 100,
    "pet_allow": true,
    "guest_num": 4,
    "lat": 40.73061,
    "log": -73.935242,
    "campfire": true,
    "tent": false,
    "spots": 1,
    "parking": false,
    "toilet": false,
    "shower_room": false,
    "hiking": true,
    "biking": true,
    "wildlife": true,
    "rafting": true,
    "wifi": true
)
site3 = Site.create!(
    "host_id": user1.id,
    "title": "Mountain calling",
    "body": "mountains are calling you. They want you to be there.",
    "cost": 100,
    "pet_allow": true,
    "guest_num": 4,
    "lat": 40.73061,
    "log": -73.935242,
    "campfire": true,
    "tent": false,
    "spots": 1,
    "parking": false,
    "toilet": false,
    "shower_room": false,
    "hiking": true,
    "biking": true,
    "wildlife": true,
    "rafting": true,
    "wifi": true
)
site4 = Site.create!(
    "host_id": user1.id,
    "title": "Mountain calling",
    "body": "mountains are calling you. They want you to be there.",
    "cost": 100,
    "pet_allow": true,
    "guest_num": 4,
    "lat": 40.73061,
    "log": -73.935242,
    "campfire": true,
    "tent": false,
    "spots": 1,
    "parking": false,
    "toilet": false,
    "shower_room": false,
    "hiking": true,
    "biking": true,
    "wildlife": true,
    "rafting": true,
    "wifi": true
),

site5 = Site.create!(
    "host_id": user1.id,
    "title": "Mountain calling",
    "body": "mountains are calling you. They want you to be there.",
    "cost": 100,
    "pet_allow": true,
    "guest_num": 4,
    "lat": 40.73061,
    "log": -73.935242,
    "campfire": true,
    "tent": false,
    "spots": 1,
    "parking": false,
    "toilet": false,
    "shower_room": false,
    "hiking": true,
    "biking": true,
    "wildlife": true,
    "rafting": true,
    "wifi": true
)
site6 = Site.create!(
    "host_id": user1.id,
    "title": "Mountain calling",
    "body": "mountains are calling you. They want you to be there.",
    "cost": 100,
    "pet_allow": true,
    "guest_num": 4,
    "lat": 40.73061,
    "log": -73.935242,
    "campfire": true,
    "tent": false,
    "spots": 1,
    "parking": false,
    "toilet": false,
    "shower_room": false,
    "hiking": true,
    "biking": true,
    "wildlife": true,
    "rafting": true,
    "wifi": true
)
site7 = Site.create!(
    "host_id": user1.id,
    "title": "Mountain calling",
    "body": "mountains are calling you. They want you to be there.",
    "cost": 100,
    "pet_allow": true,
    "guest_num": 4,
    "lat": 40.73061,
    "log": -73.935242,
    "campfire": true,
    "tent": false,
    "spots": 1,
    "parking": false,
    "toilet": false,
    "shower_room": false,
    "hiking": true,
    "biking": true,
    "wildlife": true,
    "rafting": true,
    "wifi": true
)
site8 = Site.create!(
    "host_id": user1.id,
    "title": "Mountain calling",
    "body": "mountains are calling you. They want you to be there.",
    "cost": 100,
    "pet_allow": true,
    "guest_num": 4,
    "lat": 40.73061,
    "log": -73.935242,
    "campfire": true,
    "tent": false,
    "spots": 1,
    "parking": false,
    "toilet": false,
    "shower_room": false,
    "hiking": true,
    "biking": true,
    "wildlife": true,
    "rafting": true,
    "wifi": true
)
site9 = Site.create!(
    "host_id": user1.id,
    "title": "Mountain calling",
    "body": "mountains are calling you. They want you to be there.",
    "cost": 100,
    "pet_allow": true,
    "guest_num": 4,
    "lat": 40.73061,
    "log": -73.935242,
    "campfire": true,
    "tent": false,
    "spots": 1,
    "parking": false,
    "toilet": false,
    "shower_room": false,
    "hiking": true,
    "biking": true,
    "wildlife": true,
    "rafting": true,
    "wifi": true
)


