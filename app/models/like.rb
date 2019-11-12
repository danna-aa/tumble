# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  post_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ApplicationRecord
    validates :user_id, :post_id, presence: true
    validates :user_id, uniqueness: { scope: :post_id }

    belongs_to :user
    belongs_to :post

    def find_like_by_params(user_id, post_id)
        @like = Like.where(["user_id = ? and post_id = ?", user_id, post_id])
        @like ? @like : nil
    end

end