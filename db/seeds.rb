# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
User.destroy_all
Site.delete_all
# Photo.destroy_all

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
    "title": "Camp near by mountains",
    "body": "mountains are calling you. They want you to be there.",
    "cost": 100,
    "pet_allow": true,
    "guest_num": 4,
    "lat": 27.987172,
    "log": 86.923945,
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
    # "wifi": true,
     "image_url": "https://www.holidify.com/images/cmsuploads/compressed/camping-1835352_1920_20180627142357.jpg"
)
site2 = Site.create!(
    "host_id": user2.id,
    "title": "Oh thy! Majestic Mountains",
    "body": "mountains are calling you. They want you to be there.",
    "cost": 100,
    "pet_allow": true,
    "guest_num": 4,
    "lat": 28.530659,
    "log": 83.878058,
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
    # "wifi": true,
    "image_url": "https://www.gokyotreksnepal.com/wp-content/uploads/2018/09/nepal-camping-trekking.jpg"
)
site3 = Site.create!(
    "host_id": user3.id,
    "title": "Snow capped Mountain camping",
    "body": "mountains are calling you. They want you to be there.",
    "cost": 100,
    "pet_allow": true,
    "guest_num": 4,
    "lat": 28.667833,
    "log":  84.016581,
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
    # "wifi": true,
    "image_url": "https://www.cityshor.com/uploads/article/12_2014/1417409544_906374_554771084562521_1158281277_o.jpg"
)
site4 = Site.create!(
    "host_id": user4.id,
    "title": "Enveloped within the arms of nature",
    "body": "mountains are calling you. They want you to be there.",
    "cost": 100,
    "pet_allow": true,
    "guest_num": 4,
    "lat": 28.803467,
    "log": 83.865245,
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
    # "wifi": true,
   "image_url": "http://www.adventurepolygon.com/wp-content/uploads/2018/01/Camping-Near-Rara-Lake-Nepal-Tourist-Places-in-Nepal.jpg"
)

site5 = Site.create!(
    "host_id": user1.id,
    "title": "Mountain calling",
    "body": "mountains are calling you. They want you to be there.",
    "cost": 100,
    "pet_allow": true,
    "guest_num": 4,
    "lat": 28.208821,
    "log": 83.943903,
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
    # "wifi": true,
   "image_url": "https://nepalecoadventure.com/wp-content/uploads/2015/05/Rara-Lake-Trekking-V.jpg"
)
site6 = Site.create!(
    "host_id": user2.id,
    "title": "Go back to nature",
    "body": "mountains are calling you. They want you to be there.",
    "cost": 100,
    "pet_allow": true,
    "guest_num": 4,
    "lat": 28.205019,
    "log": 85.411166,
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
    # "wifi": true,
    "image_url": "https://www.adventureinyou.com/wp-content/uploads/2014/01/nepal-dolpo-trek-960x640.jpg"
)
site7 = Site.create!(
    "host_id": user3.id,
    "title": "Open hills",
    "body": "mountains are calling you. They want you to be there.",
    "cost": 100,
    "pet_allow": true,
    "guest_num": 4,
    "lat": 27.535205,
    "log": 84.408269,
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
    # "wifi": true,
    "image_url": "http://ayangrinpoche.org/wp-content/uploads/2016/02/Temple-12_10-from-Yogi-Lama-Satcr.jpg"
)
site8 = Site.create!(
    "host_id": user4.id,
    "title": "Mountains in Sight",
    "body": "mountains are calling you. They want you to be there.",
    "cost": 100,
    "pet_allow": true,
    "guest_num": 4,
    "lat": 29.516188,
    "log": 82.079876,
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
    # "wifi": true,
    "image_url": "https://newsin.asia/wp-content/uploads/2016/07/Nepal_View.jpg"
)
site9 = Site.create!(
    "host_id": user1.id,
    "title": "Refreshing filed in the lap of mountains",
    "body": "mountains are calling you. They want you to be there.",
    "cost": 100,
    "pet_allow": true,
    "guest_num": 4,
    "lat": 29.323441,
    "log": 82.875784,
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
    # "wifi": true,
    "image_url": "https://img.jakpost.net/c/2018/08/23/2018_08_23_52263_1535018091._large.jpg"
)

file = open('https://s3.amazonaws.com/gocamping-seeds/site11photo.jpg')
site1.photos.attach(io: file, filename: "site11photo.jpg")

