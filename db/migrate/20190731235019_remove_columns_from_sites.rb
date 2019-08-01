class RemoveColumnsFromSites < ActiveRecord::Migration[5.2]
  def change
    remove_column :sites, :check_in, :string
    remove_column :sites, :check_out, :string
    add_column :sites, :review_id, :integer
    add_column :sites, :booking_id, :integer
  end
end
