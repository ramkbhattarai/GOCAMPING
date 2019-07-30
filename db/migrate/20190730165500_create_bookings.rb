class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :site_id, null: false
      t.integer :guest_id, null: false
      t.integer :guest_num, null: false
      t.string :check_in, null: false
      t.string :check_out, null: false
      t.string :status, null: false

      t.timestamps
    end
    add_index :bookings, :check_in
    add_index :bookings, :check_out
    add_index :bookings, :site_id 
    add_index :bookings, :guest_id
  end
end
