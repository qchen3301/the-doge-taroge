class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.string :card_name
      t.string :arcana
      t.boolean :reversed
      t.bigint :value
      t.references :spread, foreign_key: true
      t.timestamps
    end
  end
end