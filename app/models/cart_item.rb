class CartItem < ApplicationRecord
    validates :quantity, :user, :product, presence: true

    belongs_to :user
    belongs_to :product
end
