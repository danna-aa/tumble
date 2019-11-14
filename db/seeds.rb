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















post_1_1 = Post.create(title: 'Hello World', body: 'Hey programmers! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', user_id: 1, username: 'Demo', post_type: 'text')
post_1_2 = Post.create(image_url: 'https://i.pinimg.com/originals/78/0e/3e/780e3ec3f36a4937a750562e81beef4d.jpg', user_id: 1, username: 'Demo', post_type: 'image')
post_1_2 = Post.create(image_url: 'https://www.allthetests.com/quiz36/picture/pic_1551661173_1.png', user_id: 1, username: 'Demo', post_type: 'image')

post_2_1 = Post.create(title: 'First!', body: 'jk, came in second', user_id: 2, username: 'danna', post_type: 'text')
post_2_2 = Post.create(image_url: 'https://media1.tenor.com/images/53eae63af5700fd4fc8f04725489c166/tenor.gif', user_id: 2, username: 'danna', post_type: 'image')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/197372c7d1075e2309e5d1b818c96db4/43c6adb864ec7868-c0/s540x810/316afdfe766ac75cef2459cb54c363d359e6cdcc.jpg', user_id: 2, username: 'danna', post_type: 'image')

post_2_1 = Post.create(title: 'Funny cat videos', body: 'Welcome to my blog! This is where I post videos of my cat', user_id: 3, username: 'boba', post_type: 'text')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/fe3d0b600dd8a963041e8b50e56bf631/6a914a6270f79a85-c6/s640x960/7cfd433f69cc6462c638f49ec0988712c8cc321f.jpg', user_id: 3, username: 'boba', post_type: 'image')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/9931693f2c7614d86fa3234492679d56/4ffa6d27c775a7dc-a4/s1280x1920/eb58265bfd4c6d9a9dfdb9bb2adeae39b904529b.jpg', user_id: 3, username: 'boba', post_type: 'image')



post_1_1 = Post.create(title: 'Hello World', body: 'Hey programmers! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', user_id: 1, username: 'Demo', post_type: 'text')
post_1_2 = Post.create(image_url: 'https://i.pinimg.com/originals/78/0e/3e/780e3ec3f36a4937a750562e81beef4d.jpg', user_id: 1, username: 'Demo', post_type: 'image')
post_1_2 = Post.create(image_url: 'https://www.allthetests.com/quiz36/picture/pic_1551661173_1.png', user_id: 1, username: 'Demo', post_type: 'image')

post_2_1 = Post.create(title: 'First!', body: 'jk, came in second', user_id: 2, username: 'danna', post_type: 'text')
post_2_2 = Post.create(image_url: 'https://media1.tenor.com/images/53eae63af5700fd4fc8f04725489c166/tenor.gif', user_id: 2, username: 'danna', post_type: 'image')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/197372c7d1075e2309e5d1b818c96db4/43c6adb864ec7868-c0/s540x810/316afdfe766ac75cef2459cb54c363d359e6cdcc.jpg', user_id: 2, username: 'danna', post_type: 'image')

post_2_1 = Post.create(title: 'Funny cat videos', body: 'Welcome to my blog! This is where I post videos of my cat', user_id: 3, username: 'boba', post_type: 'text')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/fe3d0b600dd8a963041e8b50e56bf631/6a914a6270f79a85-c6/s640x960/7cfd433f69cc6462c638f49ec0988712c8cc321f.jpg', user_id: 3, username: 'boba', post_type: 'image')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/9931693f2c7614d86fa3234492679d56/4ffa6d27c775a7dc-a4/s1280x1920/eb58265bfd4c6d9a9dfdb9bb2adeae39b904529b.jpg', user_id: 3, username: 'boba', post_type: 'image')



post_1_1 = Post.create(title: 'Hello World', body: 'Hey programmers! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', user_id: 1, username: 'Demo', post_type: 'text')
post_1_2 = Post.create(image_url: 'https://i.pinimg.com/originals/78/0e/3e/780e3ec3f36a4937a750562e81beef4d.jpg', user_id: 1, username: 'Demo', post_type: 'image')
post_1_2 = Post.create(image_url: 'https://www.allthetests.com/quiz36/picture/pic_1551661173_1.png', user_id: 1, username: 'Demo', post_type: 'image')

