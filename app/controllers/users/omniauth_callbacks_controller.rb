class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  skip_before_action :verify_authenticity_token, only: :github

  def github
    user = User.from_omniauth(request.env["omniauth.auth"])
    if user.persisted?
      sign_in_and_redirect user, event: :authentication
      flash[:notice] = "Connexion réussie via GitHub !"
    else
      redirect_to new_user_registration_url, alert: "Erreur lors de la connexion GitHub."
    end
  end

  def failure
    redirect_to root_path, alert: "Échec de l'authentification."
  end
end
