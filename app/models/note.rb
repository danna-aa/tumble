# == Schema Information
#
# Table name: notes
#
#  id         :bigint           not null, primary key
#  post_type  :string
#  body       :string
#  post_id    :integer
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Note < ApplicationRecord
    validates :user_id, :post_id, :post_type, :body, presence: true

    belongs_to :user
    belongs_to :post

end

