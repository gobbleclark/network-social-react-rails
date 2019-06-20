@number = [1, 2, 3, 4, 5]

1.times do
    User.create(
        name: 'John',
        email: 'john@john.com',
        password: 'password',
        password_confirmation: 'password',
        friend_id: 1
    )
end

puts 'seeded'