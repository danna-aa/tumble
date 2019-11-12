# == Schema Information
#
# Table name: posts
#
#  id             :bigint           not null, primary key
#  title          :string
#  body           :text
#  source         :string
#  url            :string
#  user_id        :integer          not null
#  html           :text
#  root_post_id   :integer
#  parent_post_id :integer
#  post_type      :string           default("text"), not null
#  private        :boolean          default(FALSE), not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
