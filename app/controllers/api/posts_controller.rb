class Api::PostsController < ApplicationController
    before_action :require_login

    def index
        dashboard_posts = current_user.dashboard
        all_posts = Post.all
        
        def is_string_number?(string)
            true if Float(string) rescue false
        end

        # filter_string = params[:filter]
        # single_post = false
        # if filter_string.start_with?("post")
        #     single_post = true
        #     post_number = filter_string[3..-1]
        # end

        case 
            when params[:filter] =='dashboard'
                @posts = dashboard_posts
            when is_string_number?(params[:filter])
                user_id = params[:filter].to_i
                profile_user = User.find(user_id)
                user_posts = profile_user.posts
                @posts = user_posts
            # when single_post
            #     post_id = post_number.to_i
            #     @posts = Post.find(post_id)
            else
                @posts = all_posts
        end

    end


    def show
        @post = Post.find_by(id: params[:id])
        # if @post.private == true && current_user.id != @post.user_id
        #     render json: ['This post is private'], status: 400
        # end
    end

    def create
        @post = Post.new(post_params)
        if @post.save
            # @post.contents.attach(params[:contents]) if params[:contents]
            render :show
        else
            render json: @post.errors.full_messages, status: 401
        end
    end

    def update
        @post = current_user.posts.find(params[:id])
        if @post && @post.update(post_params)
            # if params[:contents]
            #     new_contents = params[:contents].select { |content| content != "[object Object]" }
            #     @post.contents.attach(new_contents)
            # end
            render :show
        elsif !@post
            render json: ['Could not locate post'], status: 400
        else
            render json: @post.errors.full_messages, status: 401
        end
    end

    def destroy
        @post = current_user.posts.find(params[:id])
        if @post
            @post.destroy
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    private
    def post_params
        params.require(:post).permit(
            :user_id, 
            :username,
            :title, 
            :body, 
            :source,
            :source_alias,
            :link,
            :link_alias,
            :image_url,
            :video_url,
            :html,
            :root_post_id,
            :parent_post_id,
            :post_type,
            :private,
            :created_at,
            :updated_at,
            :attached_photos,
            :photo_file,
            :photo_url
        )
    end

end
