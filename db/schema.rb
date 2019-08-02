# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_08_02_091428) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.integer "site_id", null: false
    t.integer "guest_id", null: false
    t.integer "guest_num", null: false
    t.string "check_in", null: false
    t.string "check_out", null: false
    t.string "status", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["check_in"], name: "index_bookings_on_check_in"
    t.index ["check_out"], name: "index_bookings_on_check_out"
    t.index ["guest_id"], name: "index_bookings_on_guest_id"
    t.index ["site_id"], name: "index_bookings_on_site_id"
  end

  create_table "photos", force: :cascade do |t|
    t.string "url", null: false
    t.integer "site_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["site_id"], name: "index_photos_on_site_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.text "body", null: false
    t.integer "author_id", null: false
    t.integer "site_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_reviews_on_author_id"
    t.index ["site_id"], name: "index_reviews_on_site_id"
  end

  create_table "sites", force: :cascade do |t|
    t.string "title", null: false
    t.text "body", null: false
    t.integer "host_id", null: false
    t.integer "cost", null: false
    t.float "lat", null: false
    t.float "log", null: false
    t.boolean "campfire", null: false
    t.boolean "wifi", null: false
    t.boolean "toilet", null: false
    t.boolean "shower_room", null: false
    t.integer "guest_num", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "spots"
    t.boolean "tent"
    t.boolean "parking"
    t.boolean "biking"
    t.boolean "pet_allow"
    t.boolean "hiking"
    t.boolean "wildlife"
    t.boolean "rafting"
    t.index ["host_id"], name: "index_sites_on_host_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "fname", null: false
    t.string "lname", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.integer "zip_code", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
