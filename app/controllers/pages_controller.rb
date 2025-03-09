# frozen_string_literal: true

class PagesController < ApplicationController
  layout "pages"

  def home
    @home_props = { name: current_user&.name || "Visiteur", authenticityToken: form_authenticity_token }
  end
end
