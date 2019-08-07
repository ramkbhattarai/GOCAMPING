class Api::BookingsController < ApplicationController
    def index
      if current_user
        @bookings = current_user.bookings
        render "api/bookings/index"
      else
        render json: ["Please login"], status: 401
      end
    end
  
    def show
      @booking = Booking.find(params[:id])
      if @booking
        render :show
      else
        render json: ["Booking not found."], status: 401
      end
    end
  
    def create
      @booking = Booking.new(booking_params)
      if @booking.save
        render "api/bookings/show"
      else
        render json: @booking.errors.full_messages, status: 401
      end
    end
  
    def destroy
      @booking = Booking.find(params[:id])
      @booking.destroy
      render :show
    end

    private
    def booking_params
        params.require(:booking).permit(:site_id, :guest_id, :guest_num, :check_in, :check_out)
    end
    
end
