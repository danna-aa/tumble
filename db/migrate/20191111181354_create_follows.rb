class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.integer :follower_id
      t.integer :creator_id

      t.timestamps
    end
    add_index :follows, :follower_id
    add_index :follows, :creator_id
    add_index :follows, [:follower_id, :creator_id], unique: true
  end
end
