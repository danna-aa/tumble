class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :body
      # t.string :source
      # t.string :url
      t.integer :user_id
      # , null: false
      # t.text :html
      # t.integer :root_post_id
      # t.integer :parent_post_id
      # t.string :post_type, null: false, :default => 'text'
      # t.boolean :private, null: false, :default => false

      t.timestamps
    end
    add_index :posts, :title
    add_index :posts, :body
    # add_index :posts, :source
    # add_index :posts, :url
    add_index :posts, :user_id
    # add_index :posts, :root_post_id
    # add_index :posts, :parent_post_id
    # add_index :posts, :post_type
    # add_index :posts, :private
  end
end
