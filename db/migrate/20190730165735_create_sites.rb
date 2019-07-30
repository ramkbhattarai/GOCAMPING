class CreateSites < ActiveRecord::Migration[5.2]
  def change
    create_table :sites do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.integer :host_id, null: false
      t.integer :cost, null: false
      t.float :lat, null: false
      t.float :log, null: false
      t.string :check_in, null: false
      t.string :check_out, null: false
      t.integer :guest_id, null: false
      t.boolean :campfire, null: false
      t.boolean :wifi, null: false
      t.boolean :toilet, null: false
      t.boolean :shower_room, null: false
      t.integer :guest_num, null: false
      t.timestamps
    end
    add_index :sites, :check_in
    add_index :sites, :check_out
    add_index :sites, :host_id
    add_index :sites, :guest_id


  end
end
