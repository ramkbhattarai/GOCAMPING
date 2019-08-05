class Api::SitesController < ApplicationController
   
    def index 
        @sites = bounds ? Site.in_bounds(bounds) : Site.all 
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

    def destroy 
        @site = Site.find(params[:id])
        @site.destroy 
        render :show
    end

    private
    def site_params
        params.require(:site).permit(:title, :body, :host_id, :cost, :lat, :log, :campfire, :wifi, :toilet, :shower_room, :guest_num, :tent, :parking, :biking, :pet_allow, :hiking, :wildlife, :rafting)
    end

    def bounds
        params[:searchParams]
      end
end
