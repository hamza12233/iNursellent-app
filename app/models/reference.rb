class Reference < ApplicationRecord
  belongs_to :user

  enum reference_type: %w[personal professional]
end
