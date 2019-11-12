class Api::PostsController < ApplicationController
    before_action :require_login

    def index
        @posts = current_user.dashboard
    end

    def show
        @post = Post.find_by(id: params[:id])
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
        @post = Post.find(params[:id])
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
        @post = Post.find(params[:id])
        if @post
            @post.destroy
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    private
    def post_params
        params.require(:post).permit(:title, :body, :user_id)
    end

end
