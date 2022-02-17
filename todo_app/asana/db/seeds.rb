# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# ActiveRecord::Base.transaction do
  Todo.destroy_all

  todo1 = Todo.create!(title: "clean hair", body: "shampoo and conditioner", done: false)
  todo2 = Todo.create!(title: "clean room", body: "sdfgsdfgasdgas", done: false)
  todo3 = Todo.create!(title: "clean car", body: "agdfsfdvgfasdeg", done: false)
# end
