class AddItemsInSites < ActiveRecord::Migration[5.2]
  def change
    add_column :sites, :spots, :integer
    add_column :sites, :tent, :boolean
    add_column :sites, :parking, :boolean
    add_column :sites, :biking, :boolean
    add_column :sites, :pet_allow, :boolean
    add_column :sites, :hiking, :boolean
    add_column :sites, :wildlife, :boolean
    add_column :sites, :rafting, :boolean

  end
end
