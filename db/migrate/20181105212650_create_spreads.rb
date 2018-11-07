class CreateSpreads < ActiveRecord::Migration[5.2]
  def change
    create_table :spreads do |t|
      t.string :date
      t.string :notes
      t.references :user
      t.timestamps
    end
  end
end
