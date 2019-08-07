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

require 'test_helper'

class BookingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
