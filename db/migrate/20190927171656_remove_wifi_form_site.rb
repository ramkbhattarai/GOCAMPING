class RemoveWifiFormSite < ActiveRecord::Migration[5.2]
  def change

    remove_column :sites, :wifi, :boolean
  end
end
