class TodosController < ApplicationController

    def show
        render json: Todo.find(params[:id])
    end

    def create
        @todo = Todo.new(todo_params)
        if @todo.save
            render json: @todo
        else
            render json: @todo.errors.full_messages, status: 422
        end
    end

    def index
        @todos = Todo.all
        render json: @todos
    end

    def update
        @todo = Todo.find(params[:id])
        if @todo.update(todo_params)
            render show
        else
            render index
        end 
    end

    def destroy
        @todo = Todo.find(params[:id])
        @todo.destroy
        render index
    end

    private 
    def todo_params
        params.require(:todo).permit(:title, :body, :done)
    end
end
