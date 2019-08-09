class AddColumnToSites < ActiveRecord::Migration[5.2]
  def change
    add_column :sites, :image_url, :string
    
  end
end
