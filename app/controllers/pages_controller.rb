# frozen_string_literal: true

class PagesController < ApplicationController
  def home
    @home_props = { name: current_user&.name || "Visiteur", authenticityToken: form_authenticity_token, currentUser: current_user }
  end
end
