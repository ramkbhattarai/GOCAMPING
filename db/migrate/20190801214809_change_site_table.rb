class ChangeSiteTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :sites, :review_id
    remove_column :sites, :booking_id
    remove_column :sites, :guest_id


  end
end
