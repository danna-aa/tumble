class Api::FollowsController < ApplicationController
  def index
    @follows = current_user.follows
  end

  def show
    @follow = Follow.find_by(id: params[:id])
  end

  def create
    @follow = Follow.new(follower_id: current_user.id, creator_id: params[:creator_id])
    if @follow.save
      render json: @follow
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = current_user.follows.find_by(id: params[:id])
    if @follow
      @follow.destroy
      render json: @follow
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  private
  def follow_params
      params.require(:follow).permit(:follower_id, :creator_id)
  end
end
