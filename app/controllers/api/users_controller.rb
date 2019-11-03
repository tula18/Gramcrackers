class Api::UsersController < ApplicationController
  def index 
    @users = User.all
  end

  def create 
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show 
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  private 
  def user_params
    params.require(:user).permit(:username, :email, :first_name, :last_name, :birthday, :gender, :password)
  end
end
end
