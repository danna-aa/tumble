@all_posts.each do |post|
    json.set! post.id do
        json.extract! post, :id, :user_id, :username, :title, :body, :source, :link, :image_url, :video_url, :html, :root_post_id, :parent_post_id, :post_type, :private, :created_at, :updated_at
    end
end