class CreateTags < ActiveRecord::Migration[5.2]
  def change
    create_table :tags do |t|
      t.integer :post_id, null: false
      t.string :tag_body, null: false

      t.timestamps
    end
    add_index :tags, :post_id
    add_index :tags, :tag_body
  end
end
