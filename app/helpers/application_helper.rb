module ApplicationHelper
  def logged_in?
    !!session[:user_id]  # Example check: Change based on your authentication logic
  end
end
