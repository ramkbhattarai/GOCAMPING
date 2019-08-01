class RemoveColumnsFromSites < ActiveRecord::Migration[5.2]
  def change
    remove_column :sites, :check_in, :string
    remove_column :sites, :check_out, :string
    add_column :sites, :review_id, :integer, null: false
    add_column :sites, :booking_id, :integer, null: false
    add_index :sites, :review_id
    add_index :sites, :booking_id
  end
end
