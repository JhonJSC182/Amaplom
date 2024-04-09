class AddAttrsToUsers < ActiveRecord::Migration[7.1]
  def change
    change_column :users, :name, :string
    #Ex:- :null => false
    #Ex:- change_column("admin_users", "email", :string, :limit =>25)
  end
end
