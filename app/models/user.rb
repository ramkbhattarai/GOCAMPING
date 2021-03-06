# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  fname           :string           not null
#  lname           :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  zip_code        :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    validates :fname, :lname, :email, :password_digest, :session_token, :zip_code, presence: true 
    validates :password, length: {minimum: 6}, allow_nil: true
    validates :session_token, :email, uniqueness: true 

    before_validation :ensure_session_token
    attr_reader :password

   has_many :sites,
   primary_key: :id,
   foreign_key: :guest_id,
   class_name: :Site 

   has_one :site,
    through: :sites,
    source: :host 

  has_many :reviews,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :Review 

  has_many :bookings,
  primary_key: :id,
  foreign_key: :guest_id,
  class_name: :Booking 



    def self.find_by_credentials(email, password)
        @user = User.find_by(email: email)
        return nil if @user == nil
        @user.is_password?(password) ? @user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        generate_session_token
        save!
        self.session_token
    end

  private

  def ensure_session_token
    generate_session_token unless self.session_token
  end

  def generate_session_token
    self.session_token =  SecureRandom.urlsafe_base64
    while User.find_by(session_token: self.session_token)
      self.session_token =  SecureRandom.urlsafe_base64
    end
    self.session_token
  end

end
