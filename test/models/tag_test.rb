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

require 'test_helper'

class TagTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
