class Api::V1::TweetsController < ApplicationController
  before_filter :find_tweet, only: [:show, :update, :destroy]

  def index
    tweets = Tweet.all

    render json: tweets
  end

  def show
    render json: @tweet
  end

  def create
    tweet = Tweet.create(tweet_params)

    if tweet.valid?
      render json: tweet
    else
      render json: tweet.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @tweet.destroy

    render nothing: true, status: :ok
  end

  def update
    @tweet.update(tweet_params)

    if @tweet.valid?
      render json: @tweet, status: :ok
    else
      render json: @tweet.errors, status: :unprocessable_entity
    end
  end

  private
  def tweet_params
    params.require(:tweet).permit(:name, :description)
  end

  def find_tweet
    @tweet = Tweet.find(params[:id])
  end
end
