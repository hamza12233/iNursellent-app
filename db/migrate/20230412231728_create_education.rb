class CreateEducation < ActiveRecord::Migration[6.1]
  def change
    create_table :educations do |t|
      t.string :degree
      t.string :institute_name
      t.string :city
      t.string :website
      t.date :date_of_degree

      t.references :user

      t.timestamps
    end
  end
end
