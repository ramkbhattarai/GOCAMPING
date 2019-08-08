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
    

    belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User 

    belongs_to :site,
    primary_key: :id,
    foreign_key: :site_id,
    class_name: :Site 
end
