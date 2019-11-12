json.extract! user, :id, :username

# json.favorite_benches user.favorite_benches.pluck(:id)

json.posts do
  json.array! user.posts.collect{ |post| post }
end




