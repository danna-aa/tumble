# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
demo_user = User.create(username: 'Demo', password: 'password', email: 'whatsupeople@gmail.com', title: "demo user", description: "i am the demo user")
# demo_user.avatar.attach(io: File.open("/Users/dannaxu/Desktop/yj.jpg"), filename: "avatar")

user2 = User.create(username: 'danna', password: 'password', email: 'danna@berkeley.edu', title: "software engineer", description: "full stack")
# user2.avatar.attach(io: File.open("/Users/dannaxu/Desktop/jacket.jpg"), filename: "avatar")

user3 = User.create(username: 'boba', password: 'password', email: 'boba@aa.io', title: "is a good boy", description: "boba does not sit")
# user3.avatar.attach(io: File.open("/Users/dannaxu/Desktop/boba.jpg"), filename: "avatar")

user4 = User.create(username: 'mochi', password: 'password', email: 'mochi@aa.io', title: "dog genius", description: "best girl")
# user4.avatar.attach(io: File.open("/Users/dannaxu/Desktop/mochi.jpg"), filename: "avatar")

user5 = User.create(username: 'mashu', password: 'password', email: 'mashu@aa.io', title: "round boy", description: "daruma fan")
# user5.avatar.attach(io: File.open("/Users/dannaxu/Desktop/potato.jpg"), filename: "avatar")

user6 = User.create(username: 'char', password: 'password', email: 'char@aa.io', title: "commander", description: "red comet")
# user6.avatar.attach(io: File.open("/Users/dannaxu/Desktop/ca.jpg"), filename: "avatar")

user7 = User.create(username: 'bill wurtz', password: 'password', email: 'bill@aa.io', title: "composer", description: "normal guy")
# user7.avatar.attach(io: File.open("/Users/dannaxu/Desktop/bw.jpeg"), filename: "avatar")

user8 = User.create(username: 'harry potter', password: 'password', email: 'harry@aa.io', title: "boy who lived", description: "not that great")
# user8.avatar.attach(io: File.open("/Users/dannaxu/Desktop/hp.jpg"), filename: "avatar")

user9 = User.create(username: 'artist', password: 'password', email: 'artist@aa.io', title: "i like art", description: "art things")
# user9.avatar.attach(io: File.open("/Users/dannaxu/Desktop/art.jpg"), filename: "avatar")

user10 = User.create(username: 'mimi', password: 'password', email: 'mimi@aa.io', title: "meme lord", description: "dank memes")
# user10.avatar.attach(io: File.open("/Users/dannaxu/Desktop/mimi.jpg"), filename: "avatar")
 

 

 

 

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
like_2_2 = Like.create(user_id: 3, post_id: 1)

 

follow_1 = Follow.create(follower_id: 1, creator_id: 2)

follow_2 = Follow.create(follower_id: 1, creator_id: 5)

follow_3 = Follow.create(follower_id: 1, creator_id: 6)

follow_4 = Follow.create(follower_id: 1, creator_id: 7)

follow_5 = Follow.create(follower_id: 1, creator_id: 8)

follow_6 = Follow.create(follower_id: 1, creator_id: 9)

follow_7 = Follow.create(follower_id: 1, creator_id: 10)

 





# matt adds

 

post_5_1 = Post.create(image_url: 'https://66.media.tumblr.com/e29cb94f4fa736b13ceb023e84a9d1c1/tumblr_p5l7ukv80P1sn9etyo1_500.jpg', user_id: 5, username: 'mashu', post_type: 'image')

post_6_1 = Post.create(image_url: 'https://66.media.tumblr.com/1f54946a0a2efd2d2346bef9f88e39b9/tumblr_oxfisf8QHS1qc3nl6o1_r1_640.gif', user_id: 6, username: 'char', post_type: 'image')

post_7_1 = Post.create(video_url: 'https://www.youtube.com/watch?v=NHZr6P1csiY', user_id: 7, username: 'bill_wurtz', post_type: 'video')

post_8_1 = Post.create(image_url: "https://66.media.tumblr.com/e6f2c4b1c54573af211504325a10143d/7f3fff91d929835d-9b/s1280x1920/52b65ff446960bf9fc12b0e823fc29e52ea1622f.png", user_id: 8, username: 'harry_potter', post_type: 'image')

