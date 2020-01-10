class Api::CommentsController < ApplicationController
  def index
    @comments = current_user.comments
  end

  def show
    @comment = Comment.find_by(id: params[:id])
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    @comment.post_id = params[:post_id]
    if @comment.save
      render json: @comment
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = current_user.comments.find_by(post_id: params[:post_id], user_id: current_user.id)
    if @comment
      @comment.destroy
      render json: @comment
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  private
  def comment_params
      params.require(:comment).permit(:post_id, :user_id, :body)
  end
end
