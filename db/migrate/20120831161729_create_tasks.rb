class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :name, :null => false
      t.text :description, :null => false
      t.references :user, :null => false
      t.date :start_date, :null => false
      t.date :end_date, :null => false
      t.integer :master_task_id, :null => true
      t.integer :tasks_count
      t.string :status, :null => true
      t.boolean :finished, :null => false
      t.timestamps
    end
  end
end
