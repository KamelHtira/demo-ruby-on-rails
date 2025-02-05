# frozen_string_literal: true

class AssetsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: %i[serve_js]

  def serve_js
    file_name = params[:filename]
    file_path = Rails.root.join("vendor", "assets", "javascripts", file_name)

    if File.exist?(file_path)
      send_file(file_path, type: "application/javascript", disposition: "inline")
    else
      render plain: "File not found", status: :not_found
    end
  end
end