post_9_1 = Post.create(image_url: "https://66.media.tumblr.com/289bc0c31e1b0e5e90f003015a411304/tumblr_pvopq6RAsC1ugs0mgo1_640.gif", user_id: 9, username: "artist", post_type: "image")

post_10_1 = Post.create(image_url: "https://66.media.tumblr.com/8a3f4dcd69d4e47115da14c3e4a479a7/aa65776a9000ca5c-55/s500x750/97c3ab08dc41f874caed5232b750bb2bb151e13b.png", user_id: 10, username: "mimi", post_type: "image")

post_5_2 = Post.create(image_url: "https://66.media.tumblr.com/73aad834397630624ad17d48f8e2bc1e/tumblr_pib8g8xFz21rbn2two1_1280.png", user_id: 5, username: "mashu", post_type: "image")

post_6_2 = Post.create(image_url: "https://66.media.tumblr.com/983fcf6d220c91fecde8e1a995f79a7b/tumblr_p7f2baLwon1us5lubo1_1280.jpg", user_id: 6, username: "char", post_type: "image")

post_7_2 = Post.create(image_url: "https://66.media.tumblr.com/4d6d4dd2e4e9dadfb93f4822709584bf/tumblr_oprbqdVADA1un97n9o1_1280.png", user_id: 7, username: "bill_wurtz", post_type: "image")

post_8_2 = Post.create(image_url: "https://66.media.tumblr.com/c5137cd3b31fef8315093d2f48c7ace6/00439c1e64854975-cd/s1280x1920/2a92e8774e70116e7385807a93e60a4002036980.jpg", user_id: 8, username: "harry_potter", post_type: "image")

post_9_2 = Post.create(image_url: "https://66.media.tumblr.com/dfcb79eab22257c48ac58b5eadc1f6ee/tumblr_pxdlanBKhj1vqcn4oo1_500.gif", user_id: 9, username: "artist", post_type: "image")

post_10_2 = Post.create(image_url: "https://66.media.tumblr.com/98bc629312697b4ad768529e3be3dec5/7c7ff323a9780033-29/s1280x1920/9fa501fe3a68003fcf108eb7c27807d791f409b9.jpg", user_id: 10, username: "mimi", post_type: "image")

post_5_3 = Post.create(image_url: "https://66.media.tumblr.com/efa2ba7c7368efa19edd75d849e72cc1/tumblr_p2o7k2aTUY1tmhol8o1_1280.png", user_id: 5, username: "mashu", post_type: "image")

post_6_3 = Post.create(image_url: "https://66.media.tumblr.com/309d4b5c565f0314addc12e4cfd15765/tumblr_ot1cw8AgbE1u6tm5ho1_500.gif", user_id: 6, username: "char", post_type: "image")

post_7_3 = Post.create(image_url: "https://66.media.tumblr.com/6bd40daf7339d560efd9937b59945426/tumblr_oprdw25SVD1swarr5o1_1280.png", user_id: 7, username: "bill_wurtz", post_type: "image")

post_8_3 = Post.create(video_url: "https://www.youtube.com/watch?v=OSg0YqIriO0", user_id: 8, username: "harry_potter", post_type: "video")

post_9_3 = Post.create(image_url: 'https://66.media.tumblr.com/96eb8f6c29e067be027239ccd2b42913/tumblr_prwz8wBRRt1uvsi7jo1_1280.gifv', user_id: 9, username: 'artist', post_type: 'image')

post_10_3 = Post.create(image_url: 'https://66.media.tumblr.com/0c9d9ff35f25ff95938b8e80335ecbf9/15f6d78e23d25d06-8f/s1280x1920/95373fb2959e218da4b6b0648a37b3cb4a30239a.jpg', user_id: 10, username: 'mimi', post_type: 'image')

post_5_4 = Post.create(image_url: 'https://66.media.tumblr.com/7af42a236d721b4c927610c78a71e8cd/tumblr_p8kum1K3eC1wsge6to1_1280.jpg', user_id: 5, username: 'mashu', post_type: 'image')

post_6_4 = Post.create(image_url: 'https://66.media.tumblr.com/f5f6d992798a249c7926425c168f24a4/tumblr_oun8s3zw031re6nxeo1_1280.png', user_id: 6, username: 'char', post_type: 'image')

