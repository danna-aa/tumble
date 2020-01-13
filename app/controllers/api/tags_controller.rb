class Api::TagsController < ApplicationController
  def index
    @tags = Tag.all
  end

  def show
    @tag = Tag.find_by(id: params[:id])
  end

  def create
    @tag = Tag.new(tag_params)
    @tag.post_id = params[:post_id]
    if @tag.save
      render json: @tag
    else
      head :ok
      # render json: "no tags created" #@tag.errors.full_messages, status: 422
      # render json: @tag.errors.full_messages, status: 422
    end
  end

  def destroy
    @tag = Tag.find_by(post_id: params[:post_id])
    if @tag
      @tag.destroy
      render json: @tag
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  private
  def tag_params
      params.require(:tag).permit(:post_id, :tag_body)
  end
end
