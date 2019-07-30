# == Schema Information
#
# Table name: photos
#
#  id         :bigint           not null, primary key
#  url        :string           not null
#  site_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Photo < ApplicationRecord
    validates :url, :site_id, presence: true
end
