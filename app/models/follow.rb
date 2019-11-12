# == Schema Information
#
# Table name: follows
#
#  id          :bigint           not null, primary key
#  follower_id :integer
#  creator_id  :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Follow < ApplicationRecord
    validates :creator_id, uniqueness: { scope: :follower_id }

    belongs_to :follower,
        foreign_key: :follower_id,
        class_name: :User

    belongs_to :followed_user,
        foreign_key: :creator_id,
        class_name: :User

    has_many :followed_posts, 
        through: :followed_user,
        source: :posts

end