post_2_1 = Post.create(title: 'First!', body: 'jk, came in second', user_id: 2, username: 'danna', post_type: 'text')
post_2_2 = Post.create(image_url: 'https://media1.tenor.com/images/53eae63af5700fd4fc8f04725489c166/tenor.gif', user_id: 2, username: 'danna', post_type: 'image')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/197372c7d1075e2309e5d1b818c96db4/43c6adb864ec7868-c0/s540x810/316afdfe766ac75cef2459cb54c363d359e6cdcc.jpg', user_id: 2, username: 'danna', post_type: 'image')

post_2_1 = Post.create(title: 'Funny cat videos', body: 'Welcome to my blog! This is where I post videos of my cat', user_id: 3, username: 'boba', post_type: 'text')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/fe3d0b600dd8a963041e8b50e56bf631/6a914a6270f79a85-c6/s640x960/7cfd433f69cc6462c638f49ec0988712c8cc321f.jpg', user_id: 3, username: 'boba', post_type: 'image')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/9931693f2c7614d86fa3234492679d56/4ffa6d27c775a7dc-a4/s1280x1920/eb58265bfd4c6d9a9dfdb9bb2adeae39b904529b.jpg', user_id: 3, username: 'boba', post_type: 'image')




post_1_1 = Post.create(title: 'Hello World', body: 'Hey programmers! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', user_id: 1, username: 'Demo', post_type: 'text')
post_1_2 = Post.create(image_url: 'https://i.pinimg.com/originals/78/0e/3e/780e3ec3f36a4937a750562e81beef4d.jpg', user_id: 1, username: 'Demo', post_type: 'image')
post_1_2 = Post.create(image_url: 'https://www.allthetests.com/quiz36/picture/pic_1551661173_1.png', user_id: 1, username: 'Demo', post_type: 'image')

post_2_1 = Post.create(title: 'First!', body: 'jk, came in second', user_id: 2, username: 'danna', post_type: 'text')
post_2_2 = Post.create(image_url: 'https://media1.tenor.com/images/53eae63af5700fd4fc8f04725489c166/tenor.gif', user_id: 2, username: 'danna', post_type: 'image')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/197372c7d1075e2309e5d1b818c96db4/43c6adb864ec7868-c0/s540x810/316afdfe766ac75cef2459cb54c363d359e6cdcc.jpg', user_id: 2, username: 'danna', post_type: 'image')

post_2_1 = Post.create(title: 'Funny cat videos', body: 'Welcome to my blog! This is where I post videos of my cat', user_id: 3, username: 'boba', post_type: 'text')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/fe3d0b600dd8a963041e8b50e56bf631/6a914a6270f79a85-c6/s640x960/7cfd433f69cc6462c638f49ec0988712c8cc321f.jpg', user_id: 3, username: 'boba', post_type: 'image')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/9931693f2c7614d86fa3234492679d56/4ffa6d27c775a7dc-a4/s1280x1920/eb58265bfd4c6d9a9dfdb9bb2adeae39b904529b.jpg', user_id: 3, username: 'boba', post_type: 'image')



post_1_1 = Post.create(title: 'Hello World', body: 'Hey programmers! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', user_id: 1, username: 'Demo', post_type: 'text')
post_1_2 = Post.create(image_url: 'https://i.pinimg.com/originals/78/0e/3e/780e3ec3f36a4937a750562e81beef4d.jpg', user_id: 1, username: 'Demo', post_type: 'image')
post_1_2 = Post.create(image_url: 'https://www.allthetests.com/quiz36/picture/pic_1551661173_1.png', user_id: 1, username: 'Demo', post_type: 'image')

post_2_1 = Post.create(title: 'First!', body: 'jk, came in second', user_id: 2, username: 'danna', post_type: 'text')
post_2_2 = Post.create(image_url: 'https://media1.tenor.com/images/53eae63af5700fd4fc8f04725489c166/tenor.gif', user_id: 2, username: 'danna', post_type: 'image')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/197372c7d1075e2309e5d1b818c96db4/43c6adb864ec7868-c0/s540x810/316afdfe766ac75cef2459cb54c363d359e6cdcc.jpg', user_id: 2, username: 'danna', post_type: 'image')

