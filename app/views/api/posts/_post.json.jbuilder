json.extract! post, :id, :title, :body, :user_id

# json.contents do
#   json.array! post.contents do |content|
#     json.url url_for(content)
#   end
# end

# json.likers do
#   json.array! post.likers.collect{ |liker| liker.id }
# end
