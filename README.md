# Tumble

## [Live Site](https://tumble.herokuapp.com/)

![splash](https://media.giphy.com/media/WQwksQLUI1GXI1yMOZ/giphy.gif)

## Background and Overview 

Tumble is a social media app project inspired by Tumblr.

## Technology

Tumble is implemented using Ruby on Rails on the backend, PostgreSQL database, and React / Redux on the frontend, to create a seamless single-page app experience. Users can make a variety of different content posts, follow other users, like and comment on posts, search tags, and more. Integrated with Amazon Web Services to store uploaded content.

# Features 

### Create Posts

Create text, photo, video, audio, quote, link, and chat posts with tagging

![post](https://media.giphy.com/media/h6Zz0nqNMXzHUpPvWa/giphy.gif)

### Comments and Likes 
Comment on posts and like your favorite posts

![comment](https://media.giphy.com/media/WOIMIYQgyJ2183TLid/giphy.gif)

### Search Functionality 

Search tags for keywords to locate and discover specific posts faster

![search](https://media.giphy.com/media/LT0EnK4Ox6SVx3Pd7D/giphy.gif)

Search parameters utilize active record queries and are filtered in the backend for optimal performance

```ruby
# posts_controller.rb
def index
    dashboard_posts = current_user.dashboard

    liked_posts = []
    current_user.likes.each do |like|
        liked_posts << Post.find(like.post_id)
    end

    all_posts = Post.all

    case 
        when params[:filter] =='dashboard'
            @posts = dashboard_posts
        when is_string_number?(params[:filter])
            user_id = params[:filter].to_i
            profile_user = User.find(user_id)
            user_posts = profile_user.posts
            @posts = user_posts
        when params[:filter] =='likes'
            @posts = liked_posts
        when params[:filter].present?
            search = params[:filter]
            @posts = Post.joins(:tags).where('tag_body LIKE ?', "%#{search}%")
        else
            @posts = all_posts
    end

end
```
