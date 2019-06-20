class AddFriendRefToUser < ActiveRecord::Migration[5.2]
  def change
    add_reference :users, :friend, foreign_key: true
  end
end
