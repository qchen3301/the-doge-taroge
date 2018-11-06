ActiveRecord::Schema.define(version: 2018_11_05_212709) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cards", force: :cascade do |t|
    t.bigint "spread_id"
    t.string "card_name"
    t.string "arcana"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["spread_id"], name: "index_cards_on_spread_id"
  end

  create_table "spreads", force: :cascade do |t|
    t.string "date"
    t.string "notes"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_spreads_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "cards", "spreads"
  add_foreign_key "spreads", "users"
end
