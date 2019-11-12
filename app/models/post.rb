# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  title      :string
#  body       :text
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord
    validates :user_id, presence: true
    # validates :private, inclusion: { in: [ true, false ] }

    belongs_to :user

    # implement later for reblogs 
    # belongs_to :root_post,
    #     foreign_key: :root_post_id,
    #     class_name: :Post

    # belongs_to :parent_post,
    #     foreign_key: :parent_post_id,
    #     class_name: :Post

    # has_many :child_posts,
    #     foreign_key: :root_post_id,
    #     class_name: :Post
    
    # has_one :direct_child_post,
    #     foreign_key: :parent_post_id,
    #     class_name: :Post

    has_many :likes, 
        inverse_of: :post, 
        dependent: :destroy, 
        foreign_key: :post_id

    has_many :likers,
        through: :likes,
        source: :user

    has_many :notes
    has_many :tags

end
