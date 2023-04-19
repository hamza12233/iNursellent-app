class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :invitable, :database_authenticatable, :registerable,:invitable,
         :recoverable, :rememberable, :validatable, :timeoutable

  enum role: %w[user client lead]

  has_one :detail
  has_many :experiences

  has_one_attached :profile_pic

end
