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

require 'test_helper'

class NoteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
