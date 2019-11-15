# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

demo_user = User.create(username: 'Demo', password: 'password', email: 'whatsupeople@gmail.com', title: "this website sucks", description: "i am the demo user")

 

user2 = User.create(username: 'danna', password: 'password', email: 'danna@berkeley.edu', title: "plz hire me", description: "i don't want to be homeless")

user3 = User.create(username: 'boba', password: 'password', email: 'boba@aa.io', title: "is a good boy", description: "boba does not sit")

user4 = User.create(username: 'mochi', password: 'password', email: 'mochi@aa.io', title: "dog genius", description: "best girl")

user5 = User.create(username: 'mashu', password: 'password', email: 'mashu@aa.io', title: "round boy", description: "daruma fan")

user6 = User.create(username: 'char', password: 'password', email: 'char@aa.io', title: "commander", description: "red comet")

user7 = User.create(username: 'bill wurtz', password: 'password', email: 'bill@aa.io', title: "composer", description: "normal guy")

user8 = User.create(username: 'harry potter', password: 'password', email: 'harry@aa.io', title: "boy who lived", description: "not that great")

user9 = User.create(username: 'artist', password: 'password', email: 'artist@aa.io', title: "broke", description: "person who arts")

user10 = User.create(username: 'mimi', password: 'password', email: 'mimi@aa.io', title: "meme lord", description: "I stole these from reddit")

 

 

 

 

post_1_1 = Post.create(title: 'Hello World', body: 'Hey programmers! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', user_id: 1, username: 'Demo', post_type: 'text')

post_1_2 = Post.create(image_url: 'https://i.pinimg.com/originals/78/0e/3e/780e3ec3f36a4937a750562e81beef4d.jpg', user_id: 1, username: 'Demo', post_type: 'image')

post_1_2 = Post.create(image_url: 'https://www.allthetests.com/quiz36/picture/pic_1551661173_1.png', user_id: 1, username: 'Demo', post_type: 'image')

 

post_2_1 = Post.create(title: 'First!', body: 'jk, came in second', user_id: 2, username: 'danna', post_type: 'text')

post_2_2 = Post.create(image_url: 'https://media1.tenor.com/images/53eae63af5700fd4fc8f04725489c166/tenor.gif', user_id: 2, username: 'danna', post_type: 'image')

post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/197372c7d1075e2309e5d1b818c96db4/43c6adb864ec7868-c0/s540x810/316afdfe766ac75cef2459cb54c363d359e6cdcc.jpg', user_id: 2, username: 'danna', post_type: 'image')

 

post_2_1 = Post.create(title: 'Funny cat videos', body: 'Welcome to my blog! This is where I post videos of my cat', user_id: 3, username: 'boba', post_type: 'text')

post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/fe3d0b600dd8a963041e8b50e56bf631/6a914a6270f79a85-c6/s640x960/7cfd433f69cc6462c638f49ec0988712c8cc321f.jpg', user_id: 3, username: 'boba', post_type: 'image')

post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/9931693f2c7614d86fa3234492679d56/4ffa6d27c775a7dc-a4/s1280x1920/eb58265bfd4c6d9a9dfdb9bb2adeae39b904529b.jpg', user_id: 3, username: 'boba', post_type: 'image')

 

like_1_4 = Like.create(user_id: 1, post_id: 4)

like_2_1 = Like.create(user_id: 2, post_id: 1)

 

follow_1 = Follow.create(follower_id: 1, creator_id: 2)

 

#matt adds

post_5_1 = Post.create(image_url: 'https://66.media.tumblr.com/e29cb94f4fa736b13ceb023e84a9d1c1/tumblr_p5l7ukv80P1sn9etyo1_500.jpg', user_id: 5, username: 'mashu', post_type: 'image')

post_5_2 = Post.create(image_url: 'https://66.media.tumblr.com/73aad834397630624ad17d48f8e2bc1e/tumblr_pib8g8xFz21rbn2two1_1280.png', user_id: 5, username: 'mashu', post_type: 'image')

post_5_3 = Post.create(image_url: 'https://66.media.tumblr.com/efa2ba7c7368efa19edd75d849e72cc1/tumblr_p2o7k2aTUY1tmhol8o1_1280.png', user_id: 5, username: 'mashu', post_type: 'image')

post_5_4 = Post.create(image_url: 'https://66.media.tumblr.com/7af42a236d721b4c927610c78a71e8cd/tumblr_p8kum1K3eC1wsge6to1_1280.jpg', user_id: 5, username: 'mashu', post_type: 'image')

post_5_5 = Post.create(image_url: 'https://66.media.tumblr.com/736dcb1439641a141510616cf82748eb/234d84c51f1f0599-82/s1280x1920/989ebf683e1d0c6eba9908b936695bfdb00a615a.png', user_id: 5, username: 'mashu', post_type: 'image')

post_5_6 = Post.create(image_url: 'https://66.media.tumblr.com/c0415481325f95572322ac9a5acc725e/tumblr_okjobpKDnx1v5edfqo1_1280.jpg', user_id: 5, username: 'mashu', post_type: 'image')

post_5_7 = Post.create(image_url: 'https://66.media.tumblr.com/d9fce5433474550708e767d7cfd45333/tumblr_odiq94CISO1rs01s0o1_1280.png', user_id: 5, username: 'mashu', post_type: 'image')

post_5_8 = Post.create(image_url: 'https://66.media.tumblr.com/ef7a8195ac1f112cf528793ffe6af9f3/tumblr_oxft568Dlx1spxkf4o2_r1_1280.png', user_id: 5, username: 'mashu', post_type: 'image')

post_5_9 = Post.create(image_url: 'https://66.media.tumblr.com/5e4438f9933a6f1c38b8c453550f3efc/tumblr_owfn7ifu4x1roqda3o1_540.gif', user_id: 5, username: 'mashu', post_type: 'image')

post_5_10 = Post.create(image_url: 'https://66.media.tumblr.com/0354e9d0979ef625cb8ac935343981b7/tumblr_ossbfmMo4y1vvzrxxo1_1280.gif', user_id: 5, username: 'mashu', post_type: 'image')