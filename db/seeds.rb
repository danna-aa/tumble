# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



demo_user = User.create(username: 'Demo', password: 'password', email: 'whatsupeople@gmail.com')

user1 = User.create(username: 'danna', password: 'password', email: 'danna@berkeley.edu')
user2 = User.create(username: 'boba', password: 'password', email: 'boba@aa.io')
user3 = User.create(username: 'mochi', password: 'password', email: 'mochi@aa.io')

post_2_1 = Post.create(title: 'Hello World', body: 'this is the first post', user_id: 1)
post_2_2 = Post.create(title: 'Second Post', body: 'this is the second post', user_id: 1)
post_2_3 = Post.create(title: 'Goodbye', body: 'this is the third post', user_id: 1)

post_3_1 = Post.create(title: '2: Hello World', body: '2: this is the first post', user_id: 2)
post_3_2 = Post.create(title: '2: Second Post', body: '2: this is the second post', user_id: 2)
post_3_3 = Post.create(title: '2: Goodbye', body: '2: this is the third post', user_id: 2)

post_4_1 = Post.create(title: '3: Hello World', body: '3: this is the first post', user_id: 3)
post_4_2 = Post.create(title: '3: Second Post', body: '3: this is the second post', user_id: 3)
post_4_3 = Post.create(title: '3: Goodbye', body: '3: this is the third post', user_id: 3)

like_1_4 = Like.create(user_id: 1, post_id: 4)
like_2_1 = Like.create(user_id: 2, post_id: 1)

follow_1 = Follow.create(follower_id: 2, creator_id: 1)

