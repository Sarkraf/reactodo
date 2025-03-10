class TodosController < ApplicationController
  before_action :authenticate_user!

  def index
    @props = { todos: current_user.todos, currentUser: current_user }
  end
end
