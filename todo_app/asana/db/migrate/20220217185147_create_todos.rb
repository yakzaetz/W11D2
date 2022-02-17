class CreateTodos < ActiveRecord::Migration[5.2]
  def change
    create_table :todos do |t|
      t.string :title, null: false, unique: true
      t.string :body, null: false
      t.boolean :done, null: false
      t.timestamps
    end
    add_index :todos, :title
  end
end
