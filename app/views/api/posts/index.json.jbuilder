# json.dashboard do
#     @posts.each do |post|
#         json.set! post.id do
#             json.partial! 'post', post: post
#         end
#     end
# end

# json.explore do
#     @all_posts.each do |post|
#         json.set! post.id do
#             json.partial! 'post', post: post
#         end
#     end
# end

@posts.each do |post|
    json.set! post.id do
        json.partial! 'post', post: post
    end
end
