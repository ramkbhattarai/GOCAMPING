class Api::SitesController < ApplicationController
    def index 
       
        @sites = Site.all 
        render :index
    end

    def create
        @site = Site.new(site_params)
        if @site.save 
            render :show
        else
            render json: @site.errors.full_messages, status: 401
        end
    end

    def show
        @site = Site.find(params[:id])
        render :show 
    end

    def site_params
        params.require(:site).permit(:title, :body, :host_id, :cost, :lat, :log, :guest_id, :campfire, :wifi, :toilet, :shower_room, :guest_num, :review_id, :booking_id)
    end
end
