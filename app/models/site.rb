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
#  check_in    :string           not null
#  check_out   :string           not null
#  guest_id    :integer          not null
#  campfire    :boolean          not null
#  wifi        :boolean          not null
#  toilet      :boolean          not null
#  shower_room :boolean          not null
#  guest_num   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Site < ApplicationRecord
    validates :title, :body, :host_id, :cost, :lat, :log, :check_in, :check_out, :guest_id, :campfire, :wifi, :toilet, :shower_room, :guest_num, presence: true
    
end
