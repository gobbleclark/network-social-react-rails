class AddLikedFriendsToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :liked_friends, :text
  end
end