post_2_1 = Post.create(title: 'Funny cat videos', body: 'Welcome to my blog! This is where I post videos of my cat', user_id: 3, username: 'boba', post_type: 'text')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/fe3d0b600dd8a963041e8b50e56bf631/6a914a6270f79a85-c6/s640x960/7cfd433f69cc6462c638f49ec0988712c8cc321f.jpg', user_id: 3, username: 'boba', post_type: 'image')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/9931693f2c7614d86fa3234492679d56/4ffa6d27c775a7dc-a4/s1280x1920/eb58265bfd4c6d9a9dfdb9bb2adeae39b904529b.jpg', user_id: 3, username: 'boba', post_type: 'image')



post_1_1 = Post.create(title: 'Hello World', body: 'Hey programmers! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', user_id: 1, username: 'Demo', post_type: 'text')
post_1_2 = Post.create(image_url: 'https://i.pinimg.com/originals/78/0e/3e/780e3ec3f36a4937a750562e81beef4d.jpg', user_id: 1, username: 'Demo', post_type: 'image')
post_1_2 = Post.create(image_url: 'https://www.allthetests.com/quiz36/picture/pic_1551661173_1.png', user_id: 1, username: 'Demo', post_type: 'image')

post_2_1 = Post.create(title: 'First!', body: 'jk, came in second', user_id: 2, username: 'danna', post_type: 'text')
post_2_2 = Post.create(image_url: 'https://media1.tenor.com/images/53eae63af5700fd4fc8f04725489c166/tenor.gif', user_id: 2, username: 'danna', post_type: 'image')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/197372c7d1075e2309e5d1b818c96db4/43c6adb864ec7868-c0/s540x810/316afdfe766ac75cef2459cb54c363d359e6cdcc.jpg', user_id: 2, username: 'danna', post_type: 'image')

post_2_1 = Post.create(title: 'Funny cat videos', body: 'Welcome to my blog! This is where I post videos of my cat', user_id: 3, username: 'boba', post_type: 'text')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/fe3d0b600dd8a963041e8b50e56bf631/6a914a6270f79a85-c6/s640x960/7cfd433f69cc6462c638f49ec0988712c8cc321f.jpg', user_id: 3, username: 'boba', post_type: 'image')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/9931693f2c7614d86fa3234492679d56/4ffa6d27c775a7dc-a4/s1280x1920/eb58265bfd4c6d9a9dfdb9bb2adeae39b904529b.jpg', user_id: 3, username: 'boba', post_type: 'image')



post_1_1 = Post.create(title: 'Hello World', body: 'Hey programmers! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', user_id: 1, username: 'Demo', post_type: 'text')
post_1_2 = Post.create(image_url: 'https://i.pinimg.com/originals/78/0e/3e/780e3ec3f36a4937a750562e81beef4d.jpg', user_id: 1, username: 'Demo', post_type: 'image')
post_1_2 = Post.create(image_url: 'https://www.allthetests.com/quiz36/picture/pic_1551661173_1.png', user_id: 1, username: 'Demo', post_type: 'image')

post_2_1 = Post.create(title: 'First!', body: 'jk, came in second', user_id: 2, username: 'danna', post_type: 'text')
post_2_2 = Post.create(image_url: 'https://media1.tenor.com/images/53eae63af5700fd4fc8f04725489c166/tenor.gif', user_id: 2, username: 'danna', post_type: 'image')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/197372c7d1075e2309e5d1b818c96db4/43c6adb864ec7868-c0/s540x810/316afdfe766ac75cef2459cb54c363d359e6cdcc.jpg', user_id: 2, username: 'danna', post_type: 'image')

