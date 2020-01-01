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
    @like.post_id = params[:id]
    
    
  end

  def destroy
    @like = current_user.likes.find(params[:id])
    if @like
      @like.destroy
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end
end
