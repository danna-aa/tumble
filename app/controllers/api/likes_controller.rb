class Api::LikesController < ApplicationController
  # def index
  #   @likes = Like.all
  # end

  # def show
  #   @like = Like.find_by(id: params[:id])
  # end

  def create
    @like = Like.new
    @like.user_id = current_user.id
    @like.post_id = params[:post_id]
    if @like.save
      render json: @like
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = current_user.likes.find_by(post_id: params[:post_id], user_id: current_user.id)
    if @like
      @like.destroy
      render json: @like
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  private
  def like_params
      params.require(:like).permit(:post_id, :user_id)
  end
end
