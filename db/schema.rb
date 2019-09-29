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

ActiveRecord::Schema.define(version: 2019_09_27_171656) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "bookings", force: :cascade do |t|
    t.integer "site_id", null: false
    t.integer "guest_id", null: false
    t.integer "guest_num", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.date "check_in", null: false
    t.date "check_out", null: false
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
    t.string "image_url"
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

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