file = open('https://s3.amazonaws.com/gocamping-seeds/site12photo.jpeg')
site1.photos.attach(io: file, filename: "site12photo.jpeg")

file = open('https://s3.amazonaws.com/gocamping-seeds/site13photo.jpg')
site1.photos.attach(io: file, filename: "site13photo.jpg")

file = open('https://s3.amazonaws.com/gocamping-seeds/site14photo.jpeg')
site1.photos.attach(io: file, filename: "site14photo.jpeg")

file = open('https://s3.amazonaws.com/gocamping-seeds/site21photo.jpg')
site2.photos.attach(io: file, filename: "site21photo.jpg")

file = open('https://s3.amazonaws.com/gocamping-seeds/site22photo.jpg')
site2.photos.attach(io: file, filename: "site22photo.jpg")

file = open('https://s3.amazonaws.com/gocamping-seeds/site23photo.jpg')
site2.photos.attach(io: file, filename: "site23photo.jpg")

file = open('https://s3.amazonaws.com/gocamping-seeds/site24photo.jpg')
site2.photos.attach(io: file, filename: "site24photo.jpg")

file = open('https://s3.amazonaws.com/gocamping-seeds/site31photo.jpg')
site3.photos.attach(io: file, filename: "site31photo.jpg")

file = open('https://s3.amazonaws.com/gocamping-seeds/site32photo.png')
site3.photos.attach(io: file, filename: "site32photo.png")

file = open('https://s3.amazonaws.com/gocamping-seeds/site33photo.jpg')
site3.photos.attach(io: file, filename: "site33photo.jpg")

file = open('https://s3.amazonaws.com/gocamping-seeds/site34photo.jpg')
site3.photos.attach(io: file, filename: "site34photo.jpg")

file = open('https://s3.amazonaws.com/gocamping-seeds/site41photo.jpg')
site4.photos.attach(io: file, filename: "site41photo.jpg")

file = open('https://s3.amazonaws.com/gocamping-seeds/site42photo.jpg')
site4.photos.attach(io: file, filename: "site42photo.jpg")

file = open('https://s3.amazonaws.com/gocamping-seeds/site43photo.jpeg')
site4.photos.attach(io: file, filename: "site43photo.jpeg")

file = open('https://s3.amazonaws.com/gocamping-seeds/site44photo.jpg')
site4.photos.attach(io: file, filename: "site44photo.jpg")

file = open('https://s3.amazonaws.com/gocamping-seeds/site51photo.jpg')
site5.photos.attach(io: file, filename: "site51photo.jpg")

file = open('https://s3.amazonaws.com/gocamping-seeds/site52photo.jpg')
site5.photos.attach(io: file, filename: "site52photo.jpg")

file = open('https://s3.amazonaws.com/gocamping-seeds/site53photo.jpg')
site5.photos.attach(io: file, filename: "site53photo.jpg")

file = open('https://s3.amazonaws.com/gocamping-seeds/site54photo.jpeg')
site5.photos.attach(io: file, filename: "site54photo.jpeg")

file = open('https://s3.amazonaws.com/gocamping-seeds/site61photo.jpg')
site6.photos.attach(io: file, filename: "site61photo.jpg")

file = open('https://s3.amazonaws.com/gocamping-seeds/site62photo.jpg')
site6.photos.attach(io: file, filename: "site62photo.jpg")

file = open('https://s3.amazonaws.com/gocamping-seeds/site63photo.jpg')
site6.photos.attach(io: file, filename: "site63photo.jpg")

file = open('https://s3.amazonaws.com/gocamping-seeds/site64photo.jpg')
site6.photos.attach(io: file, filename: "site64photo.jpg")

file = open('https://s3.amazonaws.com/gocamping-seeds/site71photo.jpg')
site7.photos.attach(io: file, filename: "site71photo.jpg")

file = open('https://s3.amazonaws.com/gocamping-seeds/site72photo.jpg')
site7.photos.attach(io: file, filename: "site72photo.jpg")

file = open('https://s3.amazonaws.com/gocamping-seeds/site73photo.jpeg')
site7.photos.attach(io: file, filename: "site73photo.jpeg")

file = open('https://s3.amazonaws.com/gocamping-seeds/site74photo.jpg')
site7.photos.attach(io: file, filename: "site74photo.jpg")

file = open('https://s3.amazonaws.com/gocamping-seeds/site81photo.jpg')
site8.photos.attach(io: file, filename: "site81photo.jpg")

