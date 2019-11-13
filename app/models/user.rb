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


class User < ApplicationRecord
    # validations
    validates :username, :email, :password_digest, :session_token, presence: true, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 
    validates :password, length: { minimum: 6 }, allow_nil: true
    validates :private, inclusion: { in: [ true, false ] }
    
    # user auth
    after_initialize :ensure_session_token
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

    # associations
    has_many :posts,
        foreign_key: :user_id,
        class_name: :Post
    has_many :likes

    has_many :liked_posts,
        through: :likes,
        source: :post

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

    def dashboard
        own_posts_list = self.posts.includes(
            :user, 
            # :root_post,
            # :parent_post,
            # :child_posts,
            # :direct_child_post,

            :likes,
            :likers, 
            :notes, 
            :tags
        )
        # own_posts_list = []
        # followed_posts_list = []
        followed_posts_list = self.followed_posts.includes(
            :user, 
            # :root_post,
            # :parent_post,
            # :child_posts,
            # :direct_child_post,

            :likes,
            :likers, 
            :notes, 
            :tags
        )
        dash_posts = (own_posts_list + followed_posts_list).sort_by {|post| post.updated_at }
    end

end
