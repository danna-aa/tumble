json.extract! post, :id, :user_id, :username, :title, :body, :source, :link, :image_url, :video_url, :html, :root_post_id, :parent_post_id, :post_type, :private, :created_at, :updated_at

# json.contents do
#   json.array! post.contents do |content|
#     json.url url_for(content)
#   end
# end

# json.likers do
#   json.array! post.likers.collect{ |liker| liker.id }
# end