file = open('https://s3.amazonaws.com/gocamping-seeds/site82photo.jpg')
site8.photos.attach(io: file, filename: "site82photo.jpg")

file = open('https://s3.amazonaws.com/gocamping-seeds/site83photo.jpg')
site8.photos.attach(io: file, filename: "site83photo.jpg")

file = open('https://s3.amazonaws.com/gocamping-seeds/site84photo.jpg')
site8.photos.attach(io: file, filename: "site84photo.jpg")

file = open('https://s3.amazonaws.com/gocamping-seeds/site91photo.jpg')
site9.photos.attach(io: file, filename: "site91photo.jpg")

file = open('https://s3.amazonaws.com/gocamping-seeds/site92photo.jpg')
site9.photos.attach(io: file, filename: "site92photo.jpg")

file = open('https://s3.amazonaws.com/gocamping-seeds/site93photo.jpg')
site9.photos.attach(io: file, filename: "site93photo.jpg")

file = open('https://s3.amazonaws.com/gocamping-seeds/site94photo.jpeg')
site9.photos.attach(io: file, filename: "site94photo.jpeg")


# photo1 = Photo.create!(
#     site_id: site1.id,
#     url: 'https://vegvoyages.com/wp-content/uploads/2018/10/Nepal-Bhaktapur-copy-e1540967249191.jpg'
# )

# photo2 = Photo.create!(
#     site_id: site1.id,
#     url:'https://media.cntraveler.com/photos/55b8fdfd7772ff921f964fbd/master/w_2048,h_1536,c_limit/Nepal-Kathmandu-Valley-cr-getty.jpg'
# )

# photo3 = Photo.create!(
#     site_id: site1.id,
#     url:'https://images.theconversation.com/files/80059/original/image-20150501-12614-wyxe7r.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip'
# )

# photo4 = Photo.create!(
#     site_id: site1.id,
#     url:'https://www.welcomenepal.com/uploads/slider/everest-tkelly.jpeg'
# )

# photo5 = Photo.create!(
#     site_id: site2.id,
#     url:'https://cdn.kimkim.com/files/a/content_articles/featured_photos/050a89ea730f913b48cf7dea23719688bc3652fe/big-891ee83ca306656a3c388f949db9e72d.jpg'
# )

# photo6 = Photo.create!(
#     site_id: site2.id,
#     url:'https://www.adventurewomen.com/wp-content/uploads/2018/01/Mountains-hero.jpg'
# )

# photo7 = Photo.create!(
#     site_id: site2.id,
#     url:'https://nepalindiadotblog.files.wordpress.com/2017/11/himalayas_banner.jpg'
# )

# photo8 = Photo.create!(
#     site_id: site2.id,
#     url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc_WDS6zSrNPIBRm63LR2OGpBNwfb-8_vYkELOpNyZkpaVtIXFOA'
# )

# photo9 = Photo.create!(
#     site_id: site3.id,
#     url:'http://namasteroving.com/wp-content/uploads/2018/04/4740346_orig.jpg'
# )

# photo10 = Photo.create!(
#     site_id: site3.id,
#     url:'https://www.gokyotreksnepal.com/wp-content/uploads/2018/09/nepal-camping-trekking.jpg'
# )

# photo11 = Photo.create!(
#     site_id: site3.id,
#     url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXb2QMqkWZtAiDvF5SCWJc44VqgQOGMnpIuatMmWY0UunPNv5l'
# )

# photo12 = Photo.create!(
#     site_id: site3.id,
#     url:'http://www.adventurepolygon.com/wp-content/uploads/2018/01/Camping-Near-Rara-Lake-Nepal-Tourist-Places-in-Nepal.jpg'
# )

# photo13 = Photo.create!(
#     site_id: site4.id,
#     url:'https://oshovisiontreks.com/wp-content/uploads/2019/03/7-Easy-Treks-in-Nepal-1024x540.jpg'
# )

# photo14 = Photo.create!(
#     site_id: site4.id,
#     url:'http://www.magichimalayatreks.com/wp-content/themes/magichimalayan/lib/timthumb.php?src=http://www.magichimalayatreks.com/wp-content/uploads/2019/06/Upper-dolpa-trekking.jpg&w=800&h=350'
# )

# photo15 = Photo.create!(
#     site_id: site4.id,
#     url:'https://s25910.pcdn.co/wp-content/uploads/2018/07/yak-kharka.jpg'
# )

