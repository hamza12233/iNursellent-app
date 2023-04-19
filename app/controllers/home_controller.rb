class HomeController < ActionController::Base
  protect_from_forgery with: :null_session
  layout "application"

  def index
    return  current_user.nil?
    if current_user&.role == "user"
      redirect_to nurse_dashboard_index_path
    elsif current_user&.role == "admin"
      # redirect_to admin_team_index_path
    end
  end

  def create
    if params[:user_email].present?
      user = User.find_or_initialize_by(email: params[:user_email]) 
      user.password = SecureRandom.alphanumeric(8)
      user.save
      get_four_digit_code(user.email)
    end
  end

  def sign_up
    @user = User.new
  end

  def professionals; end 
  
end
