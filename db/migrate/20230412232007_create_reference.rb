class CreateReference < ActiveRecord::Migration[6.1]
  def change
    create_table :references do |t|
      t.string :name
      t.string :contact_no
      t.string :email

      t.string :occupation
      t.string :company_name
      t.integer :reference_type

      t.references :user

      t.timestamps
    end
  end
end
