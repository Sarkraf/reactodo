# frozen_string_literal: true

class PagesController < ApplicationController
  def home
    @props = {
      currentUser: current_user || { name: 'Visiter' },
      authenticityToken: form_authenticity_token
    }
  end
end
