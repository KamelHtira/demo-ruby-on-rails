class ApplicationController < ActionController::Base
  before_action :require_login
  
  private
  
  def require_login
    unless logged_in?
      flash[:error] = "You must be logged in to access this section"
      redirect_to login_path
    end
  end
  
  def logged_in?
    !!session[:user_id]
  end
  
  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end
end