post_2_1 = Post.create(title: 'Funny cat videos', body: 'Welcome to my blog! This is where I post videos of my cat', user_id: 3, username: 'boba', post_type: 'text')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/fe3d0b600dd8a963041e8b50e56bf631/6a914a6270f79a85-c6/s640x960/7cfd433f69cc6462c638f49ec0988712c8cc321f.jpg', user_id: 3, username: 'boba', post_type: 'image')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/9931693f2c7614d86fa3234492679d56/4ffa6d27c775a7dc-a4/s1280x1920/eb58265bfd4c6d9a9dfdb9bb2adeae39b904529b.jpg', user_id: 3, username: 'boba', post_type: 'image')



post_1_1 = Post.create(title: 'Hello World', body: 'Hey programmers! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', user_id: 1, username: 'Demo', post_type: 'text')
post_1_2 = Post.create(image_url: 'https://i.pinimg.com/originals/78/0e/3e/780e3ec3f36a4937a750562e81beef4d.jpg', user_id: 1, username: 'Demo', post_type: 'image')
post_1_2 = Post.create(image_url: 'https://www.allthetests.com/quiz36/picture/pic_1551661173_1.png', user_id: 1, username: 'Demo', post_type: 'image')

post_2_1 = Post.create(title: 'First!', body: 'jk, came in second', user_id: 2, username: 'danna', post_type: 'text')
post_2_2 = Post.create(image_url: 'https://media1.tenor.com/images/53eae63af5700fd4fc8f04725489c166/tenor.gif', user_id: 2, username: 'danna', post_type: 'image')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/197372c7d1075e2309e5d1b818c96db4/43c6adb864ec7868-c0/s540x810/316afdfe766ac75cef2459cb54c363d359e6cdcc.jpg', user_id: 2, username: 'danna', post_type: 'image')

post_2_1 = Post.create(title: 'Funny cat videos', body: 'Welcome to my blog! This is where I post videos of my cat', user_id: 3, username: 'boba', post_type: 'text')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/fe3d0b600dd8a963041e8b50e56bf631/6a914a6270f79a85-c6/s640x960/7cfd433f69cc6462c638f49ec0988712c8cc321f.jpg', user_id: 3, username: 'boba', post_type: 'image')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/9931693f2c7614d86fa3234492679d56/4ffa6d27c775a7dc-a4/s1280x1920/eb58265bfd4c6d9a9dfdb9bb2adeae39b904529b.jpg', user_id: 3, username: 'boba', post_type: 'image')



post_1_1 = Post.create(title: 'Hello World', body: 'Hey programmers! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', user_id: 1, username: 'Demo', post_type: 'text')
post_1_2 = Post.create(image_url: 'https://i.pinimg.com/originals/78/0e/3e/780e3ec3f36a4937a750562e81beef4d.jpg', user_id: 1, username: 'Demo', post_type: 'image')
post_1_2 = Post.create(image_url: 'https://www.allthetests.com/quiz36/picture/pic_1551661173_1.png', user_id: 1, username: 'Demo', post_type: 'image')

post_2_1 = Post.create(title: 'First!', body: 'jk, came in second', user_id: 2, username: 'danna', post_type: 'text')
post_2_2 = Post.create(image_url: 'https://media1.tenor.com/images/53eae63af5700fd4fc8f04725489c166/tenor.gif', user_id: 2, username: 'danna', post_type: 'image')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/197372c7d1075e2309e5d1b818c96db4/43c6adb864ec7868-c0/s540x810/316afdfe766ac75cef2459cb54c363d359e6cdcc.jpg', user_id: 2, username: 'danna', post_type: 'image')

post_2_1 = Post.create(title: 'Funny cat videos', body: 'Welcome to my blog! This is where I post videos of my cat', user_id: 3, username: 'boba', post_type: 'text')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/fe3d0b600dd8a963041e8b50e56bf631/6a914a6270f79a85-c6/s640x960/7cfd433f69cc6462c638f49ec0988712c8cc321f.jpg', user_id: 3, username: 'boba', post_type: 'image')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/9931693f2c7614d86fa3234492679d56/4ffa6d27c775a7dc-a4/s1280x1920/eb58265bfd4c6d9a9dfdb9bb2adeae39b904529b.jpg', user_id: 3, username: 'boba', post_type: 'image')



