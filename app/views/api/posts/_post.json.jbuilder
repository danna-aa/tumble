json.extract! post, :id, :user_id, :username, :title, :body, :source, :source_alias, :link, :link_alias, :image_url, :video_url, :html, :root_post_id, :parent_post_id, :post_type, :private, :created_at, :updated_at

if post.photos.attached?
    photosHash = {}
    post.photos.each_with_index do |photo, i|
        photosHash["#{post.id}_#{i}"] = url_for(photo)
    end
    json.photoUrls photosHash
end

if post.video.attached?
    json.videoUrl url_for(post.video)
end

if post.audio.attached?
    json.audioUrl url_for(post.audio)
end

json.avatar url_for(post.user.avatar)

# json.set! :likes do
#     json.array! post.likes
# end

# json.likes post.likes, :id, :user_id, :post_id, :created_at, :updated_at
json.likes Hash.new
json.likes do
    post.likes.each do |like|
        json.set! like.user_id do
            json.partial! 'like', like: like
        end
    end
end

json.comments Hash.new
json.comments do
    post.comments.each do |comment|
        json.set! comment.user_id do
            json.partial! 'comment', comment: comment
        end
    end
end

# json.contents do
#   json.array! post.contents do |content|
#     json.url url_for(content)
#   end
# end