# photo16 = Photo.create!(
#     site_id: site4.id,
#     url:'https://d3hne3c382ip58.cloudfront.net/resized/750x420/mardi-himal-trekking-tour-2-23937_1535097755.JPG'
# )

# photo17 = Photo.create!(
#     site_id: site5.id,
#     url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjydl5wDANdayIydg8gG1tFzaQQi9WKt2RjCvEd0_fahv0oBv0'
# )

# photo18 = Photo.create!(
#     site_id: site5.id,
#     url:'https://cdn.kimkim.com/files/a/content_articles/featured_photos/d33d66d26320d34f53e66610d9fd0758ce84f190/big-642d89223ffdd8ea2d2148e478d69a70.jpg'
# )

# photo19 = Photo.create!(
#     site_id: site5.id,
#     url:'https://nepaltrekkingroutes.com/uploads/trip/2018/08/13/makalu-base-camp-trekking.jpg'
# )

# photo20 = Photo.create!(
#     site_id: site5.id,
#     url:'https://www.aito.com/images/holidays/306044/makalu-to-everest-ght-in-nepal-s1.jpg'
# )

# photo21 = Photo.create!(
#     site_id: site6.id,
#     url:'https://www.adventureinyou.com/wp-content/uploads/2015/04/nepal-poonhill.jpg'
# )

# photo22 = Photo.create!(
#     site_id: site6.id,
#     url:'https://english.aarthiknews.com/wp-content/uploads/2018/07/Gandaki-Provinence.jpg'
# )

# photo23 = Photo.create!(
#     site_id: site6.id,
#     url:'https://www.law.virginia.edu/sites/default/files/styles/news_detail_image_830x476/public/news/nepal-830.jpg?itok=dRtQfcY3'
# )

# photo24 = Photo.create!(
#     site_id: site6.id,
#     url:'http://www.springrainadventure.com/assets/Template/images/packages/trekking-in-nepal/Annapurna-Region-Trekking/Annapurna-Base-Camp-Trek/Annapurna-Base-Camp-Trek.jpg'
# )

# photo25 = Photo.create!(
#     site_id: site7.id,
#     url:'https://www.greathimalaya.com/img/annaadv3.jpg'
# )

# photo26 = Photo.create!(
#     site_id: site7.id,
#     url:'http://himalayasfacts.com/wp-content/uploads/2015/11/australian-camp-trek.jpg'
# )

# photo27 = Photo.create!(
#     site_id: site7.id,
#     url:'https://storage.needpix.com/rsynced_images/theravada-buddhism-1823527_1280.jpg'
# )

# photo28 = Photo.create!(
#     site_id: site7.id,
#     url:'https://www.rei.com/adventures/assets/adventures/images/trip/core/asia/ebc_hero'
# )

# photo29 = Photo.create!(
#     site_id: site8.id,
#     url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpaZne9ZlZJ4yrXh7HJNlq-eatSECnUPe766EQAOUO57S4hix1'
# )

# photo30 = Photo.create!(
#     site_id: site8.id,
#     url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGFWcuMh0a3LWul_YwMGCuwJeVKjPGYL5ZeaOHWCpSPOylw83w'
# )

# photo31 = Photo.create!(
#     site_id: site8.id,
#     url:'https://www.friendsadventure.com/images/other-region/jumla-rara-lake-trek.jpg'
# )

# photo32 = Photo.create!(
#     site_id: site8.id,
#     url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh4CSHQzUW0fM9JvZGJPlsDj2fidS_sRUVhERKWb8vr81XKltU9g'
# )

# photo33 = Photo.create!(
#     site_id: site9.id,
#     url:'https://www.adventureinyou.com/wp-content/uploads/2015/04/nepal-manaslu-trek.jpg'
# )

# photo34 = Photo.create!(
#     site_id: site9.id,
#     url:'https://www.adventureconsultants.com/assets/Uploads/Himalaya/Nepal-Himalaya/Luxury-Everest-Base-Camp-Trek/3-10-Lux-Camp-1.JPG'
# )

# photo35 = Photo.create!(
#     site_id: site9.id,
#     url:'http://www.kamzangjourneys.com/wp-content/uploads/2018/12/Tibet-Cycling-Everest-Base-Camp-Dreaming-500x350.jpg'
# )

# photo36 = Photo.create!(
#     site_id: site9.id,
#     url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRCvRlJ7B-wqXovKTqw5aKyuZevAV1FABzyZYkcVzaqDsCooXg'
# )



