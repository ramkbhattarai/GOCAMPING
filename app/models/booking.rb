# == Schema Information
#
# Table name: bookings
#
#  id         :bigint           not null, primary key
#  site_id    :integer          not null
#  guest_id   :integer          not null
#  guest_num  :integer          not null
#  check_in   :string           not null
#  check_out  :string           not null
#  status     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Booking < ApplicationRecord
    validates :site_id, :guest_id, :guest_num, :check_in, :check_out, :status, presence: true
    
end
