class User < ApplicationRecord
    has_many :spreads, dependent: :destroy
end