post_7_4 = Post.create(image_url: 'https://66.media.tumblr.com/eb251b8701674f992412a9348dfd9fb6/tumblr_oprug0Hkox1vp1zvko1_500.gif', user_id: 7, username: 'bill_wurtz', post_type: 'image')

post_8_4 = Post.create(image_url: 'https://66.media.tumblr.com/dc3cff747836408b9915d6e63a50ccac/4d13e71f41dc57be-08/s540x810/dccdc3ab4cf4090e7f796782c2e3623e3a80b840.gif', user_id: 8, username: 'harry_potter', post_type: 'image')

post_9_4 = Post.create(image_url: 'https://66.media.tumblr.com/2ca5bd2910a132bf85ccd993feb1a20d/tumblr_pwwsi2CQ191rl04amo1_1280.gifv', user_id: 9, username: 'artist', post_type: 'image')

post_10_4 = Post.create(image_url: 'https://66.media.tumblr.com/e5d98a516acc819ee41d8b26442b3176/30ee66f8d18c66f0-dd/s400x600/12da3b6f4779e68874f40cbf6f0162165009f2fd.jpg', user_id: 10, username: 'mimi', post_type: 'image')

post_5_5 = Post.create(image_url: 'https://66.media.tumblr.com/736dcb1439641a141510616cf82748eb/234d84c51f1f0599-82/s1280x1920/989ebf683e1d0c6eba9908b936695bfdb00a615a.png', user_id: 5, username: 'mashu', post_type: 'image')

post_6_5 = Post.create(image_url: 'https://66.media.tumblr.com/7f159c56a403a1be98fd8c1f1e3bb49a/tumblr_oqsbq60oHK1rycvhqo1_250.jpg', user_id: 6, username: 'char', post_type: 'image')

post_7_5 = Post.create(image_url: 'https://66.media.tumblr.com/d039dd9cd9629b018f30a097388bedcb/tumblr_oprbix2nzU1s11k1to1_1280.jpg', user_id: 7, username: 'bill_wurtz', post_type: 'image')

post_8_5 = Post.create(image_url: 'https://66.media.tumblr.com/205d96026565cd7598c25fe95dd4cfa6/7f884f08e1d8d886-f0/s400x600/e9b1bad4ecfa6771425f81dccb91c606b3e9c163.jpg', user_id: 8, username: 'harry_potter', post_type: 'image')

post_9_5 = Post.create(image_url: 'https://66.media.tumblr.com/f53215f5a90c17a7d3c25741bd682427/tumblr_pwwgssO5sE1whahvko1_500.gifv', user_id: 9, username: 'artist', post_type: 'image')

post_10_5 = Post.create(image_url: 'https://66.media.tumblr.com/7d83209593e2012b2ab837bef011d103/ff8f44cf4bd0cb29-9a/s1280x1920/5588efaa9474db04de3c374d675c61e16f97304a.jpg', user_id: 10, username: 'mimi', post_type: 'image')

post_5_6 = Post.create(image_url: 'https://66.media.tumblr.com/c0415481325f95572322ac9a5acc725e/tumblr_okjobpKDnx1v5edfqo1_1280.jpg', user_id: 5, username: 'mashu', post_type: 'image')

post_6_6 = Post.create(image_url: 'https://66.media.tumblr.com/066dd09faf4c9a28300d774f4e564cfc/tumblr_od0ffguNqM1u0ukvlo1_500.jpg', user_id: 6, username: 'char', post_type: 'image')

post_7_6 = Post.create(image_url: 'https://66.media.tumblr.com/cf8f6323d93204ccd0d6611b62e2bc96/tumblr_oprajzy2PU1tj2p3no1_1280.png', user_id: 7, username: 'bill_wurtz', post_type: 'image')

post_8_6 = Post.create(image_url: 'https://66.media.tumblr.com/dca5b0fed4499d6e643f917dc949b94f/6ce57bb4f4bfc8c2-21/s540x810/ec6fbe2b11002de6787b20307d7c8fa12813f876.png', user_id: 8, username: 'harry_potter', post_type: 'image')

post_9_6 = Post.create(image_url: 'https://66.media.tumblr.com/28b02700c34c31886050bb3345f8e6f5/tumblr_pwqoq900Yb1uj7swzo1_540.gifv', user_id: 9, username: 'artist', post_type: 'image')

