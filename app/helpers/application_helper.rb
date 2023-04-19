module ApplicationHelper
  def get_four_digit_code(email)
    email.tr( "abcdefghijklmnopqrstuvwxyz", "0123456789abcdefghijklmnopq" ).to_i(26).to_s[0,4]
  end

end
