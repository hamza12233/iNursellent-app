class ApplicationController < ActionController::Base
  include ApplicationHelper

  before_action :authenticate_user!
  before_action :configure_permitted_parameters, if: :devise_controller?

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name,:role])
    devise_parameter_sanitizer.permit(:accept_invitation, keys: [:email,:role,:name])
  end
end
