# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  author_id  :integer          not null
#  site_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ApplicationRecord
    validates :body, :author_id, :site_id, presence: true
    
end
