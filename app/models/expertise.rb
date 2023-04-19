class Expertise < ApplicationRecord
  validates_presence_of :name
  
  has_many :experiences
end
