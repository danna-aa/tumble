class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.integer :user_id, null: false
      t.string :username, null: false
      t.string :title
      t.text :body
      t.string :source
      t.string :source_alias
      t.string :link
      t.string :link_alias
      t.string :image_url
      t.string :video_url
      t.text :html
      t.integer :root_post_id
      t.integer :parent_post_id
      t.string :post_type, null: false, :default => 'text'
      t.boolean :private, null: false, :default => false
      t.timestamps
    end
    add_index :posts, :user_id
    add_index :posts, :username
    add_index :posts, :title
    add_index :posts, :body
    add_index :posts, :source
    add_index :posts, :source_alias
    add_index :posts, :link
    add_index :posts, :link_alias
    add_index :posts, :image_url
    add_index :posts, :video_url
    add_index :posts, :html
    add_index :posts, :root_post_id
    add_index :posts, :parent_post_id
    add_index :posts, :post_type
    add_index :posts, :private
  end
end
