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

json.set! :likes do
    json.array! post.likes
end

# json.likers do
#   json.array! post.likers.collect{ |liker| liker.id }
# end

# json.contents do
#   json.array! post.contents do |content|
#     json.url url_for(content)
#   end
# end

