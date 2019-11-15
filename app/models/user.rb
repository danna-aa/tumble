# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  title           :string
#  private         :boolean          default(FALSE), not null
#  description     :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'open-uri'

class User < ApplicationRecord
    # validations
    validates :username, :email, :password_digest, :session_token, presence: true, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 
    validates :password, length: { minimum: 6 }, allow_nil: true
    validates :private, inclusion: { in: [ true, false ] }
    
    # user auth
    after_initialize :ensure_session_token
    after_initialize :ensure_avatar
    attr_reader :password
    
    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        user && user.is_password?(password) ? user : nil 
    end

    def password=(password)
        @password = password 
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token
        self.session_token = generate_session_token
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= generate_session_token
    end

    def generate_session_token
        SecureRandom.urlsafe_base64
    end

    DEFAULT_AVATARS = [
        'https://i.imgur.com/OpW7qCd.png',
        'https://i.imgur.com/aEr4I1D.png',
        'https://i.imgur.com/3nhqo4F.png',
        'https://i.imgur.com/lzJzuN2.png',
        'https://i.imgur.com/PDkdrm6.png',
        'https://i.imgur.com/08sSlrI.png',
        'https://i.imgur.com/QtFQt8p.png',
        'https://i.imgur.com/klaH0DO.png',
        'https://i.imgur.com/piyqSHU.png',
        'https://imgur.com/jnGiG1S.jpeg'
    ]

    def ensure_avatar
        if !self.avatar.attached?
            self.avatar.attach(io: open(DEFAULT_AVATARS.sample), filename: 'default_avatar')
        end
    end

    # associations
    has_one_attached :avatar

    has_many :posts,
        foreign_key: :user_id,
        class_name: :Post

    def num_posts 
        self.posts.length
    end
        
    has_many :likes
    
    has_many :liked_posts,
        through: :likes,
        source: :post

    has_many :comments

    has_many :my_comments_on_other_posts,
        through: :comments,
        source: :post
    
    has_many :my_posts_comments,
        through: :posts,
        source: :comments
        
    has_many :follows,
        foreign_key: :follower_id,
        class_name: :Follow

    has_many :followers,
        foreign_key: :creator_id,
        class_name: :Follow

    # has_many :follows,
    #     foreign_key: :follower_id,
    #     class_name: :Follow
    # has_many :followers,
    #     through: :follows,
    #     inverse_of: :follower

    has_many :followed_posts, through: :follows

    # dashboard
    def dashboard
        own_posts_list = self.posts.includes(
            :user, 
            :likes,
            :likers, 
            :comments, 
            :tags
        )
        followed_posts_list = self.followed_posts.includes(
            :user, 
            :likes,
            :likers, 
            :comments, 
            :tags
        )
        dash_posts = (own_posts_list + followed_posts_list)
        # .sort_by {|post| post.updated_at }
    end

    # notifications 
    def notifications
        notifications_array = self.followers
        self.posts.each do |post|
            notifications_array += post.notes
        end
        notifications_array
    end

    # messages
    has_many :sent_posts,
        foreign_key: :sender_id,
        class_name: :Message

    has_many :received_posts,
        foreign_key: :recipient_id,
        class_name: :Message

    # all users 
    def all_users
        User.all
    end


end
