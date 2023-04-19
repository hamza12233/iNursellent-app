class Experience < ApplicationRecord
  belongs_to :user
  belongs_to :expertise
  belongs_to :health_institute

  validates_presence_of :to, :from, :points
end
