json.extract! user, :id, :username, :email, :title, :description, :private

# json.favorite_benches user.favorite_benches.pluck(:id)

# json.posts do
#   json.array! user.posts.collect{ |post| post }
# end

json.avatar url_for(user.avatar)




