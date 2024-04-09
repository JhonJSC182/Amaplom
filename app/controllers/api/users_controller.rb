class Api::UsersController < ApplicationController
    wrap_parameters include: User.attribute_names + ['password']
    before_action :require_logged_out, only: [:create]

    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private
    def user_params
        params.require(:user).permit(:name, :email, :password)
    end
end

# need to include name, email and password for when creating the user