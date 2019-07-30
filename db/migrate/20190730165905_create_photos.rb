class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.string :url, null: false
      t.integer :site_id, null: false

      t.timestamps
    end
    add_index :photos, :site_id 
  end
end