post_1_1 = Post.create(title: 'Hello World', body: 'Hey programmers! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', user_id: 1, username: 'Demo', post_type: 'text')
post_1_2 = Post.create(image_url: 'https://i.pinimg.com/originals/78/0e/3e/780e3ec3f36a4937a750562e81beef4d.jpg', user_id: 1, username: 'Demo', post_type: 'image')
post_1_2 = Post.create(image_url: 'https://www.allthetests.com/quiz36/picture/pic_1551661173_1.png', user_id: 1, username: 'Demo', post_type: 'image')

post_2_1 = Post.create(title: 'First!', body: 'jk, came in second', user_id: 2, username: 'danna', post_type: 'text')
post_2_2 = Post.create(image_url: 'https://media1.tenor.com/images/53eae63af5700fd4fc8f04725489c166/tenor.gif', user_id: 2, username: 'danna', post_type: 'image')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/197372c7d1075e2309e5d1b818c96db4/43c6adb864ec7868-c0/s540x810/316afdfe766ac75cef2459cb54c363d359e6cdcc.jpg', user_id: 2, username: 'danna', post_type: 'image')

post_2_1 = Post.create(title: 'Funny cat videos', body: 'Welcome to my blog! This is where I post videos of my cat', user_id: 3, username: 'boba', post_type: 'text')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/fe3d0b600dd8a963041e8b50e56bf631/6a914a6270f79a85-c6/s640x960/7cfd433f69cc6462c638f49ec0988712c8cc321f.jpg', user_id: 3, username: 'boba', post_type: 'image')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/9931693f2c7614d86fa3234492679d56/4ffa6d27c775a7dc-a4/s1280x1920/eb58265bfd4c6d9a9dfdb9bb2adeae39b904529b.jpg', user_id: 3, username: 'boba', post_type: 'image')



post_1_1 = Post.create(title: 'Hello World', body: 'Hey programmers! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', user_id: 1, username: 'Demo', post_type: 'text')
post_1_2 = Post.create(image_url: 'https://i.pinimg.com/originals/78/0e/3e/780e3ec3f36a4937a750562e81beef4d.jpg', user_id: 1, username: 'Demo', post_type: 'image')
post_1_2 = Post.create(image_url: 'https://www.allthetests.com/quiz36/picture/pic_1551661173_1.png', user_id: 1, username: 'Demo', post_type: 'image')

post_2_1 = Post.create(title: 'First!', body: 'jk, came in second', user_id: 2, username: 'danna', post_type: 'text')
post_2_2 = Post.create(image_url: 'https://media1.tenor.com/images/53eae63af5700fd4fc8f04725489c166/tenor.gif', user_id: 2, username: 'danna', post_type: 'image')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/197372c7d1075e2309e5d1b818c96db4/43c6adb864ec7868-c0/s540x810/316afdfe766ac75cef2459cb54c363d359e6cdcc.jpg', user_id: 2, username: 'danna', post_type: 'image')

post_2_1 = Post.create(title: 'Funny cat videos', body: 'Welcome to my blog! This is where I post videos of my cat', user_id: 3, username: 'boba', post_type: 'text')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/fe3d0b600dd8a963041e8b50e56bf631/6a914a6270f79a85-c6/s640x960/7cfd433f69cc6462c638f49ec0988712c8cc321f.jpg', user_id: 3, username: 'boba', post_type: 'image')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/9931693f2c7614d86fa3234492679d56/4ffa6d27c775a7dc-a4/s1280x1920/eb58265bfd4c6d9a9dfdb9bb2adeae39b904529b.jpg', user_id: 3, username: 'boba', post_type: 'image')



post_1_1 = Post.create(title: 'Hello World', body: 'Hey programmers! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', user_id: 1, username: 'Demo', post_type: 'text')
post_1_2 = Post.create(image_url: 'https://i.pinimg.com/originals/78/0e/3e/780e3ec3f36a4937a750562e81beef4d.jpg', user_id: 1, username: 'Demo', post_type: 'image')
post_1_2 = Post.create(image_url: 'https://www.allthetests.com/quiz36/picture/pic_1551661173_1.png', user_id: 1, username: 'Demo', post_type: 'image')

