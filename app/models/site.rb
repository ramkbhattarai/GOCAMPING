# == Schema Information
#
# Table name: sites
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  body        :text             not null
#  host_id     :integer          not null
#  cost        :integer          not null
#  lat         :float            not null
#  log         :float            not null
#  campfire    :boolean          not null
#  wifi        :boolean          not null
#  toilet      :boolean          not null
#  shower_room :boolean          not null
#  guest_num   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Site < ApplicationRecord
    validates :title, :body, :host_id, :cost, :lat, :log, :guest_num, presence: true
    validates :campfire, :wifi, :toilet, :shower_room, inclusion: { in: [true, false] }
    
    belongs_to :host,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: :User 


    has_many :reviews,
    primary_key: :id,
    foreign_key: :site_id,
    class_name: :Review

    has_many :photos,
    primary_key: :id,
    foreign_key: :site_id,
    class_name: :Photo  

    has_many :bookings,
    primary_key: :id,
    foreign_key: :site_id,
    class_name: :Booking

    
end
