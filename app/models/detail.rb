class Detail < ApplicationRecord
  belongs_to :user

  validates_presence_of :mobile_no, :total_experience, :address

  has_one_attached :resume
  has_one_attached :recomendation_letter
  has_one_attached :passport_front
  has_one_attached :passport_back
end
