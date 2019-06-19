class CreateFriends < ActiveRecord::Migration[5.2]
  def change
    create_table :friends do |t|
      t.string :name
      t.string :c_company
      t.string :c_position
      t.string :f_indoor
      t.string :f_outdoor
      t.string :t_skills
      t.string :avatar

      t.timestamps
    end
  end
end
