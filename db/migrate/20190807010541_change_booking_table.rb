class ChangeBookingTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :bookings, :check_in, :string
    remove_column :bookings, :check_out, :string
    remove_column :bookings, :status, :string
    add_column :bookings, :check_in, :date, null: false
    add_column :bookings, :check_out, :date, null: false

  end
end
