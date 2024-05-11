class User < ApplicationRecord
    validates :email, uniqueness: true, length: { in: 3..100 }, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :password, length: { minimum: 6 }, allow_nil: true
    validates :name, presence: true

    has_many :cart_items

    has_secure_password #defines password= and authenticate
    before_validation :ensure_session_token

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.authenticate(password)
            user
        else
            nil
        end
    end

    def reset_session_token!
        self.session_token = generate_unique_session_token
        save!
        session_token
    end

    def ensure_session_token
        self.session_token ||= generate_unique_session_token
    end

    private
    def generate_unique_session_token
        loop do 
            token = SecureRandom.urlsafe_base64
            return token unless User.exists?(session_token: token)
        end
    end
end
