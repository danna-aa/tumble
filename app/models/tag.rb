# == Schema Information
#
# Table name: tags
#
#  id         :bigint           not null, primary key
#  post_id    :integer          not null
#  tag_body   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tag < ApplicationRecord
    validates :post_id, :tag_body, presence: true

    belongs_to :post
    
end
