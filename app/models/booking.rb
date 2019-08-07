# == Schema Information
#
# Table name: bookings
#
#  id         :bigint           not null, primary key
#  site_id    :integer          not null
#  guest_id   :integer          not null
#  guest_num  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  check_in   :date             not null
#  check_out  :date             not null
#

class Booking < ApplicationRecord
    validates :site_id, :guest_id, :guest_num, :check_in, :check_out, presence: true
    

    belongs_to :site,
    primary_key: :id,
    foreign_key: :site_id,
    class_name: :Site 

    belongs_to :guest,
    primary_key: :id,
    foreign_key: :guest_id,
    class_name: :User 
end
