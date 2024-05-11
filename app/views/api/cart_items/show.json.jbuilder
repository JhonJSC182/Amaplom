json.cart_items do     
    @cart_items.each do |cart_item|
        json.set! cart_item.id do
            json.extract! cart_item, 
            :id, :quantity, :user_id, :product_id
            product = Product.find_by(id: cart_item.product_id)
            json.product_name product.name
            json.product_price product.price
            # json.product_photo product.photo
            # if product.photo.attached?
            #     json.photoUrl url_for(product.photo)
            # end
        end
    end
end

# json.products do
#     @products.each do |product| 
#         json.set! product.id do
#             json.extract! product,
#             :id, :name, :price, :description 
#             if product.photo.attached?
#                 json.photoUrl url_for(product.photo)
#             end
#         end
#     end
# end