# == Schema Information
#
# Table name: posts
#
#  id             :bigint           not null, primary key
#  user_id        :integer          not null
#  username       :string           not null
#  title          :string
#  body           :text
#  source         :string
#  source_alias   :string
#  link           :string
#  link_alias     :string
#  image_url      :string
#  video_url      :string
#  html           :text
#  root_post_id   :integer
#  parent_post_id :integer
#  post_type      :string           default("text"), not null
#  private        :boolean          default(FALSE), not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Post < ApplicationRecord
    validates :user_id, presence: true
    validates :private, inclusion: { in: [ true, false ] }

    belongs_to :user

    has_many :likes, 
        inverse_of: :post, 
        dependent: :destroy, 
        foreign_key: :post_id

    has_many :likers,
        through: :likes,
        source: :user

    has_many :comments

    has_many :tags

    # reblogs query
    def reblogs
        if self.root_post_id
            r_id = self.root_post_id
        else
            r_id = self.id
        end
        return Post.where(root_post_id: r_id)
    end

    # notes: comments, likes, reblogs
    def notes
        notes_comments = self.comments
        notes_likes = self.likes
        notes_reblogs = self.reblogs
        notes_comments + notes_likes  + notes_reblogs
    end

    def num_notes
        notes.length
    end

    # aws
    has_many_attached :photos
    has_one_attached :video
    has_one_attached :audio

    def all_users 
        User.all
    end

end
