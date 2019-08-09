class Api::ReviewsController < ApplicationController
    def index 
        # if params[:site_id]
        # @reviews = Site.find(id: params[:site_id]).reviews
        # render :index
        # end
        @reviews = Review.all 
        render :index
    end

    def create
        @review = Review.new(review_params)
        @review.author_id = current_user.id
        @review.site_id = params[:site_id]
        if @review.save 
            render :show 
        else
           render json: @review.errors.full_messages, status: 401
        end
    end

    def show
        @review = Review.find(params[:id])
        render :show 
    end

    def update 
        @review = Review.find(params[:id])
        if @review.update(review_params)
            render :show 

        else
            render json: @review.errors.full_messages, status: 401 
        end
    end

    def destroy 
        @review = Review.find(params[:id])
        @review.destroy
        render :show
    end

    def review_params
        params.require(:review).permit(:body, :author_id, :site_id)
    end
end
