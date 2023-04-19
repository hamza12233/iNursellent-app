class Education < ApplicationRecord
  belongs_to :user

  #has_many_attached :certificate_images

end
