class CreateNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :notes do |t|
      t.string :post_type
      t.string :body
      t.integer :post_id
      t.integer :user_id

      t.timestamps
    end
    add_index :notes, :post_type
    add_index :notes, :user_id
    add_index :notes, :post_id
  end
end
