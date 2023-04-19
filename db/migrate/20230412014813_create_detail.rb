class CreateDetail < ActiveRecord::Migration[6.1]
  def change
    create_table :details do |t|
      t.string :address
      t.string :mobile_no
      t.string :zip_code
      t.string :total_experience
      t.boolean :nclex_rx
      t.boolean :english_proficiency
      t.boolean :cgfns_certificate
      t.jsonb :contact_preference
      t.jsonb :prefered_countries
      t.jsonb :prefered_state
      t.string :prefered_description
      

      t.references :user

      t.timestamps
    end
  end
end