post_10_6 = Post.create(image_url: 'https://66.media.tumblr.com/0b30ead91f62557e4d08fe78d2d0e61f/f9efb8b0739da882-9c/s1280x1920/ad3a833b7b0337b4bfb149259ba200831e89f8f3.jpg', user_id: 10, username: 'mimi', post_type: 'image')

post_5_7 = Post.create(image_url: 'https://66.media.tumblr.com/d9fce5433474550708e767d7cfd45333/tumblr_odiq94CISO1rs01s0o1_1280.png', user_id: 5, username: 'mashu', post_type: 'image')

post_6_7 = Post.create(image_url: 'https://66.media.tumblr.com/c6ecfb7894644c5361cc8b4228e29b55/tumblr_otp79avTw61w8gzz0o1_500.gif', user_id: 6, username: 'char', post_type: 'image')

post_7_7 = Post.create(video_url: 'https://www.youtube.com/watch?v=V0HCZ4YGqbw', user_id: 7, username: 'bill_wurtz', post_type: 'video')

post_8_7 = Post.create(image_url: 'https://66.media.tumblr.com/a85973d98cefc7cf22e6e48ac6212883/tumblr_pk3ojbQgOr1qk8rzpo1_400.gif', user_id: 8, username: 'harry_potter', post_type: 'image')

post_9_7 = Post.create(title: 'Arty art', body: 'Art; the expression or application of human creative skill and imagination, typically in a visual form such as a painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power. Through analysis I believe this definition too specific and does not clearly define art. Art is much too vague and unclear for anyone to define. Sure, many pieces of art show human creative skill, imagination, and originality. But, copying is the sincerest form of flattery, and it is great practice for artist’s skills. My art teacher encourages us to draw from images or exactly what we see in about 50% of our drawings. She particularly encourages this through at home practice. Homework gives me a chance to work on artistic skills I learned in class. I also believe art cannot be confined to paintings or sculptures. True artists can spark the imagination of the viewer, whether that be through song, book, painting, or the many other ways of expression in the world. A great songwriter gives listeners insight to their mind through music. Often books transport me to other worlds, full of wizards, glamour, and stories beyond realistic means. Finally I disagree with the notion that art has to be beautiful. “That is not art, that is trash.” This a statement I have heard before. There are people who find beauty in a piece, when there are the critics who don’t. So long as this art gets a reaction, I believe its purpose was met. Today popular music depicts drinking, drugs, breakups and so much more of what occurs in society. Some may find the messages in certain songs songs horrific, while others enjoy the beauty of the rapping or the fast beats. Music certainly is a work of art, no matter how popular or bad it is. It is art because it creates out a reaction from people. New Oxford American Dictionary incorrectly defines what art really is. Art is an expression of anything that creates a reaction. To convey my feelings I draw; I paint; I write; I photograph; I create; I do many things. Drawing is one of my favorite hobbies. I express my imagination and creativity through drawing. One of my favorite things to draw are fashion drawings. Through these I express my thoughts about outfits from certain TV shows, red carpet fashions, the hall ways at school, the magazines, anything. Art expresses dreams and reality. I use art to dream of being a fashion designer when I draw clothes in my sketchbook, or when I feel like being a photographer while I snap blurry pictures of cheesy scenery. Most recently I have imagined myself as a jewelry designer, creating necklaces and bracelets. My art also expresses what I have seen or experienced in reality. I create visuals from memories of certain places I have visited through scrapbooks. I love to write about vacations and enjoyable times. Projects in school that involve creative components always excite me because I can use my art education to convey my ideas on topics. Maybe that is why art class is my favorite class. Although art class structures the skills of art, it can never be confined to room 162. Art is all around the world, expressed in different ways, too many to fit into a definition.', user_id: 9, username: 'artist', post_type: 'text')

post_10_7 = Post.create(image_url: 'https://66.media.tumblr.com/c88441e3c1a3d672b0b929b0ee1461f0/8526dc0f5892eb8c-ad/s400x600/8726b6e890a0e21c9117993da5d8ff90c5c56b23.gif', user_id: 10, username: 'mimi', post_type: 'image')

post_5_8 = Post.create(image_url: 'https://66.media.tumblr.com/ef7a8195ac1f112cf528793ffe6af9f3/tumblr_oxft568Dlx1spxkf4o2_r1_1280.png', user_id: 5, username: 'mashu', post_type: 'image')