post_2_1 = Post.create(title: 'First!', body: 'jk, came in second', user_id: 2, username: 'danna', post_type: 'text')
post_2_2 = Post.create(image_url: 'https://media1.tenor.com/images/53eae63af5700fd4fc8f04725489c166/tenor.gif', user_id: 2, username: 'danna', post_type: 'image')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/197372c7d1075e2309e5d1b818c96db4/43c6adb864ec7868-c0/s540x810/316afdfe766ac75cef2459cb54c363d359e6cdcc.jpg', user_id: 2, username: 'danna', post_type: 'image')

post_2_1 = Post.create(title: 'Funny cat videos', body: 'Welcome to my blog! This is where I post videos of my cat', user_id: 3, username: 'boba', post_type: 'text')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/fe3d0b600dd8a963041e8b50e56bf631/6a914a6270f79a85-c6/s640x960/7cfd433f69cc6462c638f49ec0988712c8cc321f.jpg', user_id: 3, username: 'boba', post_type: 'image')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/9931693f2c7614d86fa3234492679d56/4ffa6d27c775a7dc-a4/s1280x1920/eb58265bfd4c6d9a9dfdb9bb2adeae39b904529b.jpg', user_id: 3, username: 'boba', post_type: 'image')



post_1_1 = Post.create(title: 'Hello World', body: 'Hey programmers! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', user_id: 1, username: 'Demo', post_type: 'text')
post_1_2 = Post.create(image_url: 'https://i.pinimg.com/originals/78/0e/3e/780e3ec3f36a4937a750562e81beef4d.jpg', user_id: 1, username: 'Demo', post_type: 'image')
post_1_2 = Post.create(image_url: 'https://www.allthetests.com/quiz36/picture/pic_1551661173_1.png', user_id: 1, username: 'Demo', post_type: 'image')

post_2_1 = Post.create(title: 'First!', body: 'jk, came in second', user_id: 2, username: 'danna', post_type: 'text')
post_2_2 = Post.create(image_url: 'https://media1.tenor.com/images/53eae63af5700fd4fc8f04725489c166/tenor.gif', user_id: 2, username: 'danna', post_type: 'image')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/197372c7d1075e2309e5d1b818c96db4/43c6adb864ec7868-c0/s540x810/316afdfe766ac75cef2459cb54c363d359e6cdcc.jpg', user_id: 2, username: 'danna', post_type: 'image')

post_2_1 = Post.create(title: 'Funny cat videos', body: 'Welcome to my blog! This is where I post videos of my cat', user_id: 3, username: 'boba', post_type: 'text')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/fe3d0b600dd8a963041e8b50e56bf631/6a914a6270f79a85-c6/s640x960/7cfd433f69cc6462c638f49ec0988712c8cc321f.jpg', user_id: 3, username: 'boba', post_type: 'image')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/9931693f2c7614d86fa3234492679d56/4ffa6d27c775a7dc-a4/s1280x1920/eb58265bfd4c6d9a9dfdb9bb2adeae39b904529b.jpg', user_id: 3, username: 'boba', post_type: 'image')


post_1_1 = Post.create(title: 'Hello World', body: 'Hey programmers! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', user_id: 1, username: 'Demo', post_type: 'text')
post_1_2 = Post.create(image_url: 'https://i.pinimg.com/originals/78/0e/3e/780e3ec3f36a4937a750562e81beef4d.jpg', user_id: 1, username: 'Demo', post_type: 'image')
post_1_2 = Post.create(image_url: 'https://www.allthetests.com/quiz36/picture/pic_1551661173_1.png', user_id: 1, username: 'Demo', post_type: 'image')

post_2_1 = Post.create(title: 'First!', body: 'jk, came in second', user_id: 2, username: 'danna', post_type: 'text')
post_2_2 = Post.create(image_url: 'https://media1.tenor.com/images/53eae63af5700fd4fc8f04725489c166/tenor.gif', user_id: 2, username: 'danna', post_type: 'image')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/197372c7d1075e2309e5d1b818c96db4/43c6adb864ec7868-c0/s540x810/316afdfe766ac75cef2459cb54c363d359e6cdcc.jpg', user_id: 2, username: 'danna', post_type: 'image')

