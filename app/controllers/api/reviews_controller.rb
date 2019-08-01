class ReviewsController < ApplicationController
    def index 
    
    end

    def create
        @review = Review.new(review_params)
        @review.author = current_user
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

    end

    def review_params
        params.require(:review).permit(:body, :author_id, :site_id)
    end
end