post_6_8 = Post.create(image_url: 'https://66.media.tumblr.com/eb2b352e373091111767ad3691f29b6f/tumblr_ovgg1v0dHR1vct3zyo2_1280.png', user_id: 6, username: 'char', post_type: 'image')

post_7_8 = Post.create(video_url: 'https://www.youtube.com/watch?v=_c1NJQ0UP_Q', user_id: 7, username: 'bill_wurtz', post_type: 'video')

post_8_8 = Post.create(image_url: 'https://66.media.tumblr.com/e579dd006fbdd6577f0fa4d7efc7b99c/tumblr_pkdshaLV0A1wvemi3_400.gif', user_id: 8, username: 'harry_potter', post_type: 'image')

post_9_8 = Post.create(image_url: 'https://66.media.tumblr.com/9e2f8004ebca97e1c78e979e9cc9bc30/tumblr_pwjiavcia51whahvko1_500.gif', user_id: 9, username: 'artist', post_type: 'image')

post_10_8 = Post.create(image_url: 'https://66.media.tumblr.com/3ff9e4708abd45126bce7719c0e992eb/50d858680a2d275b-65/s1280x1920/68481cafa1e104e3cd0819763d294cc4f4fac9b5.jpg', user_id: 10, username: 'mimi', post_type: 'image')

post_5_9 = Post.create(image_url: 'https://66.media.tumblr.com/5e4438f9933a6f1c38b8c453550f3efc/tumblr_owfn7ifu4x1roqda3o1_540.gif', user_id: 5, username: 'mashu', post_type: 'image')

post_6_9 = Post.create(image_url: 'https://66.media.tumblr.com/85d1e6463c69eca57a0b093f6ad82059/tumblr_og1cheAFe41qhxf07o1_1280.jpg', user_id: 6, username: 'char', post_type: 'image')

post_7_9 = Post.create(video_url: 'https://www.youtube.com/watch?v=Mh5LY4Mz15o', user_id: 7, username: 'bill_wurtz', post_type: 'video')

post_8_9 = Post.create(video_url: 'https://www.youtube.com/watch?v=Htaj3o3JD8I', user_id: 8, username: 'harry_potter', post_type: 'video')

post_9_9 = Post.create(image_url: 'https://66.media.tumblr.com/e162d18e32147f4fcf83ba9b2b4b852e/tumblr_pwfsrjMrx41whahvko1_500.gif', user_id: 9, username: 'artist', post_type: 'image')

post_10_9 = Post.create(image_url: 'https://66.media.tumblr.com/d2beddfbd2d932cc3ec94f172ada8d63/tumblr_pjjm48Phgj1t1ig6no1_1280.gif', user_id: 10, username: 'mimi', post_type: 'image')

post_5_10 = Post.create(image_url: 'https://66.media.tumblr.com/0354e9d0979ef625cb8ac935343981b7/tumblr_ossbfmMo4y1vvzrxxo1_1280.gif', user_id: 5, username: 'mashu', post_type: 'image')

post_6_10 = Post.create(image_url: 'https://66.media.tumblr.com/66a6d0446e25f4596419865b627fd2c6/tumblr_onrw1xScSz1s9fn3ko1_540.gif', user_id: 6, username: 'char', post_type: 'image')

post_7_10 = Post.create(video_url: 'https://www.youtube.com/watch?v=xuCn8ux2gbs', user_id: 7, username: 'bill_wurtz', post_type: 'video')

post_8_10 = Post.create(image_url: 'https://66.media.tumblr.com/d22e2627620c7bc21ca801513da4bde6/7dd81a9baa4a96c2-42/s400x600/3f103c3f14ea26c3c3903ad3e869d33d66ae2642.jpg', user_id: 8, username: 'harry_potter', post_type: 'image')

post_9_10 = Post.create(image_url: 'https://66.media.tumblr.com/e0b747711d8ba71aaa65b0fedbb6fbac/tumblr_pqqnszgXNO1wj7q7vo1_1280.gif', user_id: 9, username: 'artist', post_type: 'image')

post_10_10 = Post.create(image_url: 'https://66.media.tumblr.com/f0bfc1819ca1c8a85f9feb71072b1e86/c5afea9d14fc85b3-66/s1280x1920/abd99328e98cae3339020d322082bec66aa85278.png', user_id: 10, username: 'mimi', post_type: 'image')