post_2_1 = Post.create(title: 'Funny cat videos', body: 'Welcome to my blog! This is where I post videos of my cat', user_id: 3, username: 'boba', post_type: 'text')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/fe3d0b600dd8a963041e8b50e56bf631/6a914a6270f79a85-c6/s640x960/7cfd433f69cc6462c638f49ec0988712c8cc321f.jpg', user_id: 3, username: 'boba', post_type: 'image')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/9931693f2c7614d86fa3234492679d56/4ffa6d27c775a7dc-a4/s1280x1920/eb58265bfd4c6d9a9dfdb9bb2adeae39b904529b.jpg', user_id: 3, username: 'boba', post_type: 'image')


post_1_1 = Post.create(title: 'Hello World', body: 'Hey programmers! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', user_id: 1, username: 'Demo', post_type: 'text')
post_1_2 = Post.create(image_url: 'https://i.pinimg.com/originals/78/0e/3e/780e3ec3f36a4937a750562e81beef4d.jpg', user_id: 1, username: 'Demo', post_type: 'image')
post_1_2 = Post.create(image_url: 'https://www.allthetests.com/quiz36/picture/pic_1551661173_1.png', user_id: 1, username: 'Demo', post_type: 'image')

post_2_1 = Post.create(title: 'First!', body: 'jk, came in second', user_id: 2, username: 'danna', post_type: 'text')
post_2_2 = Post.create(image_url: 'https://media1.tenor.com/images/53eae63af5700fd4fc8f04725489c166/tenor.gif', user_id: 2, username: 'danna', post_type: 'image')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/197372c7d1075e2309e5d1b818c96db4/43c6adb864ec7868-c0/s540x810/316afdfe766ac75cef2459cb54c363d359e6cdcc.jpg', user_id: 2, username: 'danna', post_type: 'image')

post_2_1 = Post.create(title: 'Funny cat videos', body: 'Welcome to my blog! This is where I post videos of my cat', user_id: 3, username: 'boba', post_type: 'text')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/fe3d0b600dd8a963041e8b50e56bf631/6a914a6270f79a85-c6/s640x960/7cfd433f69cc6462c638f49ec0988712c8cc321f.jpg', user_id: 3, username: 'boba', post_type: 'image')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/9931693f2c7614d86fa3234492679d56/4ffa6d27c775a7dc-a4/s1280x1920/eb58265bfd4c6d9a9dfdb9bb2adeae39b904529b.jpg', user_id: 3, username: 'boba', post_type: 'image')


post_1_1 = Post.create(title: 'Hello World', body: 'Hey programmers! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', user_id: 1, username: 'Demo', post_type: 'text')
post_1_2 = Post.create(image_url: 'https://i.pinimg.com/originals/78/0e/3e/780e3ec3f36a4937a750562e81beef4d.jpg', user_id: 1, username: 'Demo', post_type: 'image')
post_1_2 = Post.create(image_url: 'https://www.allthetests.com/quiz36/picture/pic_1551661173_1.png', user_id: 1, username: 'Demo', post_type: 'image')

post_2_1 = Post.create(title: 'First!', body: 'jk, came in second', user_id: 2, username: 'danna', post_type: 'text')
post_2_2 = Post.create(image_url: 'https://media1.tenor.com/images/53eae63af5700fd4fc8f04725489c166/tenor.gif', user_id: 2, username: 'danna', post_type: 'image')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/197372c7d1075e2309e5d1b818c96db4/43c6adb864ec7868-c0/s540x810/316afdfe766ac75cef2459cb54c363d359e6cdcc.jpg', user_id: 2, username: 'danna', post_type: 'image')

