class HomeController < ActionController::Base
  protect_from_forgery with: :null_session
  protect_from_forgery unless: -> { request.format.json? }
  layout "application"

  def index
    # return  current_user.nil?
    # if current_user&.role == "user"
    #   redirect_to nurse_dashboard_index_path
    # elsif current_user&.role == "admin"
    #   # redirect_to admin_team_index_path
    # end
  end

  def create
    if params[:user_email].present?
      user = User.find_or_initialize_by(email: params[:user_email]) 
      user.password = SecureRandom.alphanumeric(8)
      user.email = 23
      if user.save
        # send welcome email to user with code and initial password
        puts helpers.get_four_digit_code(user.email)
        # return true and proceed to 4D code screen
        render json: { success: true, user: user }
      else
        render json: { success: false, error: user.errors.full_messages }
      end
    end
  end

  def verify_code
    if helpers.get_four_digit_code(user.email) == params[:code]
      render json: { success: true }
    else
      render json: { success: false }
    end
  end

  def sign_up
    @user = User.new
  end

  def professionals; end 
  
end
