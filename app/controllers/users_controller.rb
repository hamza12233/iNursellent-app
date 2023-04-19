class UsersController < ApplicationController
  before_action :get_user

  def edit; end

  def update
    if @user.update(user_params)
      flash[:success] = "Password Changed Successfully! Please sign in again with the new password."
      redirect_to root_path
    else
      flash[:error] = @user.errors.full_messages.to_sentence
      redirect_to edit_user_path(@user.id)
    end
  end

  def send_signup_code
    code = get_four_digit_code(@user.email)
    # email
  end

  private

  def user_params
    params.require(:user).permit(:password, :password_confirmation)
  end

  def get_user
    @user =  User.find(params[:id])
  end
end