post_2_1 = Post.create(title: 'Funny cat videos', body: 'Welcome to my blog! This is where I post videos of my cat', user_id: 3, username: 'boba', post_type: 'text')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/fe3d0b600dd8a963041e8b50e56bf631/6a914a6270f79a85-c6/s640x960/7cfd433f69cc6462c638f49ec0988712c8cc321f.jpg', user_id: 3, username: 'boba', post_type: 'image')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/9931693f2c7614d86fa3234492679d56/4ffa6d27c775a7dc-a4/s1280x1920/eb58265bfd4c6d9a9dfdb9bb2adeae39b904529b.jpg', user_id: 3, username: 'boba', post_type: 'image')


post_1_1 = Post.create(title: 'Hello World', body: 'Hey programmers! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', user_id: 1, username: 'Demo', post_type: 'text')
post_1_2 = Post.create(image_url: 'https://i.pinimg.com/originals/78/0e/3e/780e3ec3f36a4937a750562e81beef4d.jpg', user_id: 1, username: 'Demo', post_type: 'image')
post_1_2 = Post.create(image_url: 'https://www.allthetests.com/quiz36/picture/pic_1551661173_1.png', user_id: 1, username: 'Demo', post_type: 'image')

post_2_1 = Post.create(title: 'First!', body: 'jk, came in second', user_id: 2, username: 'danna', post_type: 'text')
post_2_2 = Post.create(image_url: 'https://media1.tenor.com/images/53eae63af5700fd4fc8f04725489c166/tenor.gif', user_id: 2, username: 'danna', post_type: 'image')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/197372c7d1075e2309e5d1b818c96db4/43c6adb864ec7868-c0/s540x810/316afdfe766ac75cef2459cb54c363d359e6cdcc.jpg', user_id: 2, username: 'danna', post_type: 'image')

post_2_1 = Post.create(title: 'Funny cat videos', body: 'Welcome to my blog! This is where I post videos of my cat', user_id: 3, username: 'boba', post_type: 'text')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/fe3d0b600dd8a963041e8b50e56bf631/6a914a6270f79a85-c6/s640x960/7cfd433f69cc6462c638f49ec0988712c8cc321f.jpg', user_id: 3, username: 'boba', post_type: 'image')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/9931693f2c7614d86fa3234492679d56/4ffa6d27c775a7dc-a4/s1280x1920/eb58265bfd4c6d9a9dfdb9bb2adeae39b904529b.jpg', user_id: 3, username: 'boba', post_type: 'image')


post_1_1 = Post.create(title: 'Hello World', body: 'Hey programmers! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', user_id: 1, username: 'Demo', post_type: 'text')
post_1_2 = Post.create(image_url: 'https://i.pinimg.com/originals/78/0e/3e/780e3ec3f36a4937a750562e81beef4d.jpg', user_id: 1, username: 'Demo', post_type: 'image')
post_1_2 = Post.create(image_url: 'https://www.allthetests.com/quiz36/picture/pic_1551661173_1.png', user_id: 1, username: 'Demo', post_type: 'image')

post_2_1 = Post.create(title: 'First!', body: 'jk, came in second', user_id: 2, username: 'danna', post_type: 'text')
post_2_2 = Post.create(image_url: 'https://media1.tenor.com/images/53eae63af5700fd4fc8f04725489c166/tenor.gif', user_id: 2, username: 'danna', post_type: 'image')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/197372c7d1075e2309e5d1b818c96db4/43c6adb864ec7868-c0/s540x810/316afdfe766ac75cef2459cb54c363d359e6cdcc.jpg', user_id: 2, username: 'danna', post_type: 'image')

post_2_1 = Post.create(title: 'Funny cat videos', body: 'Welcome to my blog! This is where I post videos of my cat', user_id: 3, username: 'boba', post_type: 'text')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/fe3d0b600dd8a963041e8b50e56bf631/6a914a6270f79a85-c6/s640x960/7cfd433f69cc6462c638f49ec0988712c8cc321f.jpg', user_id: 3, username: 'boba', post_type: 'image')
post_2_2 = Post.create(image_url: 'https://66.media.tumblr.com/9931693f2c7614d86fa3234492679d56/4ffa6d27c775a7dc-a4/s1280x1920/eb58265bfd4c6d9a9dfdb9bb2adeae39b904529b.jpg', user_id: 3, username: 'boba', post_type: 'image')


