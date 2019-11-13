class Api::PostsController < ApplicationController
    before_action :require_login

    def index
        @posts = current_user.dashboard
        @all_posts = Post.all
    end

    def show
        @post = Post.find_by(id: params[:id])
        if @post.private == true && current_user.id != @post.user_id
            render json: ['This post is private'], status: 400
        end
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
            :link,
            :image_url,
            :video_url,
            :html,
            :root_post_id,
            :parent_post_id,
            :post_type,
            :private,
            :created_at,
            :updated_at
        )
    end

end
