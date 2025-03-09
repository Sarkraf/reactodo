# frozen_string_literal: true

class PagesController < ApplicationController
  layout "pages"

  def home
    @home_props = { name: current_user&.name || "Stranger" }
  end
end
